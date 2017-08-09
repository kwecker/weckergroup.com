$(document).ready(function() {
	// Waypoints
	var $home = $('#home'),
		$work = $('#work'),
		$about = $('#about');

	function changeActive(id) {
		$('.menu__link').removeClass('active');
		$('.menu__link[href="#'+id+'"]').addClass('active');
	}

	$home.waypoint(function(direction) {
		if (direction == 'down') {
			changeActive('home');
		}
	}, { offset: '25%' });

	$home.waypoint(function(direction) {
		if (direction == 'up') {
			changeActive('home');
		}
	}, { offset: '-25%' });

	$work.waypoint(function(direction) {
		if (direction == 'down') {
			changeActive('work');
		}
	}, { offset: '25%' });

	$work.waypoint(function(direction) {
		if (direction == 'up') {
			changeActive('work');
		}
	}, { offset: '-25%' });

	$about.waypoint(function(direction) {
		if (direction == 'down') {
			changeActive('about');
		}
	}, { offset: '25%' });

	$about.waypoint(function(direction) {
		if (direction == 'up') {
			changeActive('about');
		}
	}, { offset: '-25%' });

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
		$('html,body').animate({scrollTop: ($(e).position().top - $menu.height() - 48)}, 500);

		return false;
	});


	// Window scroll
	$(window).scroll(function() {
		setMenu();
	});
});