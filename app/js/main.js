$(document).ready(function() {
  window.sr = ScrollReveal();
  sr.reveal('.fadein', {
    duration: 600,
    scale: 1
  });
  
  $('.main-nav__toggle').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('main-nav__toggle--active');
    $('.main-nav__wrapper').toggleClass('main-nav__wrapper--opened');
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 50) {
      $(".header-top").addClass("header-top--green")
    } else {
      $(".header-top").removeClass("header-top--green")
    }
  });

  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('.main-nav__toggle').removeClass('main-nav__toggle--active');
    $('.main-nav__wrapper').removeClass('main-nav__wrapper--opened');
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 48
    }, 700);
  });
});
