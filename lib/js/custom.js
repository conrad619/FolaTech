
$(document).ready(function(){

	new WOW().init();
	$('.main-carousel').slick({
    	dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 5000,
  		fade:true
	});

	$('.main-carousel').on('afterChange', function(event, slick, currentSlide){
		currentSlide++;

		$('.main-carousel .title').removeClass("wow fadeInLeft animated");
		$('.main-carousel .title').removeClass("wow fadeInRight animated");
		$('.main-carousel .button').removeClass("wow fadeInUp animated");
		$('.main-carousel .title').css({"visibility":"hidden","animation-name": ""});
		$('.main-carousel .button').css({"visibility":"hidden","animation-name": ""});


		$('.main-carousel #m-slide'+currentSlide+' .title').css({"visibility":"visible"});
		$('.main-carousel #m-slide'+currentSlide+' .button').css({"visibility":"visible"});

		var fade="fadeInRight";
		if(currentSlide==1){
			fade="fadeInLeft";
		}

		$('.main-carousel #m-slide'+currentSlide+' .title').addClass("wow "+fade+" animated");

		$('.main-carousel #m-slide'+currentSlide+' .button').addClass("wow fadeInUp animated");
	});

	$('.course-offer-carousel').slick({
    	dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		arrows: true,
		autoplay: true,
  		autoplaySpeed: 5000,
  		fade:true
	});
	
    $('.about-carousel').slick({
    	dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 5000
	});
	
	$('.review-carousel').slick({
    	dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 5000
	});
	
	$('.partners-carousel').slick({
    	dots: true,
		infinite: true,
		variableWidth: true,
		centerMode: true,
		speed: 500,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 5000
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 42 ) {
			$('.menu-section .nav-fixed').addClass('scrolling');
			$('.menu-section .nav-fixed').removeClass('unscrolling');
		} else {
			$('.menu-section .nav-fixed').removeClass('scrolling');
			$('.menu-section .nav-fixed').addClass('unscrolling');
		}
	});

	

	$(window).scroll(function() {
		if ($(this).scrollTop() > 50 ) {
			$('.to-top:hidden').stop(true, true).fadeIn();
		} else {
			$('.to-top').stop(true, true).fadeOut();
		}
	});
	$(function(){$(".to-top").click(function(){$("html,body").animate({scrollTop:0},"1000");return false})})

});