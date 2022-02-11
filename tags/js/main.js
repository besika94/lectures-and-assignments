// let increase = document.querySelector(".up");
// let decrease = document.querySelector(".down");
// let reset = document.querySelector(".res");
// let textIncrease = document.querySelector(".number");

// let s = 1;
// increase.addEventListener("click", function () {
//   textIncrease.innerText = ++s;
// });

// decrease.addEventListener("click", function () {
//   textIncrease.innerText = --s;
// });

// reset.addEventListener("click", function () {
//   textIncrease.innerText = s = 0;
// });

// let menu = document.querySelector(".bi-list");
// let navShow = document.querySelector(".di");
// menu.addEventListener("click", function () {
//   navShow.classList.toggle("di-show");
// });

// let showPas = document.querySelector(".show-pass");
// let hidePass = document.querySelector(".hide-pass");

// showPas.onclick = function (e) {
//   hidePass.type = hidePass.type == "text" ? "password" : "text";
//   showPas.classList.toggle("test");
//   showPas.innerHTML = showPas.classList.contains("test")
//     ? `&#128053`
//     : `&#128584`;
// };
// let h = 0;
// let inpVal = document.querySelector(".someDiv");
// let secDivv = document.querySelector(".secDiv");
// let newTitle = document.querySelector(".butt");

// newTitle.addEventListener("click", () => {
//   let newRow = document.createElement("h1");
//   let del = document.createElement("button");
//   secDivv.appendChild(del);
//   del.classList.add("buton");
//   del.innerText = "Remove";

//   inpVal.appendChild(newRow);
//   newRow.classList.add("borders");
//   newRow.innerText = "asdasdasd " + h++;
// });

const inpTags = document.querySelector(".input");
let tag = document.querySelector(".tags-text");
// ენთერის დაჭერის ივენთი, KeyCode-ის გასაგებად ივენთის
// შიგნით ვიძახებთ console.log(e) და ჩამონათვალში ვეძებთ
// keyCode-ს
inpTags.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let tagText = document.createElement("span"); //შევქმენი სპან ელემენტი
    let icons = document.createElement("i"); // შევქმენით აიქონი
    icons.classList.add("bi", "bi-x-circle"); // აიქონის კლასი შემოვიტანე ბუთსტრეპიდან
    tagText.innerText += inpTags.value; //სპან ელემენტს მივანიჭე ინფუთში ჩაწერილი მნიშვნელობა
    tagText.append(icons); // ინფუთის მნიშვნელობის მინიჭების შემდეგ ჩავამატე იქონი
    tag.append(tagText); //დივში ჩავამატე სპანი თავისი მნიშვნელობით
    inpTags.value = ""; //გავასუფთავე ინფუთის მნიშვნელობა

    icons.addEventListener("click", () => {
      tagText.remove();
    });
  }
});
