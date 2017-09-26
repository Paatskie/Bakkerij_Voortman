$(document).ready(function () {
    $(window).on('load scroll', function () {
      var scrolled = $(this).scrollTop();
      $('#title').css('transform', 'translate3d(0, ' + -(scrolled * 1) + 'px, 0)'); // parallax (25% scroll rate)
      $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 1) + 'px, 0)'); // parallax (25% scroll rate)
    });

    // video controls
    $('#state').on('click', function () {
      var video = $('#hero-vid').get(0);
      var icons = $('#state > span');
      $('#overlay').toggleClass('fade');
      if (video.paused) {
          video.play();
          icons.removeClass('fa-play').addClass('fa-pause');
      } else {
          video.pause();
          icons.removeClass('fa-pause').addClass('fa-play');
      }
    });

    //owl carousel / historie slide.bs.carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      items: 1,
      navText: [],
      smartSpeed: 750
    })
});

function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      header = document.querySelector("header");
    if (distanceY > shrinkOn) {
      classie.add(header,"smaller");
    } else {
      if (classie.has(header,"smaller")) {
        classie.remove(header,"smaller");
      }
    }
  });
}
window.onload = init();
