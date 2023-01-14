const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const makeItemRef = (ingredient) => {
  return ingredients.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    itemRef.classList.add("item");
    return itemRef;
  });
};

listRef.append(...makeItemRef(ingredients));

// ДРУГИЙ ВАРІАНТ
// const listRef = document.querySelector("#ingredients");
// // ==> отримуємо посилання на ul з html

// const makeItemRef = (ingredient) => {
//   return ingredients.map((ingredient) => {
//     const itemRef = document.createElement("li");
//     itemRef.textContent = ingredient;
//     itemRef.classList.add("item");
//     // ==> на створений елемент додаємо клас item за методом element.classList.add()
//     return itemRef;
//   });
// };
// // створюємо функцію makeItemRef для перебору масиву з інгридієнтів та повертає на кожній
// // ітерації трансформує масив ingredients в новий масив itemRef, тобто кінцевим результатом
// // функції makeItemRef буде новий масив itemRef, який перед цим створює li елементи, на кожній
// // ітерації додає в textContent цих лішок значення перебраного ingredient та додає клас item

// listRef.append(...makeItemRef(ingredients));
// // додаємо до ul розпилений отриманий новий масив даних з лішок і текстового контенту всередині них

// ПЕРШИЙ ВАРІАНТ

// const listRef = document.querySelector("#ingredients");
// ==> отримуємо посилання на ul з html

// [...ingredients].forEach((element) => {
// const itemRef = document.createElement("li");
// ==> створюємо в пам'яті окремий елемент li
// itemRef.classList.add("item");
// ==> на створений елемент додаємо клас item за методом element.classList.add()
// itemRef.textContent = element;
// ==> присвоюємо кожній лішці текстовий контект з element, тобто один із інгридієнтів
// listRef.appendChild(itemRef);
// ==> додаємо всі лішки в ul
// });
// 01:20 Заняття 11
