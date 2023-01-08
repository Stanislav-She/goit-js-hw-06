const inputRef = document.querySelector("#validation-input");
// змінна з адресою від інпута в html

inputRef.addEventListener("blur", onInputBlur);
// вішаємо слухача на подію блур, тобто прибирання фокусу

function onInputBlur(event) {
  if (event.currentTarget.value.length.toString() === inputRef.dataset.length) {
    changeClas("valid", "invalid");
  } else {
    changeClas("invalid", "valid");
  }
}
// пишемо функцію, яка приводить значення інпуту до рядку .toString() і це значення суворо
// дорівнює атрибуту інпута data-length, то через колбек функцію updateClas додається клас
// valid і видаляється invalid за його наявності, або навпаки. Відповідно задіюється певний
// стиль забарвлення рамки інпуту

function changeClas(classOne, classTwo) {
  inputRef.classList.add(classOne);
  inputRef.classList.remove(classTwo);
}
// пишемо колбек функцію в яку підставляються значення з function onInputBlur
