const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
  "Omjon",
  "Da sp00n",
];

const body = document.body;
const heading = document.createElement("h1");
const list = document.createElement("ul");

heading.textContent = "Ingredients";

ingredients.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  li.classList.add("item");
  list.append(li);
});

body.append(heading);
body.append(list);
