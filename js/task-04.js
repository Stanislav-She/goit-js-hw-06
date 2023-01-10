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
