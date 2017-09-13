$(document).ready(function() {
	// Waypoints
	var $home = $('#home'),
		$work = $('#work'),
		$about = $('#about'),
		sections = [$home, $work, $about];

	function changeActive(id) {
		$('.menu__link').removeClass('active');
		$('.menu__link[href="#'+id+'"]').addClass('active');
	}

	sections.forEach(function(element) {
		element.waypoint(function(direction) {
			if (direction == 'down') {
				changeActive(element.attr('id'));
			}
		}, { offset: '25%' });

		element.waypoint(function(direction) {
			if (direction == 'up') {
				changeActive(element.attr('id'));
			}
		}, { offset: '-25%' });
	});

	// Sticky navigation bar
	var $menu = $(".main-navigation"),
		$header = $(".main-header");

	function setMenu() {
		var pos = $header.height() - $menu.height();
		if (window.pageYOffset > pos) {
			$menu.addClass('fixed');
		} else {
			$menu.removeClass('fixed');
		}
	}
	setMenu();

	// Menu Button Action
	$menu.find('a').click(function() {
		var e = $(this).attr('href');
		var pos = $(e).position().top - $menu.height() - 48;

		$('html,body').animate({scrollTop: pos}, 400);

		return false;
	});


	// Window scroll
	$(window).scroll(function() {
		setMenu();
	});
});