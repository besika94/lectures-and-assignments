$(function () {
  $(".audi-btn").click(function (e) {
    e.preventDefault();
    if ($(".audi-btn").attr("data") == $(".audi-img").attr("data")) {
      show($(".audi-img"), $(".bmw-img"), $(".benz-img"));
    }
  });

  $(".bmw-btn").click(function (e) {
    e.preventDefault();
    if ($(".bmw-btn").attr("data") == $(".bmw-img").attr("data")) {
      show($(".bmw-img"), $(".audi-img"), $(".benz-img"));
    }
  });

  $(".mercedes-btn").click(function (e) {
    e.preventDefault();
    if ($(".mercedes-btn").attr("data") == $(".benz-img").attr("data")) {
      show($(".benz-img"), $(".audi-img"), $(".bmw-img"));
    }
  });

  $(".all-btn").click(function (e) {
    e.preventDefault();
    $(".audi-img").show(500);
    $(".benz-img").show(500);
    $(".bmw-img").show(500);
  });

  // show how many images are in categories
  $(".bmw-count").text(imgCount($(".bmw-img")));
  $(".audi-count").text(imgCount($(".audi-img")));
  $(".mercedes-count").text(imgCount($(".benz-img")));

  // functions
  // returns how many images are in div
  function imgCount(el) {
    return el.length;
  }
  // show images wihch was clicked
  function show(a, b, c) {
    a.show(500);
    b.hide(500);
    c.hide(500);
  }
});
