$(function(){
    "use strict";
    
    // banner slider
    var $slider_b = $('.banner-slide');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider_b.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
    
    
    if ($slider_b.length) {
  var currentSlide;
  var slidesCount;
        
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
        
  var totalCounter = document.createElement('div');
  totalCounter.classList.add('total__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide)
    $(totalCounter).text(slidesCount)
  };

  $slider_b.on('init', function(event, slick) {
    $slider_b.append(sliderCounter);
    updateSliderCounter(slick);
  });
        
        $slider_b.on('init', function(event, slick) {
    $slider_b.append(totalCounter);
    updateSliderCounter(slick);
  });

  $slider_b.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
        $slider_b.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<img src="images/svg/left-arrow.svg" class="leftbtn" alt="">',
    nextArrow: '<img src="images/svg/right-arrow.svg" class="rightbtn" alt="">',
    autoplay: true,
    speed: 1000,
     responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
}
    
 // menu toggle
    $('.toggle-btn').click(function () {
        $('.menu').addClass('show');
    });
    
    $('.close-btn').click(function () {
        $('.menu').removeClass('show');
    });
    

});