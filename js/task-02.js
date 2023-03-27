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
const list = document.getElementById("ingredients");

ingredients.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  li.classList.add("item");
  list.append(li);
});
