function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector(".widget");
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
  spanEl.textContent = getRandomHexColor();
  widgetEl.style.backgroundColor = getRandomHexColor();
});
