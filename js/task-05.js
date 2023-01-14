const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", changeOutput);

function changeOutput(event) {
  if (event.currentTarget.value === "") {
    spanRef.textContent = "Anonymous";
  } else {
    spanRef.textContent = event.currentTarget.value;
  }
}

// const inputRef = document.querySelector("#name-input");
// // створюємо дом змінну та присвоюємо їй адресу з елемента в html
// const spanRef = document.querySelector("#name-output");
// // створюємо дом змінну та присвоюємо їй адресу з елемента в html
// // console.log(spanRef);

// inputRef.addEventListener("input", changeOutput);
// // ставимо слухача подій, а саме тип інпут і колбекфункцію

// function changeOutput(event) {
//   if (event.currentTarget.value === "") {
//     spanRef.textContent = "Anonymous";
//   } else {
//     spanRef.textContent = event.currentTarget.value;
//   }
// }

// // 48:33 відео Репети 12 заняття є елеиенти рішення
