const itemRef = document.querySelector("#categories").children;
console.log("Number of categories:", itemRef.length);

[...itemRef].forEach((item) => {
  const title = item.querySelector("h2").textContent;
  console.log("Category:", title);
  const itemList = item.querySelectorAll("li").length;
  console.log("Elements:", itemList);
});
