(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; 

  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( 'open' ) ) {
      $nav.addClass( 'open' );
    } else {
      $nav.removeClass( 'open' );
    }
  });

  $mask.on('click', function() {
    $nav.removeClass( 'open' );
  });
} )(jQuery);