const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const humburger = document.getElementById("hum");
const mobileNav = document.querySelector(".mobile__nav");
humburger.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});
