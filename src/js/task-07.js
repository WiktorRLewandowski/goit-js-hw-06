const rangeEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

rangeEl.addEventListener("input", (event) => {
  const fS = `${event.currentTarget.value}px`;
  console.log(ff);
  textEl.style.fontSize = fS;
});
