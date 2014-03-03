(function ($) {
  Drupal.behaviors.asuAutoScroll = {
    attach: function(context, settings) {
      if ( screen.width <= 930 ) {
        $("#asu_mobile_button").click(function (){
          setTimeout(function(){
            $('html, body').animate({
              scrollTop: $("#asu_mobile_hdr").offset().top
            }, 1000);
          }, 500);
        });
      }
    }
  };
})(jQuery);
