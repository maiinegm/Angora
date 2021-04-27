//Navbar scroll behaviour:

$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 60) {
    $(".dark").addClass("navcol");
  } else {
    $(".dark").removeClass("navcol");
  }
});

$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $("#custom-nav").addClass("affix");
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    $(".navbar-brand img").attr("src", "img/logo-red.png");
  } else {
    $("#custom-nav").removeClass("affix");
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    $(".navbar-brand img").attr("src", "img/logo-white.png");
  }
});
