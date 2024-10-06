// Получаем элементы бургер-меню и меню
const burger = document.querySelector("#burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("not-scoll");
});
