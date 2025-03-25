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

$('.reviews-slider').slick({
  slidesToShow: 3,
  appendArrows: '.reviews-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
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

$('.product-gallery-max').slick({
  slidesToShow: 1,
  fade: true,
  arrows: false,
  dots: false,
  asNavFor: '.product-gallery-preview'
});

$('.product-gallery-preview').slick({
  slidesToShow: 4,
  fade: false,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  asNavFor: '.product-gallery-max',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
});

$('.btn-burger').on('click', function (e) {
  e.preventDefault();
  $('.fixed-menu').addClass('active');
});

$('.fixed-menu__close').on('click', function (e) {
  e.preventDefault();
  $('.fixed-menu').removeClass('active');
});

$(document).mouseup(function (e) {
  var div = $(".fixed-menu");
  if (!div.is(e.target)
    && div.has(e.target).length === 0) {
    div.removeClass("active");
  }
});


// accordeon
function accordeon() {
  var panel = $('.panel-heading');

  if (panel.hasClass('in')) {
    $('.in').find('.block-hover').slideDown();
  }

  $('.panel-heading .block-title').on('click', function () {
    $(this).parent().toggleClass('in').find('.block-hover').slideToggle();
  });
}

accordeon();
