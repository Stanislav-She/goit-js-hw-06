const counterRef = document.querySelector("#counter");
const valueRef = document.querySelector("#value");
const decrementRef = counterRef.firstElementChild;
const incrementRef = counterRef.lastElementChild;

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

decrementRef.addEventListener("click", function () {
  counterValue.decrement();
  valueRef.textContent = counterValue.value;
});

incrementRef.addEventListener("click", function () {
  counterValue.increment();
  valueRef.textContent = counterValue.value;
});

// приєднуємо слухачів за кліком на кнопки. Додаємо колбек функції для
// decrement та increment.
// потім прирівнюємо текстовий вміст valueRef до значення counterValue

// const counterRef = document.querySelector("#counter");
// // знаходимо адресу через id й присвоюємо в змінну
// const valueRef = document.querySelector("#value");
// // знаходимо адресу через id й присвоюємо в змінну
// const decrementRef = counterRef.firstElementChild;
// // відповідно присвоюємо змінній адресу першої дитини counterRef
// const incrementRef = counterRef.lastElementChild;
// // відповідно присвоюємо змінній адресу останньої дитини counterRef

// const counterValue = {
//   value: 0,
//   decrement() {
//     this.value -= 1;
//   },
//   increment() {
//     this.value += 1;
//   },
// };
// // створюємо змінну counterValue, в якій зберігатиметься поточне значення
// // лічильника та ініціалізували значення цієї змінної.
// // Звертаємось до значення value counterValue та вказуємо, що буде -1 чи +1
// // при виклику decrement чи increment відповідно

// decrementRef.addEventListener("click", function () {
//   counterValue.decrement();
//   valueRef.textContent = counterValue.value;
// });

// incrementRef.addEventListener("click", function () {
//   counterValue.increment();
//   valueRef.textContent = counterValue.value;
// });

// // приєднуємо слухачів за кліком на кнопки. Додаємо колбек функції для
// // decrement та increment.
// // потім прирівнюємо текстовий вміст valueRef до значення counterValue
