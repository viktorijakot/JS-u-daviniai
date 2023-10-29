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

document.querySelectorAll('.new').forEach((el) => el.style.textDecoration = "underline" )

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
    } else e.addEventListener('click', (b) => {
        b.target.parentElement.classList.add("like")
    })
  })
);

//5a 

const newText = document.createElement("h2")
newText.textContent = "Senjorai tik: 1.99 eur"
newText.classList.add("price-tag")
newText.style.color = "lightblue"
console.log(newText)
document.querySelector(".prices ").appendChild(newText)

//5b

const newText1 = document.createElement("h2");
newText1.textContent = "Senjorų grupė iki 10: tik 5.99 eur";
newText1.classList.add("price-tag", "new")
newText1.style.color = "lightblue"
document.querySelector(".prices ").appendChild(newText1);

newText1.addEventListener('click', () => {
    newText1.style.color = "green"
})

//5c

console.log(list);
const nepatinka = document.createElement("li")
const neText = document.createTextNode("NEPATINKA")
nepatinka.appendChild(neText)


const gyvates = document.querySelectorAll("#gyvates >li")
console.log(gyvates)
gyvates.forEach ((el,i) => {
    if(i===0)
        el.appendChild(nepatinka)
}
)

nepatinka.addEventListener ('click',() => {
    gyvates.forEach((e) =>{
e.parentElement.classList.remove("like")
    })
})