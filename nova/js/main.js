$(function () {
  //small image displays into prev img
  $(".small-img img").click(function (e) {
    let src = $(this).attr("src");
    $(this).addClass("active").siblings().removeClass("active");
    $(".prev-img img").attr("src", src);
  });

  // prev img opens in modal
  $(".prev-img img").click(function (e) {
    e.preventDefault();
    let modalSrc = $(this).attr("src");
    $(".modal-prev").attr("src", modalSrc);
    $(".modal").css({
      display: "block",
    });
  });

  // when clicked outside of modal , modal disapears
  $(document).click(function (e) {
    e.preventDefault();
    if (e.target.classList == "modal") {
      $(".modal").css({
        display: "none",
      });
    }
  });
});
