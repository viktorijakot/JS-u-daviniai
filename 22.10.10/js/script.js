let actorName = 'Richard'
let actorSurname = 'Gere'
if (actorName.length > actorSurname.length) {
    console.log(actorSurname)
} else {
    console.log(actorName);
}

let myName = 'Viktorija';
let mySurname = 'Kotaitė';
let myBirthday = 1993;
let currentYear = 2023;
let myAge = currentYear - myBirthday;
const sentance = `Aš ${myName} ${mySurname}. Man yra ${myAge} metai(ų).`
console.log(sentance);

let actorName2 = 'Jason';
let actorSurname2 = 'Sudeikis';
let newName = (actorName2.slice(-3)) + (actorSurname2.slice(-3));
console.log(newName)

let string1 = 'Once upon a time in Hollywood';
string1 = string1.replaceAll('o', '*')
string1 = string1.replaceAll('O', '*') // ar galima viena eilute tai padaryti?
console.log(string1)

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let number1 = rand(0, 2);
let number2 = rand(0, 2);
let number3 = rand(0, 2);
let number4 = rand(0, 2);
let arr = [number1, number2, number3, number4]; // negalima delioti su paprastais skliaustais. visada kai vardinam reikia laužtinių?
console.log(number1, number2,number3, number4)
console.log(arr)
let count = {};
arr.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
})
console.log(count);

let random1 = rand(0, 4);
let random2 = rand(0, 4);
if (random1 > random2) {
    console.log((random1 / random2).toFixed(2))
} else {
    console.log((random2 / random1).toFixed(2))
}


let randomNumber1 = rand(0, 25);
let randomNumber2 = rand(0, 25);
let randomNumber3 = rand(0, 25);
let array = [randomNumber1, randomNumber2, randomNumber3];
let middle = array[array.length - 1] // kaip padaryti, kad galiotų su daugiau kintamųjų
console.log(middle)

randomNumber1 = rand(0, 25);
randomNumber2 = rand(0, 25);
randomNumber3 = rand(0, 25);
let line= [randomNumber1,randomNumber2,randomNumber3];
let mid = line[line.length-1];
console.log (mid)

randomNumber1 = rand(0, 25);
randomNumber2 = rand(0, 25);
randomNumber3 = rand(0, 25);
let min =Math.min(a,b,c)
let max =Math.max (a,b,c)
console.log ((a+b+c)-(min+max))

let nameMyActor = "Steve";
let surnameMyActor = "Carell";
let nameMix =(nameMyActor.at(0)) + (surnameMyActor.at(0));
console.log(nameMix)

function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * characters.length);
     result += characters[randomIndex];
    }
    return result;
   }
let randomletters1 = generateRandomString(3);
console.log(randomletters1)

let result = Math.random().toString(36).substring(9,12);
console.log(result)

let abc = 'abcdefghijklmnopqrstuvwxyz';
let randomabc = Math.floor(Math.random()*abc.length);
let oneletter=abc[randomabc]
let twoletter=abc[randomabc+1]
let threeletter=abc[randomabc/2]
console.log(oneletter+twoletter+threeletter)

let letters = 'abcdefghijklmnopqrstuvwxyz';
let first = letters[rand(0,letters.length-1)] + letters[rand(0,letters.length-1)] + letters[rand(0,letters.length-1)]
console.log(first)