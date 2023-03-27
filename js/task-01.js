const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);
console.log("");
const item = document.querySelectorAll(".item");
const header = item.forEach((i) => {
  console.log(`Category: ${i.firstElementChild.textContent}`),
    console.log(`Elements: ${i.lastElementChild.childElementCount}`);
});
