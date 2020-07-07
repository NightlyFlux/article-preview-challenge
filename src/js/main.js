const $button = document.querySelector(".button");
const $button_body = document.querySelector(".button__body");
const $button_popup = document.querySelector(".button__popup");

$button.addEventListener("click", () => {
  $button.classList.toggle("active");
  $button_body.classList.toggle("white");
  $button_popup.classList.toggle("visible");
});
