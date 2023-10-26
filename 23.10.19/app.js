//1a

document.querySelector("h1").style.color = "green";

//1b

document.querySelector('i').className = 'small';

//1c

document.querySelector('h1').classList.remove('main');

//1d

document.querySelector('h2').classList.add('first');
document.querySelector('h2').classList.remove('main');

//1e

document.querySelector('span').style.color = "grey";
document.querySelector('span').style.fontSize = "10px";

//2a

console.log(document.querySelectorAll('h2').length)

//2b

console.log(document.querySelectorAll('h2').length - document.querySelectorAll('h2.first').length);

//2c

document.querySelectorAll('h2').forEach(element => element.style.color = "lightblue");

//2d 

document.querySelectorAll('div.prices > h2').forEach(element => element.classList.add('price-tag'));

//2e

//console.log(document.querySelectorAll('.new').forEach((el, i) => el.innerHTML += `fontStyle:underline` ))

//2f

console.log(document.querySelectorAll('ul').length)

//2g

document.querySelectorAll('ul').forEach(el => el.style.border = "1px solid black");

document.querySelectorAll('ul').forEach(el => el.style.paddingTop = "15px");

document.querySelectorAll('ul').forEach(el => el.style.paddingBottom = "15px");

document.querySelectorAll('ul').forEach(el => el.style.paddingRight= "50px");

document.querySelectorAll('ul').forEach(el => el.style.paddingLeft= "50px");

//2h

console.log(document.querySelectorAll('ul > .new').length);

//2i

console.log(document.querySelectorAll('ul:nth-child(1) > .new').length);

//NESIGAVO, nerado 1
console.log(document.querySelectorAll('ul:nth-child(2) > .new').length);

console.log(document.querySelectorAll('ul:nth-child(3) > .new').length);

console.log(document.querySelectorAll('ul:nth-child(4) > .new').length);

//3a
