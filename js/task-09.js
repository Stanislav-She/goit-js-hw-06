const refs = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.button.addEventListener("click", (onTargetButtonClick) => {
  refs.span.textContent = getRandomHexColor();
  refs.body.style.background = refs.span.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const refs = {
//   body: document.querySelector("body"),
//   button: document.querySelector(".change-color"),
//   span: document.querySelector(".color"),
// };
// // створюємо референси до елемента body, button та span, пов'язуємо їх
// // посиланням через document.querySelector із html

// refs.button.addEventListener("click", (onTargetButtonClick) => {
//   refs.span.textContent = getRandomHexColor();
//   refs.body.style.background = refs.span.textContent;
// });
// // закріплюємо слухача подій на button, аби при події кліку зпрацьовувала
// // функція onTargetButtonClick, в якій текстовим контентом span є
// // результат колбек-функції getRandomHexColor.
// // діла на елемент body прописуємо інлайн стиль беграунду, значення якого є
// // текстовим контентом span

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// // колбек функція, що повертає результат рандомної генерації числа в
// //  поєднанні з #, що утворює HexColor
