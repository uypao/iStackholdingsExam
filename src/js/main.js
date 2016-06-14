//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $(".header").addClass("fixedNav");
        $("#navbar-content").addClass("header-collapse");
    } else {
        $(".header").removeClass("fixedNav");
        $("#navbar-content").removeClass("header-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();        
    });
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
		directionNav: false,
  });
});