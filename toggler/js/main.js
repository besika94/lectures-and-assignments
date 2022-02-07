const container = document.querySelector(".sign");
const signUp = document.querySelector(".signUpBtn");
const signIn = document.querySelector(".signInBtn");

signUp.addEventListener("click", () => {
  container.classList.add("slide");
});

signIn.addEventListener("click", () => {
  container.classList.remove("slide");
});
