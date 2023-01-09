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

// const refs = {
//   form: document.querySelector(".login-form"),
//   inputEmail: document.querySelector("input[type=email]"),
//   inputPassword: document.querySelector("input[type=password]"),
// };
// // створюємо змінну-об'єкт змінних refs;
// // створюємо змінну form та присвоюємо їй адресу з html за класом форми
// // створюємо змінну inputEmail та присвоюємо їй адресу з html за типом
// // створюємо змінну inputPassword та присвоюємо їй адресу з html за типом

// refs.form.addEventListener("submit", formSubmit);
// // додаємо слухача подій на змінну form, аби він відпрацьовував
// // на події submit і відбувалась обробка форми за написаною функцією

// function formSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   formData.email = refs.inputEmail.value.trim();
//   formData.password = refs.inputPassword.value.trim();

//   if (
//     refs.inputEmail.value.trim() === "" ||
//     refs.inputPassword.value.trim() === ""
//   ) {
//     return alert("Увага, всі поля повинні бути заповнені!");
//   }
//   console.log(formData);
//   event.currentTarget.reset();
// }
// // пишемо функцію formSubmit.
// // в рядку event.preventDefault() скидують дефолтні налаштування форми після
// // сабміту, а саме сторінка не перезавантажується після логінізації.
// // створюємо змінну formData, які присвоюємо введені дані користувачем.
// // .trim() видаляє можливі пробіли на початку та в кінці рядка.
// // далі прописуємо умову через if для виведення alert у випадку порожніх полів,
// // через логычний оператор ||.
// // виводимо в консоль зібрані дані від користувача про логін та пароль.
// // очищаємо значення в формі через .reset().
