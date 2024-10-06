// Получаем элементы бургер-меню и меню
const burger = document.querySelector("#burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const submitBtn = document.querySelector("#submit");
const nameInput = document.getElementById("name");
const telInput = document.getElementById("tel");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const menuLinks = document.querySelectorAll(".header__menu-link");

burger.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
nameInput.addEventListener("input", validateForm);
telInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", validateForm);

function toggleMenu() {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("not-scoll");
}
function validateForm() {
  const name = nameInput.value.trim();
  const tel = telInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  let isFormValid = false;

  if (name !== "" && tel !== "" && email !== "" && message !== "") {
    isFormValid = true;
  }

  const submitButton = document.querySelector("#submit");

  submitButton.disabled = !isFormValid;
}
