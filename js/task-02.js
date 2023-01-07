const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.createElement("li");
// ==> створюємо в пам'яті окремий елемент li
listRef.classList.add("item");
// ==> на створений елемент додаємо клас item за методом element.classList.add()
console.log(listRef);
