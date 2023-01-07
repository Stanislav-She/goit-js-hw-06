const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

[...ingredients].forEach((element) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = element;
  {
    listRef.appendChild(itemRef);
  }
});

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
