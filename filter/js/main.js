$(function () {
  //click event
  $(".audi-btn").click(function (e) {
    e.preventDefault();
    showImg($(".bmw"), $(".mercedes"), $(".audi"));
  });

  $(".bmw-btn").click(function (e) {
    e.preventDefault();
    showImg($(".audi"), $(".mercedes"), $(".bmw"));
  });

  $(".mercedes-btn").click(function (e) {
    e.preventDefault();
    showImg($(".audi"), $(".bmw"), $(".mercedes"));
  });

  $(".all-btn").click(function (e) {
    e.preventDefault();
    $(".audi").show().css({ width: "300px" });
    $(".bmw").show().css({ width: "300px" });
    $(".mercedes").show().css({ width: "300px" });
  });

  // show how many images are in categories

  $(".bmw-count").text(imgCount($(".bmw img")));
  $(".audi-count").text(imgCount($(".audi img")));
  $(".mercedes-count").text(imgCount($(".mercedes img")));

  // functions
  // returns how many images are in div
  function imgCount(el) {
    return el.length;
  }

  // displays which button you click
  const showImg = function (hide, hide1, show) {
    hide.css({
      display: "none",
    });
    hide1.css({
      display: "none",
    });
    show.css({
      width: "100%",
      display: "flex",
    });
  };
});
