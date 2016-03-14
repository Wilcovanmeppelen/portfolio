var targetOffset = $("#about").offset().top - 50;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {
        $('header').addClass('fade-down active');
    } else {
      $('header').removeClass('fade-down active');
    }
});

$(window).stellar();
