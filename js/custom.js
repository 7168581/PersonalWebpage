
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
		}
		else
		{
			$('.nav-custom li').css({
				'padding': '10px 0px 10px 0px'
			});
		}
	});
	
/****************************Contact List*****************************/
	
});