$(function () {
	// form close
	var $header = $('.header'),
		$intro = $('.intro');

	$('.js-header-close').on('click', function (e) {
		e.preventDefault();

		$header.slideUp(function () {
			$intro.slideDown();
		});
	});

	// open form
	$('.js-participate').on('click', function (e) {
		e.preventDefault();

		$intro.slideUp(function () {
			$header.slideDown();
		});
	});

	// smooth scroll
	$('.js-smooth-scroll').find('a').on('click', function (e) {
		e.preventDefault();

		var destination = $($(this).attr("href")).offset().top;
		$('html, body').animate({ scrollTop: destination }, 1100);
	});
});