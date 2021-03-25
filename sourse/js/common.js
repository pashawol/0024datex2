
"use strict"
var $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: true,
			touch: false,
			type: "inline",
			autoFocus: false,
			// closeExisting: true,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	paddRight(elem) {
		var div = document.createElement('div');
		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		document.body.append(div);
		var padd = div.offsetWidth - div.clientWidth; // console.log(1);

		$(elem).css("paddingRight", padd);
		div.remove();
	},

	marRight(elem) {
		var div = document.createElement('div');
		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		document.body.append(div);
		var mar = div.offsetWidth - div.clientWidth; // console.log(1);

		$(elem).css("marginRight", mar);
		div.remove();
	},

	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");




				if ($("body").hasClass("fixed")) {

					JSCCommon.marRight('body ');
				} else {
					$("body ").css("marginRight", 0);

				}

				// paddRight('.menu-mobile__inner');
				return false;
			});
		});
	},

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {

				// _this.closeMenu();

			});
		})

	},
	// /mobileMenu


	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};



jQuery(document).ready(function () {
	JSCCommon.paddRight('.top-line');
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	var header = $('.top-line'),
		scrollPrev = 0;
	function positionWindow() {
		var scrolled = $(window).scrollTop();

		if (scrolled > 100 && scrolled > scrollPrev) {
			header.addClass('out');
		} else {
			header.removeClass('out').removeClass('wow').addClass('visible');
		}
		scrollPrev = scrolled;

	}
	positionWindow();
	$(window).scroll(function () {
		positionWindow();
	});


	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	var headSl = new Swiper('.header-block__slider--js', {
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 27,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30, 
	});

	var caseSl = new Swiper('.s-cases__slider--js', {
		slidesPerView: 1,
		// watchOverflow: true,
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			preloadImages: false,
		},

		pagination: {
			el: $('.s-cases .swiper-pagination'),
			type: 'bullets',
			clickable: true,
		},
		// spaceBetween: 30, 
	});

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	var defaultSl = {
		spaceBetween: 20,
		// watchOverflow: true,
		// spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			preloadImages: false,
		},

		pagination: {
			el: $('.s-advantages .swiper-pagination'),
			type: 'bullets',
			clickable: true,
			// dynamicBullets: true,
		},

	}
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)
		var advSl = new Swiper('.s-advantages__slider--js', {
			slidesPerView: 4,
			...defaultSl,

		});
	}
	else {


		var advSl = new Swiper('.s-advantages__slider--js', {
			slidesPerView: 1,
			...defaultSl,
			breakpoints: {

				// when window width is >= 320px
				576: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is >= 480px
				992: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				// when window width is >= 640px
				1200: {
					spaceBetween: 30,
					slidesPerView: 4
				}
			}
		});
	}

	// анимация  при скролле 

	var wow = new WOW({
		mobile: false
	});

	$('#fullpage').fullpage({
		// scrollingSpeed: 1000,
		loopHorizontal: true,
		responsiveWidth: 1200,
		responsiveHeight: 800,
		animateAnchor: true,
		navigation: true,
		navigationPosition: 'right',
		recordHistory: false,
		// verticalCentered: false,
		fixedElements: '.top-line',
		scrollBar: true,
		// continuousVertical: true,
		// autoScrolling: true,
		// scrollOverflow: true,
		// scrollOverflowReset: true,
		// scrollOverflowReset: true,
		afterRender: function () {
			var rellax = new Rellax('.rellax', {});
			wow.init();

		},
	});
	let link = ".menu-item-has-children > a";
	$(".menu-mobile--js ").on('hover', link , function(e){
		$(".menu-mobile--js .sub-menu").removeClass("active");
	});
	
	$(".menu-mobile--js ").on('click', link , function(e){
		e.preventDefault();
	});

	const subMenu = $(".menu-mobile--js ");

	subMenu.on("click", link , function() {
		let title = $(this).text();
		$(this).parent().addClass("active").siblings().addClass("not-visible");
		$(this).next().find(".back-js").remove();
		$(this).next().prepend(`<li class="back-js">${title}</li>`);

	});

	subMenu.on("click", ".back-js", function() {
		$(this).parents('.menu-item-has-children').removeClass("active").siblings().removeClass("not-visible");

	});

});
