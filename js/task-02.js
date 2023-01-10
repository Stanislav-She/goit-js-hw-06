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
