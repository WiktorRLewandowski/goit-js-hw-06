const counterValue = document.getElementById("value");
const incr = document.querySelector('button[data-action="increment"]');
const decr = document.querySelector('button[data-action="decrement"]');
let counter = 0;

incr.addEventListener("click", () => {
  counter++;
  counterValue.innerText = counter;
});

decr.addEventListener("click", () => {
  counter--;
  counterValue.innerText = counter;
});
