$(document).ready(function() {
	var $menu = $(".menu"),
		$header = $(".main-header"),
		$contactInfo = $header.children(".contact-information");

	function setMenu() {
		var pos = $header.height() - $contactInfo.height() - $menu.height();
		if (window.pageYOffset > pos) {
			$menu.addClass('fixed');
		} else {
			$menu.removeClass('fixed');
		}
	}
	setMenu();

	$(window).scroll(function() {
		setMenu();
	});
});