
$(document).ready(function() {

/****************************Navigation Bar Redirect*****************************/
    $( ".personal-page, .homepage").click(function() {
        window.location = "index.html"
	});
	
	$( ".profile" ).click(function() {
        window.location = "profile.html"
	});
		
	$( ".previous-project" ).click(function() {
        window.location = "projects.html"
	});

/****************************Navigation Bar Activation*****************************/
	$(function() {
	var title = $(".nav-title").text();
	$('.nav-custom li').removeClass('active');
	
	
	switch(title){
	case 'Home':
		$(".homepage").addClass('active');
		break;
	case 'Previous Projects':
		$(".previous-project").addClass('active');
		break;
	case 'About Me':
		$(".profile").addClass('active');
		break;
	default:
		$(".nav-custom .homepage").addClass('active');
	}
	});

/****************************Navigation Bar*****************************/
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0)
		{
			$('.nav-custom li').css({
				'padding': '5px 0px 5px 0px'
			});
			$('.dropdown').css({
				'margin-top': '5px'
			});
		}
		else
		{
			$('.nav-custom li').css({
				'padding': '10px 0px 10px 0px'
			});
			$('.dropdown').css({
				'margin-top': '10px'
			});
		}
	});
	
/****************************Project Carousel*****************************/
	/*===========homepage==========*/
	blueimp.Gallery(
		//document.getElementById('links').getElementsByTagName('a'),
		[
			{
				href: 'img/rsz_zeplermountbatten.jpg',
				title: 'School of Electronics and Computer Science (Mountbatten and Zepler buildings)',
				class: 'partial'
			},
			{
				href: 'img/rsz_avenuecampus.jpg',
				title: 'Avenue Campus'
			},
			{
				href: 'img/rsz_TurnerSimsConcertHall.jpg',
				title: 'Turner Sims Concert Hall in Highfield Campus'
			},
			{
				href: 'img/rsz_HartleyLibraryRear.jpg',
				title: 'Hartley Library in Highfield Campus'
			},
		],
		{
			container: '#homepage-carousel',
			carousel: true
		}
	);
	/*===========recommender-system==========*/
	blueimp.Gallery(
		[
			{
				href: 'img/twitter-backgrounds.jpg',
				title: 'twitter'
			},
			{
				href: 'img/background.jpg',
				title: 'background'
			},
			{
				href: 'img/rainbow-wallpaper.jpg',
				title: 'rainbow'
			},
		],
		{
			container: '#recommender-system-carousel',
			carousel: true
		}
	);
		
	/*===========cloud-gaming==========*/
	blueimp.Gallery(
		[
			{
				href: 'img/rainbow-wallpaper.jpg',
				title: 'rainbow'
			},
			{
				href: 'img/twitter-backgrounds.jpg',
				title: 'twitter'
			},
			{
				href: 'img/background.jpg',
				title: 'background'
			},
		],
		{
			container: '#cloud-gaming-carousel',
			carousel: true
		}
	);
});