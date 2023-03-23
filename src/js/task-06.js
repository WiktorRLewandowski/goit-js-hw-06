const valInput = document.getElementById("validation-input");
// console.log(+valInput.dataset.length);

valInput.addEventListener("blur", () => {
  //   console.log(valInput.value.length);
  valInput.value.length !== +valInput.dataset.length
    ? (valInput.className = "invalid")
    : (valInput.className = "valid");
});
