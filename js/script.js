//carousel

$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      }
    },
    autoplay: true,
    autoplayTimeout: 3000000,
    smartSpeed: 1000
  });
});

// number counter

$({
  Counter: 0
}).animate({
  Counter: $('.Single').text()
}, {
  duration: 1000,
  easing: 'swing',
  step: function () {
    $('.Single').text(Math.ceil(this.Counter));
  }
});

$({
  Counter: 0
}).animate({
  Counter: $('.Single1').text()
}, {
  duration: 1000,
  easing: 'swing',
  step: function () {
    $('.Single1').text(Math.ceil(this.Counter));
  }
});

$({
  Counter: 0
}).animate({
  Counter: $('.Single2').text()
}, {
  duration: 1000,
  easing: 'swing',
  step: function () {
    $('.Single2').text(Math.ceil(this.Counter));
  }
});

$({
  Counter: 0
}).animate({
  Counter: $('.Single3').text()
}, {
  duration: 1000,
  easing: 'swing',
  step: function () {
    $('.Single3').text(Math.ceil(this.Counter));
  }
});

