$(function(){
    "use strict";
    
    // client slider
    
    
    var $slider_c = $('.client-slide');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider_c.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
    
    
    if ($slider_c.length) {
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

  $slider_c.on('init', function(event, slick) {
    $slider_c.append(sliderCounter);
    updateSliderCounter(slick);
  });
        
        $slider_c.on('init', function(event, slick) {
    $slider_c.append(totalCounter);
    updateSliderCounter(slick);
  });

  $slider_c.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
        
        $slider_c.slick({
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
    
    
});