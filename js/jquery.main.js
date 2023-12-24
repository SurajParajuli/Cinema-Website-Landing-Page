$(document).ready(function(){
	$('.main_slider').slick({
		dots: true,
		autoplay:true,
		autoplayspeed:3000
	});
});
$(".menu").click(function(){
	$("body").toggleClass("nactive");
});
jQuery('.display__tabset button').click(function(){
	var tab_id = jQuery(this).attr('data-tab');
	jQuery(this).parents('.display__tabset li').addClass('active');
	jQuery(this).parents().siblings().removeClass('active');
	jQuery('.display__tabitem').removeClass('active').hide();
	jQuery("#"+tab_id).addClass('active').show();
});