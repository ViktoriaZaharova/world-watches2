$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.brands-slider').slick({
  slidesToShow: 4,
  appendArrows: '.brands-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});


$('.product-slider').slick({
  slidesToShow: 6,
  appendArrows: '.product-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

$('.home-slider').slick({
  slidesToShow: 1,
  fade: true,
  arrows: false,
  dots: true
});

$('.btn-burger').on('click', function (e) {
  e.preventDefault();
  $('.fixed-menu').addClass('active');
});

$('.fixed-menu__close').on('click', function (e) {
  e.preventDefault();
  $('.fixed-menu').removeClass('active');
});

$(document).mouseup(function (e){ 
  var div = $(".fixed-menu"); 
  if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
      div.removeClass("active"); 
  }
});