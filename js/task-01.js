const itemRef = document.querySelector("#categories").children;
console.log("Number of categories:", itemRef.length);

[...itemRef].forEach((item) => {
  const title = item.querySelector("h2").textContent;
  console.log("Category:", title);
  const itemList = item.querySelectorAll("li").length;
  console.log("Elements:", itemList);
});

// const itemRef = document.querySelector("#categories").children;
// ==> повертає псевдомасив з дітей ul з id="categories"
// console.log(itemRef);
// console.log("Number of categories:", itemRef.length);
// ==> виводить довжину масиву, відповідно кількість категорій
// [...itemRef].forEach((item) => {
//   ==> перебираємо псевдомасив itemRef
//   const title = item.querySelector("h2").textContent;
//   console.log("Category:", title);
//  ==> на кожній ітерації ми виводимо текстовий контент заголовків h2
//   const itemList = item.querySelectorAll("li").length;
//   console.log("Elements:", itemList);
//   ==> на кожній ітерації виводимо кількість елементів списку визначених раніше категорій
//   ==> таким чином, що створюємо псевдомасив, довжину якого визначаємо
// });
