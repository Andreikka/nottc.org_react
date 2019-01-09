$.fn.imageLoad = function(fn){
    this.load(fn);
    this.each( function() {
        if ( this.complete && this.naturalWidth !== 0 ) {
            $(this).trigger('load');
        }
    });
}


jQuery(document).ready(function($){ 

    $('body').css({'overflow' : 'hidden'});
  

   $('img#offset_img').imageLoad(function(){

      $(this).css({'display':'none'})
      $('#fotorama_holder').css({'opacity':'1','overflow' : 'visible', 'height' : 'auto'});

      $(window).trigger('resize'); 
      
      console.log('offset image finally loaded');
    
    $.thumbH = '142';
    $.thumbW = '246';
    var newH;
    var isUp = false;
    var thumbBorderSize = 5;

    $.currShaftH = ($(window).height())-$("#header").height()-$("#footer").height()-thumbBorderSize;
    $('.fotorama').fotorama({
        height: $.currShaftH,
        thumbwidth: $.thumbW,
        thumbheight: $.thumbH,
        thumbborderwidth : 1,
        fit:'cover',
        thumbfit:'contain',
        thumbmargin:1,
        croptofitiffullscreen:false,
        nav: 'thumbs'
      });


  // Get the height of the slider wrap.
  $.cont = $('.fotorama__wrap');
  $.stage = $('.fotorama__stage');

  $(".fotorama__thumb").css("border-top", thumbBorderSize+"px solid #7c7c7c");
  $(".fotorama__thumb").mouseover(function(){
      $(this).css("border-top", thumbBorderSize+"px solid #0061C0");
  });
    $(".fotorama__thumb").mouseleave(function(event) {
        $(".fotorama__thumb").css("border-top", thumbBorderSize+"px solid #7c7c7c");
        $(".fotorama__active .fotorama__thumb").css("border-top", thumbBorderSize+"px solid #0061C0");
    });

  $(".fotorama__nav-wrap").css("bottom", "-"+($.thumbH-thumbBorderSize)+"px");

  $(window).resize(function() {
    resizeHPSlider();
  });

  function resizeHPSlider() {
    recalcHeight();

    $(".fotorama").height($.currShaftH);
    $.cont.height($.currShaftH);
    $.stage.height($.currShaftH-thumbBorderSize);
     $(".fotorama__nav-wrap").css("bottom", "-"+($.thumbH-thumbBorderSize)+"px");

  }

  function recalcHeight() {
    $.currShaftH = $(window).height()-$("#header").height()-$("#footer").height();
  }

  resizeHPSlider();

  $(".fotorama__nav--thumbs").on("mouseenter", (function () {

    //Only animate if scrolling is complete
    if ($(':animated').length || isUp) {

      return false;
    } else {
      if (!isUp) {
        $('.fotorama__nav--thumbs').animate({'bottom': +($.thumbH-thumbBorderSize)+'px'}, 500, function() {
            isUp = true;
          }
        );
      }
    }

    }));

  // For when the cursor leaves thumbs.
  $(".fotorama__nav--thumbs").on("mouseleave", function() {
    //Only animate if scrolling is complete
    if ($(':animated').length) {
      return false;
    } else {
      if (isUp) {
        $('.fotorama__nav--thumbs').animate({'bottom': '0px'}, 500, function () {
          isUp = false;
        });
      }
    }

    });
   });
});