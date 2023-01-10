const refs = {
  form: document.querySelector(".login-form"),
  inputEmail: document.querySelector("input[type=email]"),
  inputPassword: document.querySelector("input[type=password]"),
};

refs.form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.email = refs.inputEmail.value.trim();
  formData.password = refs.inputPassword.value.trim();

  if (
    refs.inputEmail.value.trim() === "" ||
    refs.inputPassword.value.trim() === ""
  ) {
    return alert("Увага, всі поля повинні бути заповнені!");
  }
  console.log(formData);
  event.currentTarget.reset();
}
