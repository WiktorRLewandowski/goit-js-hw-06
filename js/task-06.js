const valInput = document.getElementById("validation-input");

valInput.addEventListener("blur", () => {
  valInput.value.length !== +valInput.dataset.length
    ? (valInput.className = "invalid")
    : (valInput.className = "valid");
});
