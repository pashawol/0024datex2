"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: true,
			touch: false,
			type: 'inline',
			autoFocus: false,
			// closeExisting: true,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад"
				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	paddRight: function paddRight(elem) {
		var div = document.createElement('div');
		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		document.body.append(div);
		var padd = div.offsetWidth - div.clientWidth; // console.log(1);

		$(elem).css("paddingRight", padd);
		div.remove();
	},
	marRight: function marRight(elem) {
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
	toggleMenu: function toggleMenu() {
		var _this = this;

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
				} // paddRight('.menu-mobile__inner');


				return false;
			});
		});
	},
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				_this.closeMenu();
			});
		});
	},
	// /mobileMenu
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};
jQuery(document).ready(function () {
	JSCCommon.paddRight('.top-line'); // полифил для object-fit

	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	var header = $('.top-line'),
			scrollPrev = 0;
	$(window).scroll(function () {
		var scrolled = $(window).scrollTop();

		if (scrolled > 100 && scrolled > scrollPrev) {
			header.addClass('out');
		} else {
			header.removeClass('out').removeClass('wow').addClass('visible');
		}

		scrollPrev = scrolled;
	}); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var headSl = new Swiper('.header-block__slider--js', {
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 27,
		freeMode: true,
		freeModeMomentum: true // spaceBetween: 30, 

	});
	var caseSl = new Swiper('.s-cases__slider--js', {
		slidesPerView: 1,
		// watchOverflow: true,
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			preloadImages: false
		},
		pagination: {
			el: $('.s-cases .swiper-pagination'),
			type: 'bullets',
			clickable: true
		} // spaceBetween: 30, 

	});
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	var defaultSl = {
		spaceBetween: 20,
		// watchOverflow: true,
		// spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			preloadImages: false
		},
		pagination: {
			el: $('.s-advantages .swiper-pagination'),
			type: 'bullets',
			clickable: true // dynamicBullets: true,

		}
	};

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
		var advSl = new Swiper('.s-advantages__slider--js', _objectSpread({
			slidesPerView: 4
		}, defaultSl));
	} else {
		var advSl = new Swiper('.s-advantages__slider--js', _objectSpread({
			slidesPerView: 1
		}, defaultSl, {
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
		}));
	} // анимация  при скролле 


	var rellax = new Rellax('.rellax', {
		// breakpoints: [576, 768, 1201],
		// center: true
		callback: function callback(positions) {}
	});
	var wow = new WOW({
		mobile: false
	});
	wow.init(); // боковые укатели слайдов
	// Cache selectors

	var lastId,
			topMenu = $(" .aside-mnu"),
			topMenuHeight = 20,
			// topMenuHeight = topMenu.outerHeight()+15,
	// All list items
	menuItems = topMenu.find("a"),
			// Anchors corresponding to menu items
	scrollItems = menuItems.map(function () {
		var item = $($(this).attr("href"));

		if (item.length) {
			return item;
		}
	}); // Bind click handler to menu items
	// so we can get a fancy scroll animation

	menuItems.click(function (e) {
		var href = $(this).attr("href"),
				offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 1100);
		e.preventDefault();
	}); // Bind to scroll

	$(window).scroll(function () {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight; // Get id of current scroll item

		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop) return this;
		}); // Get the id of the current element

		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id; // Set/remove active class

			menuItems.removeClass("active").parent().end().filter("[href='#" + id + "']").addClass("active");
		}
	});
});