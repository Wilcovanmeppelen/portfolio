var targetOffset = $("#about").offset().top - 50;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {
        $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
});
