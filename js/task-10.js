function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input[type = "number"]');
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.getElementById("boxes");

const createBoxes = () => {
  for (let i = 0; i < inputEl.value; i++) {
    let size = 30;
    let div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.height = size + i * 10 + "px";
    div.style.width = size + i * 10 + "px";
    boxesEl.append(div);
  }
};
const destroyBoxes = () => (boxesEl.innerHTML = "");

createEl.addEventListener("click", createBoxes);
destroyEl.addEventListener("click", destroyBoxes);
