$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Page scrolling feature (requires jQuery Easing plugin)
$(function() {
  $('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});


$(window).resize(function() {
  if ($(this).width() < 1024) {
    $('.aboutpicture').hide();
  } else {
    $('.aboutpicture').show();
  }
});


$('.portfolioImg').on('mousedown', function(e){
  e.preventDefault();
  $(this).toggleClass('clickedState');
});

$('.portfolioImg').on('mouseup', function(e){
  e.preventDefault();
  $(this).toggleClass('clickedState');
});

