$(window).on("load", function () {
  $(".loader").fadeOut();
});

AOS.init();

//
//$('ul.navbar-nav li.dropdown').hover(function () {
//    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(100);
//}, function () {
//    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(100);
//});
// var iphone = $(".brnad_name");
// var camera = $(".hero_cycle");

// var layer = $(".hero_banner_img");

// layer.mousemove(function (e) {
//   var ivalueX = (e.pageX * -1) / 30;
//   var ivalueY = (e.pageY * -1) / 30;
//   var cvalueX = (e.pageX * -1) / 40;
//   var cvalueY = (e.pageY * -1) / 60;
//   console.log("ok");
//   iphone.css(
//     "transform",
//     "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)"
//   );
//   camera.css(
//     "transform",
//     "translate3d(" + cvalueX + "px," + cvalueY + "px, 0)"
//   );
// });

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider-nav",
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});

$(".parts_slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
  arrows: true,
});

$(".home_product_slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
  arrows: false,
});

$(".feature_slider").slick({
  dots: false,
  infinite: true,
  draggable: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
  arrows: true,
});

var $layer_1 = $(".brnad_name"),
  $layer_2 = $(".hero_cycle"),
  $container = $(".hero_item"),
  container_w = $container.width(),
  container_h = $container.height();

$(window).on("mousemove.parallax", function (event) {
  var pos_x = event.pageX,
    pos_y = event.pageY,
    left = 0,
    top = 0;

  left = container_w / 2 - pos_x;
  top = container_h / 2 - pos_y;

  TweenMax.to($layer_2, 1, {
    css: {
      transform:
        "translateX(" + left / 15 + "px) translateY(" + top / 10 + "px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });

  TweenMax.to($layer_1, 1, {
    css: {
      transform:
        "translateX(" + left / 5 + "px) translateY(" + top / 10 + "px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
});

// Open popup shop item
$(".quickview__icon").click(function () {
  $(".overlay").css({
    opacity: "1",
    visibility: "visible",
  });
});

// Popup close
$("#closeIcon").click(function () {
  $(".popup, .overlay").css({
    opacity: "0",
    visibility: "hidden",
  });
  $("body").css("overflow", "visible");
});
