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

//console.log(calcAge(years));-->Not right-->NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

console.log(friends);

if (friends.includes('Steven')) {
    console.log('You have a friends called Steven!')
}


const jonasArray = [
    'Jonas',   //firstName
    'Schmedtmann',//lastName
    2037 - 1991, //age
    'teacher' // Job
    ['Michael', 'Peter', 'Steven'] //friends
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interestedIn = prompt('What do you wnat to know about Jonas? Choose between firstName, lastName, age, job and friends ');



if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//Challenge
//"Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


//Object method
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    //}

    //calcAge: function () {
    //    console.log(this);   // for THIS object
    //    return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver license.`
    },


};

console.log(jonas.calcAge());
console.log(jonas.age);

//Challenge
//Jonas is  a 46 year old teacher and he has a/no driver's license

console.log(jonas.getSummary());


//Loops
//Cmd +/ ausklammern(comment)
console.log('Lifting weights repitition 1');
console.log('Lifting weights repitition 2');
console.log('Lifting weights repitition 3');
console.log('Lifting weights repitition 4');
console.log('Lifting weights repitition 5');
console.log('Lifting weights repitition 6');
console.log('Lifting weights repitition 7');
console.log('Lifting weights repitition 8');
console.log('Lifting weights repitition 9');
console.log('Lifting weights repitition 10');
*/
//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log('Lifting weights repetition 1');
};




