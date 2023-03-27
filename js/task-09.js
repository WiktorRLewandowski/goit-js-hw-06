function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
  spanEl.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});
