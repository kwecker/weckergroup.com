<?php
	$menuItems = [
		'Home' => '/',
		'Our Work' => '/work/',
		'About Us' => '/about/'
	];


	function makeMenu($items, $active) {
		$output = '<ul class="menu">';
		foreach($items as $name => $slug) {
			$output .= '<li class="menu__item"><a href="' . $slug . '" class="menu__link'. (($active == $name) ? ' active' : '') . '">' . $name . "</a></li>";
		}
		$output .= '</ul>';

		return $output;
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>The Wecker Group | Monterey County Advertising and Graphic Design</title>

	<!-- build:css /css/main.min.css -->
	<link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i" rel="stylesheet">
	<link rel="stylesheet" href="/css/normalize.css" />
	<link rel="stylesheet" href="/css/skeleton.css" />
	<link rel="stylesheet" href="/css/main.css" />
	<!-- endbuild -->
</head>
<body>
	<div class="wrapper">
		<header class="main-header">
			<nav class="main-navigation group container--long">
				<?=makeMenu($menuItems, $section)?>
			</nav>
			<div class="container">
				<a href="/" class="logo">
					<img src="/images/logo.svg" alt="W" class="logo__mark">
					<img src="/images/logotype.svg" alt="The Wecker Group" class="logo__logotype">
				</a>
			</div>

			<section class="contact-information">
				<div class="container">
					<span class="phone">831-372-8377</span><span class="email"><a href="mailto:wecker@weckergroup.com">wecker@weckergroup.com</a></span>
				</div>
			</section>
		</header>

