
$(document).ready(function() {

/****************************Navigation Bar Redirect*****************************/

    $( ".personal-page, .homepage").click(function() {
    	var title = $('.homepage div').text();
    	if(title == 'Home'){
        	window.location = "index.html"
    	}else if(title == '主页'){
    		window.location = "index_simplified.html"
    	}else if(title == '主頁'){
    		window.location = "index_traditional.html"
    	}
	});
	
	$( ".profile" ).click(function() {
		var title = $('.profile div').text();
        if(title == 'About Me'){
        	window.location = "profile_english.html"
    	}else if(title == '个人资料'){
    		window.location = "profile_simplified.html"
    	}else if(title == '個人資料'){
    		window.location = "profile_traditional.html"
    	}
	});
		
	$( ".previous-project" ).click(function() {
		var title = $('.previous-project div').text();
		if(title == 'Previous Projects'){
        	window.location = "projects_english.html"
    	}else if(title == '相关项目'){
    		window.location = "projects_simplified.html"
    	}else if(title == '相關項目'){
    		window.location = "projects_traditional.html"
    	}
	});

	$( ".contact" ).click(function() {
		var title = $('.contact div').text();
        if(title == 'Contact Me'){
        	window.location = "contact_english.html"
    	}else if(title == '联系'){
    		window.location = "contact_simplified.html"
    	}else if(title == '聯繫'){
    		window.location = "contact_traditional.html"
    	}
	});

	$("#English").click(function() {
        window.location = "index.html"
    });
    $("#Simplified").click(function(){
   		window.location = "index_simplified.html"
   	});
   	$("#Traditional").click(function(){
    	window.location = "index_traditional.html"
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
	case 'Contact':
		$(".contact").addClass('active');
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
	// blueimp.Gallery(
	// 	//document.getElementById('links').getElementsByTagName('a'),
	// 	[
	// 		{
	// 			href: 'img/rsz_zeplermountbatten.jpg',
	// 			title: 'School of Electronics and Computer Science (Mountbatten and Zepler buildings)',
	// 			class: 'partial'
	// 		},
	// 		{
	// 			href: 'img/rsz_avenuecampus.jpg',
	// 			title: 'Avenue Campus'
	// 		},
	// 		{
	// 			href: 'img/rsz_TurnerSimsConcertHall.jpg',
	// 			title: 'Turner Sims Concert Hall in Highfield Campus'
	// 		},
	// 		{
	// 			href: 'img/rsz_HartleyLibraryRear.jpg',
	// 			title: 'Hartley Library in Highfield Campus'
	// 		},
	// 	],
	// 	{
	// 		container: '#homepage-carousel',
	// 		carousel: true
	// 	}
	// );

	/*===========GDP==========*/
	blueimp.Gallery(
		[
			{
				href: 'img/carousel/serviceTest.png',
				title: 'Service Testing'
			},
			{
				href: 'img/carousel/detail.png',
				title: 'Detail'
			},
			{
				href: 'img/carousel/networkTools.png',
				title: 'Network Tools'
			},
			{
				href: 'img/carousel/portscan.png',
				title: 'Port Scan'
			},
			{
				href: 'img/carousel/addport.png',
				title: 'Adding port & address'
			},
			{
				href: 'img/carousel/about.png',
				title: 'About'
			},
		],
		{
			container: '#gdp-carousel',
			carousel: true
		}
	);

	/*=============modal===================*/
/*	$('.project-section img').on('click',function(){
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';
        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function(){
            $('#myModal .modal-body').html(img);
        });
        $('#myModal').on('hidden.bs.modal', function(){
            $('#myModal .modal-body').html('');
        });
	});  
*/


	/*=============Image Gellary===================*/
	// var $container = $('.gallery');
	// // init
	// $container.isotope({
	//   // options
	//   itemSelector: '.item',
	//   layoutMode: 'masonry'
	// });

});