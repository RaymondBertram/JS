//Data Types//
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year)

console.log(typeof null)


let age = 30;
age = 31;
console.log(age);

const birthYear = 1991;
console.log(birthYear);

var job = "programmer"
job = "teacher"
*/

//Math Operators//
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//2**3 means 2 to the power of 3 = 2*2*2//

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName)


//Assignment operators

let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4; //x=x*4=100
x++;
x--;
x--;
console.log(x);

//Comparison operators
/*
console.log(ageJonas > ageSarah);//>,<,>=,<=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

//Operator Precedences 
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x=y = 10, x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const age = 15;
if (age >= 18) {
    console.log('Sarah can start a driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
}


let century;
const birthYear1 = 1991;
if (birthYear1 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);



//Type Coercion

console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n)


//5 falsy values:

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINDED");
}
*/

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {//23 ===23---> true   22===23 --> false
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not a 23, 9 or 7')
}

if (favourite !== 23) console.log('Why not 23?');


