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

const body = document.body;
const gallery = document.querySelector(".gallery");

images.forEach((image) => {
  let url = image.url;
  let alt = image.alt;
  console.log(url);
  console.log(alt);

  let li = document.createElement("li");
  li.classList.add("img-style");
  gallery.append(li);
  li.style.listStyleType = "none";
  li.style.boxShadow = "rgba(0, 0, 0, 0.5) 10px 10px 15px 5px";

  let img = document.createElement("img");
  li.append(img);
  img.style.maxWidth = "100%";
  img.style.display = "block";
  img.setAttribute("src", url); // "hard-written" attribs, but let's be honest
  img.setAttribute("alt", alt); // it won't work any other way around
  // or we could just...
  // li.innerHTML = `<img src="${url}" alt="${alt}">`; etc...
});
const imageStyle = document.querySelectorAll(".img-style");

body.style.background =
  "no-repeat linear-gradient(to right bottom, #eecda3 10%, #ef629f)";
gallery.style.maxWidth = "900px";
gallery.style.margin = "0 auto";
gallery.style.backgroundColor = "bisque";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "30px";
gallery.style.alignItems = "center";
gallery.style.justifyContent = "center";
gallery.style.padding = "50px";
gallery.style.boxShadow = "rgba(0, 0, 0, 0.5) 10px 10px 15px 5px";
