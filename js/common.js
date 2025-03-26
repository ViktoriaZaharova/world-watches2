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

// slider range
$(".polzunok-5").slider({
  min: 0,
  max: 5000,
  values: [2000, 3000],
  range: true,
  animate: "fast",
  slide: function (event, ui) {
    $(".polzunok-input-5-left").val(ui.values[0]);
    $(".polzunok-input-5-right").val(ui.values[1]);
  }
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(".polzunok-container-5 input").change(function () {
  var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
    opt_left = $(".polzunok-5").slider("option", "min"),
    where_right = $(".polzunok-5").slider("values", 1),
    input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
    opt_right = $(".polzunok-5").slider("option", "max"),
    where_left = $(".polzunok-5").slider("values", 0);
  if (input_left > where_right) {
    input_left = where_right;
  }
  if (input_left < opt_left) {
    input_left = opt_left;
  }
  if (input_left == "") {
    input_left = 0;
  }
  if (input_right < where_left) {
    input_right = where_left;
  }
  if (input_right > opt_right) {
    input_right = opt_right;
  }
  if (input_right == "") {
    input_right = 0;
  }
  $(".polzunok-input-5-left").val(input_left);
  $(".polzunok-input-5-right").val(input_right);
  if (input_left != where_left) {
    $(".polzunok-5").slider("values", 0, input_left);
  }
  if (input_right != where_right) {
    $(".polzunok-5").slider("values", 1, input_right);
  }
});



$(function () {
  // hidden list > 3
  $('.sidebar .sidebar-box').each(function () {
    if ($(this).find('.list-row-3 li').length > 3) {
      $(this).find('.list-row-3 li').slice(3).hide();
      $(this).find('.block-hover').append('<a href="#" class="load-more-wrap">Показать все</a>');
    }

  });

  // hidden list > 3

  // show list all
  $('.load-more-wrap').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.sidebar-box .block-hover').find('.list-row-3 li:hidden').slideDown();

    var onBlock = $(this).parents('.sidebar-box .block-hover').find('.list-row-3 li:hidden').length;
    if (onBlock <= 0) {
      $(this).hide();
    }
  });
  // show list all
});


$(function () {
  // hidden list > 3
  $('.sidebar .sidebar-box').each(function () {
    if ($(this).find('.list-row-6 li').length > 6) {
      $(this).find('.list-row-6 li').slice(6).hide();
      $(this).find('.block-hover').append('<a href="#" class="load-more-wrap">Показать все</a>');
    }
  });

  // hidden list > 3

  // show list all
  $('.load-more-wrap').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.sidebar-box .block-hover').find('.list-row-6 li:hidden').slideDown();

    var onBlock = $(this).parents('.sidebar-box .block-hover').find('.list-row-6 li:hidden').length;
    if (onBlock <= 0) {
      $(this).hide();
    }
  });
  // show list all
});

$('.btn-sidebar-mobile').click(function (e) {
  e.preventDefault();
  $('.sidebar').fadeToggle();
});

$('.sidebar-close').click(function (e) {
  e.preventDefault();
  $('.sidebar').fadeOut();
});
