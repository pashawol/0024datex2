const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
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

				_this.closeMenu();

			});
		})
		// document.addEventListener('mouseup', function (event) {
		// 	let container = event.target.closest(".menu-mobile--js.active"); // (1)
		// 	if (!container) {
		// 		_this.closeMenu();

		// 	}
		// });
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/DATEX_HOME.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});


	const defaultSlide = {
		speed: 600,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		// prevArrow: arrr2,
		// nextArrow: arrl2,
		// autoplay: true,
		autoplaySpeed: 6000,
		lazyLoad: 'progressive',
	};
	var headSl = new Swiper('.header-block__slider--js', {
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 37,
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

	if (isIE11) {
		var advSl = new Swiper('.s-advantages__slider--js', {
			slidesPerView: 4,
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

		});
	}
	else {


		var advSl = new Swiper('.s-advantages__slider--js', {
			slidesPerView: 1,
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
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}