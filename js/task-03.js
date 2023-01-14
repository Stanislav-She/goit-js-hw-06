const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.querySelector(".gallery");
listRef.style = "list-style: none; display: flex;";

const makeItemLinkRef = images
  .map((element) => {
    const htmlString = `<li style='margin-right: 25px' class='gallery__item'>
  <img style='display: block; box-shadow: 10px 10px 45px 10px #555555;'
  class='gallery__img' src=${element.url} alt=${element.alt} width = 300></li>`;

    return htmlString;
  })

  .join("");

listRef.insertAdjacentHTML("beforeend", makeItemLinkRef);

// const listRef = document.querySelector(".gallery");
// // ==> отримуємо посилання на ul з html
// listRef.style = "list-style: none; display: flex;";
// // ==> додаємо інлайнові стилі псевдомасив ul
// const makeItemLinkRef = images
//   .map((element) => {
//     // трансформуємо масив images за допомогою метода map
//     const htmlString = `<li style='margin-right: 25px' class='gallery__item'>
//   <img style='display: block; box-shadow: 10px 10px 45px 10px #555555;'
//   class='gallery__img' src=${element.url} alt=${element.alt} width = 300></li>`;
//     // для створення розмітки лішок використовуємо шаблонні рядки, в яких
//     // прописуємо інлайнові стилі, класи для лішок та їхніх вкладень img,
//     // також тут з трансформованого масиву беремо через element src та alt, сказуємо ширину зображень
//     return htmlString;
//     // повертаємо кожну лішку
//   })
//   .join("");
// // об'єднуємо отримані елементи в рядок порожнім місцем без символу

// listRef.insertAdjacentHTML("beforeend", makeItemLinkRef);
// // додаємо в ul лішки одну за одною beforeend
