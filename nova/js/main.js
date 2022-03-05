$(function () {
  //small image displays into prev img
  $(".small-img img").click(function (e) {
    let src = $(this).attr("src");
    let dataIndex = $(this).attr("data-index");
    $(this).addClass("active").siblings().removeClass("active");
    $(".prev-img img").attr("src", src);
    $(".prev-img img").attr("data-index", $(this).attr("data-index"));
  });
  // prev img opens in modal
  $(".prev-img img").click(function (e) {
    e.preventDefault();
    let modalSrc = $(this).attr("src");
    $(".modal-prev").attr("src", modalSrc);
    $(".modal").css({
      display: "block",
    });
    //take data from clicked img and give to modal image
    let activeData = $(this).attr("data-index");
    $.each($(".modal-images img"), function (i) {
      if ($(this).attr("data-index") == activeData) {
        $(this).addClass("active").siblings().removeClass("active");
      }
    });
  });
  // next button function
  $(".next").click(function (e) {
    e.preventDefault();
    //check if it has sibling
    if ($(".modal-images img.active").next().length > 0) {
      $(".modal-images img.active")
        .removeClass("active")
        .next()
        .addClass("active");
      let src = $(".modal-images img.active").attr("src");
      $(".modal-prev").attr("src", src);
    }
  });
  // prev button function
  $(".prev").click(function (e) {
    e.preventDefault();
    //check if it has sibling
    if ($(".modal-images img.active").prev().length > 0) {
      $(".modal-images img.active")
        .removeClass("active")
        .prev()
        .addClass("active");
      let src = $(".modal-images img.active").attr("src");
      $(".modal-prev").attr("src", src);
    }
  });
  // after modal opens change pictures from bottom
  $(".modal-images img").click(function (e) {
    e.preventDefault();
    let Src = $(this).attr("src");
    $(".modal-prev").attr("src", Src);
    $(this).addClass("active").siblings().removeClass("active");
  });

  // when clicked outside of modal , modal disapears
  $(".modal").click(function (e) {
    e.preventDefault();
    if (e.target.classList == "modal") {
      $(".modal").css({
        display: "none",
      });
      let src = $(".modal-images img.active").attr("src");
      let activeData = $(".modal-images img.active").attr("data-index");
      $(".prev-img img").attr("src", src);
      $.each($(".small-img img"), function () {
        if ($(this).attr("data-index") == activeData) {
          $(this).addClass("active").siblings().removeClass("active");
        }
      });
    }
  });

  const swiper = new Swiper(".swiper", {
    //autoplay
    autoplay: {
      delay: 2000,
    },

    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
