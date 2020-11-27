'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio'; ->reserved
//const private = 534; ->reserved



*/

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

//Ball-Machine Practise
function ballMachine(soccerballs, footballs, golfballs) {
    const balls = `There are ${soccerballs} soccerballs, ${footballs} footballs and ${golfballs} golfballs!`;
    return balls;
}
const differentBalls = ballMachine(2, 12, 4);
console.log(differentBalls);

const varietyBalls = ballMachine(100, 202, 1000);
console.log(varietyBalls);

