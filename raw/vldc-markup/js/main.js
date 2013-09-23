/**
 * Created by JetBrains PhpStorm.
 * User: Lukin Anton
 * Date: 23.09.13
 * Time: 11:09
 */

$(function() {
	$('.js-header-close').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.header').slideUp();
	});
});