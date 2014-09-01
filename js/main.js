var preloadPictures = function(pictureUrls, callback) {
    var i,
        j,
        loaded = 0;
    for (i = 0, j = pictureUrls.length; i < j; i++) {
        (function (img, src) {
            img.onload = function () {                               
                if (++loaded == pictureUrls.length && callback) {
                    callback();
                }
            };
            img.onerror = function () {};
            img.onabort = function () {};

            img.src = src;
        } (new Image(), pictureUrls[i]));
    }
};

function stopSlider(){
	scene_one.stop();
	scene_two.stop();
	scene_three.stop();
	scene_buttons.stop();
	};
function next(){
	stopSlider();
	scene_one.goToNextSlide();
	scene_two.goToNextSlide();
	scene_three.goToNextSlide();
	scene_buttons.goToNextSlide();
	return false;
	}
function prev(){
	stopSlider();
	scene_one.goToPrevSlide();
	scene_two.goToPrevSlide();
	scene_three.goToPrevSlide();
	scene_buttons.goToPrevSlide();
	return false;
	}
$(document).load(function(e) {
   
});
$(document).ready(function(e) {
	preloadPictures ([
    'img/slider/bg.jpg',
    'img/slider/blank.png',
    'img/slider/slide1_1.png',
	'img/slider/slide1_2.png',
	'img/slider/slide1_3.png',
	'img/slider/slide2_1.png',
	'img/slider/slide2_2.png',
	'img/slider/slide2_3.png',
	'img/slider/slide3_1.png',
	'img/slider/slide3_2.png',
	'img/slider/slide3_3.png',
	'img/slider/slide4_1.png',
	'img/slider/slide4_2.png',
	'img/slider/slide4_3.png',
	'img/slider/slide5_1.jpg',
	'img/slider/slide5_2.png',
	'img/slider/slide5_3.png',
	'img/slider/slide6_1.jpg',
	'img/slider/slide6_2.png',
	'img/slider/slide6_3.png',
	'img/slider/slide7_1.jpg',
	'img/slider/slide7_2.png',
	'img/slider/slide7_3.png',
], function(){
	  console.log('a');
	});
    scene_one = $('.scene_one ol').bxSlider({
		pager: false,
		speed: 2200,
		 infiniteLoop: false,
		 easing: 'linear'
		});
	 scene_two = $('.scene_two ol').bxSlider({
		 pager: false,
		 speed: 2000,
		 infiniteLoop: false,
		 easing: 'linear'
		});
	scene_three = $('.scene_three ol').bxSlider({
		 pager: false,
		 speed: 1800,
		 infiniteLoop: false,
		 easing: 'linear',
		 onSlideBefore: function($slideElement, oldIndex, newIndex){
			 $('.carro .container').animate({left: (newIndex*10)+'%'}, 1800)
			 },
		 onSlideAfter: function($slideElement, oldIndex, newIndex){
			 	$('.pager .link').removeClass('active');
			  	$('.pager .link[data-slide-index="'+newIndex+'"]').addClass('active');
			 },
		});
		scene_buttons = $('.scene_buttons ol').bxSlider({
		 pager: false,
		 speed: 2400,
		 infiniteLoop: false,
		 easing: 'linear'
		});
	$('.pager a, .nav a[data-slide-index]').click(function(e) {
		 	$n = $(this).attr('data-slide-index');
			stopSlider();
        	scene_one.goToSlide($n);
			scene_two.goToSlide($n);
			scene_three.goToSlide($n);
			scene_buttons.goToSlide($n);
			console.log($n)
			return false;
        });
	$('.menu_nav').on({
		click: function (){
			if( $('.menu_red').css('display') == 'none' ){
				$('.menu_red').slideDown(100);
				}
			else{
				$('.menu_red').slideUp(100);
				}
			
			},
		});
	$("a.fancy").fancybox({
		'closeClick': true, 
		'closeBtn': false, 
		'padding': 0, 
		'beforeLoad': function(){
			$("body").css("overflow","hidden"); 
			},
		'afterClose': function(){
			$("body").css("overflow","auto"); 
			}
	});
	
});
$(document).keypress(function(event) {
	if(event.keyCode == 39){
		stop();
       next();
		}
	else if (event.keyCode == 37){
		stop();
       prev();
		}
});
$(window).resize(function(e) {
    
});
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
		stop();
       next();
	   //console.log(event.originalEvent.detail);
    }
    else {
		stop();
       prev();
	   //console.log(event.originalEvent.detail);
    }
});