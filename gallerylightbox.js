/**
 * Place your JS-code here.
 */
$(document).ready(function(){
 'use strict';
   (function($) {
 $.fn.lightBox = function(options) {
    options = $.extend({}, $.fn.lightBox.defaults, options);
    return this.each(function() {

    var windowHeigth = window.innerHeight || $(window).height(), // make it work on ipad & android
        windowWidth  = window.innerWidth  || $(window).width();

    // Display the overlay
    $('<div id="overlay"></div>')
      .css('opacity', '0')
      .animate({'opacity' : '0.7'}, 'slow')
      .appendTo('body');
    
    // Create the lightbox container
    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');
      
    var src = $(this).attr('href');
    var capt = $('.image-caption').text();
    console.log(src);
    
    // Display the image on load
    $('<img>')
      .attr('src', src)
      .css({
        'max-height': windowHeigth - 35, 
        'max-width':  windowWidth - 35
      })
      .load(function() {
        $('#lightbox')
          .css({
            'top':  (windowHeigth - $('#lightbox').height()) / 2,
            'left': (windowWidth  - $('#lightbox').width())  / 2
          })
          .fadeIn();
      })
      .appendTo('#lightbox');
      
      $('<p>'+capt+'</p>').appendTo('#lightbox');
      
      $('#overlay').css({'background-image': 'none'});
      
      // Remove it all on click
      $('#overlay, #lightbox').click(function() {
        $('#overlay, #lightbox').remove();
      });
    
    console.log("Display image in colorbox.");
    return false;
  
  
  });
  };
  
  $.fn.lightBox.defaults = {
   
  };
  
}) (jQuery);
  
  
  
  var src1, first, next, last, prev;
  src1 = $('.gallery-all a:first').attr('href');
  first = src1;
  next = $('.gallery-all a:first').next().attr('href');
  prev = $('.gallery-all a:last').attr('href');
  last = prev;
 
  // create a current image from first thumbnail
  $('.gallery-current img').attr('src', src1 + '&height=400');
  var caption = $('.gallery-all a:first img').attr('title');

   $('.image-caption').text(caption);
   
  // create a img link from first image
  $('.gallery-current a.lightbox').attr('href', src1);
  $('.next-link').attr('href', next);
  $('.prev-link').attr('href', prev);

  (function($) {
  		  
  $.fn.gallerySwitch = function(options) {
    options = $.extend({}, $.fn.gallerySwitch.defaults, options);
    return this.each(function() {
    src1 = $(this).attr('href');
    if (src1 == first) {
    prev = last;
    }
    else {
    prev = $('.gallery-all a[href="'+src1+'"]').prev().attr('href');
    }
    if (src1 == last) {
    next = first;
    }
    else {
    next = $('.gallery-all a[href="'+src1+'"]').next().attr('href');
    }
    $('.gallery-current a.lightbox').attr('href', src1);
    $('.next-link').attr('href', next);
    $('.prev-link').attr('href', prev);
    $('.gallery-current img').attr('src', src1  + '&height=400'); 
    caption = $('.gallery-all a[href="'+src1+'"] img').attr('title');
    $('.image-caption').text(caption);
     console.log("clicked next img, show image");
    
  });
  };
  $.fn.gallerySwitch.defaults = {
  }
  
}) (jQuery);
  
$('.next-link, .prev-link, .gallery-all a').click(function() {
  $(this).gallerySwitch();
  return false;
});
  
$('a.lightbox').click(function() {
  $(this).lightBox();
  return false;
});
   
  
});