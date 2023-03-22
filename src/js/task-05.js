const nameOutput = document.getElementById("name-output");
const nameInput = document.getElementById("name-input");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    nameOutput.textContent = `Anonymous?`;
  }
});
