const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    let message = `Fill the void inside those fields`;
    return alert(message);
  }
  console.log({ Email: email.value, Password: password.value });

  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
