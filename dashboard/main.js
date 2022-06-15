const show = document.getElementById("humb");
const leftPanel = document.querySelector(".left-panel");
const full = document.getElementById("full");
const side = document.querySelector(".sidebar");
show.addEventListener("click", function () {
  leftPanel.classList.toggle("active");
  full.classList.toggle("goFull");
  side.classList.toggle("hide");
});
