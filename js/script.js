 $(document).ready(function(){
      $('.slick_carousel').slick({
          infinite: true,
          autoplay: true,
          //adaptiveHeight: true,
  		  slidesToShow: 1,
    	  slidesToScroll: 1,
    	  speed: 300,
    	  autoplaySpeed: 3000,
    	  centerMode: true,
    	  mobileFirst: true,
  		  fade: true,
  		  cssEase: 'linear'
      });
    });

/*$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("large").addClass("small");
    } else{
        $("header").removeClass("small").addClass("large");
    }
});*/

window.sr = new scrollReveal();