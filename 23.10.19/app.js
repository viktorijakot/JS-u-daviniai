//1a

document.querySelector("h1").style.color = "darkgreen";

//1b

document.querySelector("i").className = "small";

//1c

document.querySelector("h1").classList.remove("main");

//1d

document.querySelector("h2").classList.add("first");
document.querySelector("h2").classList.remove("main");

//1e

document.querySelector("span").style.color = "grey";
document.querySelector("span").style.fontSize = "10px";

//2a

console.log(document.querySelectorAll("h2").length);

//2b

console.log(
  document.querySelectorAll("h2").length -
    document.querySelectorAll("h2.first").length
);

//2c

document
  .querySelectorAll("h2")
  .forEach((element) => (element.style.color = "lightblue"));

//2d

document
  .querySelectorAll("div.prices > h2")
  .forEach((element) => element.classList.add("price-tag"));

//2e

document
  .querySelectorAll(".new")
  .forEach((el) => (el.style.textDecoration = "underline"));

//2f

console.log(document.querySelectorAll("ul").length);

//2g

document
  .querySelectorAll("ul")
  .forEach((el) => (el.style.border = "1px solid black"));

document.querySelectorAll("ul").forEach((el) => (el.style.paddingTop = "15px"));

document
  .querySelectorAll("ul")
  .forEach((el) => (el.style.paddingBottom = "15px"));

document
  .querySelectorAll("ul")
  .forEach((el) => (el.style.paddingRight = "50px"));

document
  .querySelectorAll("ul")
  .forEach((el) => (el.style.paddingLeft = "50px"));

//2h

console.log(document.querySelectorAll("ul > .new").length);

//2i

console.log(document.querySelectorAll("ul:nth-child(1) > .new").length);

//NESIGAVO, nerado 1
console.log(document.querySelectorAll("ul:nth-child(2) > .new").length);

console.log(document.querySelectorAll("ul:nth-child(3) > .new").length);

console.log(document.querySelectorAll("ul:nth-child(4) > .new").length);

//3a

const buttonGreen = document.querySelector("#h1-color");

buttonGreen.addEventListener("click", (e) => {
  document.querySelector("h1").style.color = "green";
});

const buttonFont = document.querySelector("#h1-font");

buttonFont.addEventListener("click", () => {
  document.querySelector("h1").style.fontSize = "10px";
});

//3b

const iTag = document.querySelector("i");

iTag.addEventListener("click", (e) => {
  iTag.style.fontWeight = "bold";
});

//3d

const prices = document.querySelector(".prices");

prices.addEventListener("click", () => {
  if (prices.style.backgroundColor === "grey") {
    prices.style.backgroundColor = "white";
  } else prices.style.backgroundColor = "grey";
});

//3e

const contacts = document.querySelector("#contacts > u");

const style = getComputedStyle(document.querySelector("#contacts")).fontSize;

contacts.addEventListener("click", () => {
  document.getElementById("contacts").style.fontSize =
    +style.slice(0, -2) + 4 + "px";
  console.log(+style.slice(0, -2) + 4);
});

//3f

const x = document.querySelector("#contacts > b");

x.addEventListener("click", () => {
  document.getElementById("contacts").style.fontSize = null;
});

//3g

const colorBack = document.querySelector("#h1-color-back");

colorBack.addEventListener("click", () => {
  document.querySelector("h1").style.color = null;
});

const fontBack = document.querySelector("#h1-font-back");

fontBack.addEventListener("click", () => {
  document.querySelector("h1").style.fontSize = "20px";
  console.log(document.querySelector("h1"));
});

//4a

const newAnimals = document.querySelectorAll(".new");
console.log(newAnimals);

newAnimals.forEach((el, i) => {
  if (i !== newAnimals.length - 1) {
    el.addEventListener("dblclick", (e) => {
      e.target.style.color = "red";
    });
  }
});

//4b ir c

const list = [];
list.push(
  document.querySelectorAll("#zirafos > li"),
  document.querySelectorAll("#plesrunai > li"),
  document.querySelectorAll("#gyvates > li"),
  document.querySelectorAll("#zoliaedziai > li")
);

list.forEach((el) =>
  el.forEach((e, i) => {
    if (i !== 0) {
      e.addEventListener("click", (b) => {
        b.target.style.fontSize = "130%";
      });
    } else
      e.addEventListener("click", (b) => {
        b.target.parentElement.classList.add("like");
      });
  })
);

//5a

const newText = document.createElement("h2");
newText.textContent = "Senjorai tik: 1.99 eur";
newText.classList.add("price-tag");
newText.style.color = "lightblue";
console.log(newText);
document.querySelector(".prices ").appendChild(newText);

//5b

const newText1 = document.createElement("h2");
newText1.textContent = "Senjorų grupė iki 10: tik 5.99 eur";
newText1.classList.add("price-tag", "new");
newText1.style.color = "lightblue";
document.querySelector(".prices ").appendChild(newText1);

newText1.addEventListener("click", () => {
  newText1.style.color = "green";
});

//5c

const nepatinka = document.createElement("li");
const neText = document.createTextNode("NEPATINKA");
nepatinka.appendChild(neText);
nepatinka.classList.add("like-button")

const gyvates = document.querySelector("#gyvates > li:nth-child(1)");

gyvates.after(nepatinka);

nepatinka.addEventListener("click", () => {
  gyvates.parentElement.classList.remove("like");
});

const nepatinka1 = document.createElement("li");
const neText1 = document.createTextNode("NEPATINKA");
nepatinka1.appendChild(neText1);
nepatinka1.classList.add("like-button")

const plesrunai = document.querySelector("#plesrunai > li:nth-child(1)");
plesrunai.after(nepatinka1);

nepatinka1.addEventListener("click", () => {
  plesrunai.parentElement.classList.remove("like");
});

const zirafos = document.querySelector("#zirafos > li:nth-child(1)");
const nepatinka2 = document.createElement("li");
const neText2 = document.createTextNode("NEPATINKA");
nepatinka2.appendChild(neText2);
nepatinka2.classList.add("like-button")

zirafos.after(nepatinka2);
nepatinka2.addEventListener("click", () => {
  zirafos.parentElement.classList.remove("like");
});

const zoliaedziai = document.querySelector("#zoliaedziai > li:nth-child(1)");
const nepatinka3 = document.createElement("li");
const neText3 = document.createTextNode("NEPATINKA");
nepatinka3.appendChild(neText3);
nepatinka3.classList.add("like-button")

zoliaedziai.after(nepatinka3);
nepatinka3.addEventListener("click", () => {
  zoliaedziai.parentElement.classList.remove("like");
});

//5d

 const but1 = document.createElement("fieldset")
 but1.innerHTML = `<legend>HEADER 3</legend>
 <button id="h1-underline">Pabraukti H1 tagą</button>
 <button id="h1-underline-back">Nepabraukti H1 tagą</button>`

 const fieldset = document.querySelectorAll('fieldset')

fieldset[1].after(but1)

const butUnderline = document.querySelector('#h1-underline')

butUnderline.addEventListener('click', () => {
    document.querySelector('h1').style.textDecoration = 'underline'
})

document.querySelector('#h1-underline-back').addEventListener('click', () => {
    document.querySelector('h1').style.textDecoration = 'none'
})