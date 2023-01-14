const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  spanRef.style.fontSize = event.currentTarget.value + "px";
}

// const inputRef = document.querySelector("#font-size-control");
// // створюємо змінну і закріплюємо за нею адресу з html
// const spanRef = document.querySelector("#text");
// // створюємо змінну і закріплюємо за нею адресу з html
// inputRef.addEventListener("input", changeFontSize);
// // закріплюємо слухача подій на інпут, а саме реакція на input, та значення для колбекфункції
// function changeFontSize(event) {
//   spanRef.style.fontSize = event.currentTarget.value + "px";
// }
// // пишемо колбекфункцію, в якій під час події розмір шрифта в спані дорівнює значенню інпута,
// // тобто рівняється повзунку
