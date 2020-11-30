'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio'; ->reserved
//const private = 534; ->reserved





function logger() {
    console.log('My name is Jonas')
}

//calling/running/invoking function
logger();
logger();
logger();

function broName() {
    console.log('We are just having fun bro!')
}

broName();
broName();
broName();

//Fruit-Processor
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Ball-Machine
function ballMachine(soccerballs, footballs, golfballs) {
    const balls = `There are ${soccerballs} soccerballs, ${footballs} footballs and ${golfballs} golfballs!`;
    return balls;
}
const differentBalls = ballMachine(2, 12, 4);
console.log(differentBalls);

const varietyBalls = ballMachine(100, 202, 1000);
console.log(varietyBalls);


//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);


//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2)


//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 64 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

*/
const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));