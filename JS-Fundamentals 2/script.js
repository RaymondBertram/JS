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


const cutPieces = function (fruit) {
    return fruit * 4;
}
//Example 1
function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


//Example 2
const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges, pineapples) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const pineapplePieces = cutPieces(pineapples);
    const juice = `Juice with ${applePieces} pieces of apple, ${pineapplePieces} pieces of pineapple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3, 4));



const calcAge = function (year) {
    return 2037 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));


function calcAge(birthYear, lastName) {
    const age = 2060 - birthYear;
    console.log(`${lastName} is ${age} years old!`);
    return age;
}
const age = calcAge(1955, 'Mikeal');
const numers = calcAge(1970, 'Bruno');
*/


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter'

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(y[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; //changed the array
console.log(friends);
// friends = ['Bob', 'Alice']--> does not work because you can change only one

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

//console.log(calcAge(years));-->Not right

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);







