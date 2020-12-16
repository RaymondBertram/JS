'use strict';
/*
const now= 2020;
const ageRay = now -2000;
const ageColin=now-2001;
console.log(ageColin, ageRay);

console.log(ageColin**2, ageRay*2);

const firstName= 'Raymond';
const firstName1='Colin';
const lastName='Bertram';
console.log(firstName+" "+lastName);
console.log(firstName1+" "+lastName);

let x= 15+5; //20
x+=10; //20+10=30
x-=10;
console.log(x);

console.log(ageColin>ageRay);
console.log(ageColin>=18);

const isFullAge = ageRay>=18;
console.log(now-2000>now-2001);

const averageAge =(ageColin+ageRay)/2;
console.log(ageColin, ageRay, averageAge);


const firstName='Ray';
const lastName ='Bertram';
const job='IT-Expert';
const birthDate='16.08.2000';
const year='2046';

const infoRay=(`I'm ${firstName} ${lastName} and i was born on the ${birthDate}. In ${year} i will be a ${job} ! `);
console.log(infoRay);

const age=14;
const canDrinkBeer = age>=16;
const canDrinkShots = age>=18;

if (canDrinkBeer){
    console.log('You can drink beer!');
}else {
    console.log('Your are not allowed to drink beer!');
}

const inputYear='1966';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);

let x=2+3+4+5-'6';
x=x+2+'2';
console.log(x);

console.log('I am 20 years old!');


 const age =18;
 if(age===18){
     console.log('You are 18!');
 } else{
     console.log('Your are not 18!');
 }

 const favourite = Number(prompt("What's your favourite number?"));
 console.log(favourite);

 if(favourite===16) {
     console.log('Best number in the world!')
 }else if (favourite===21){
     console.log('21 is also a cool number!')
 }else if (favourite===9){
     console.log('9 is acceptable!')
 }else{
     console.log('You picked the wrong number!')
 }


 const hasDriversLicense = true; //A
 const hasGoodVision = true; //B
 const isTired = false;  //C
 const drankAlk = false; //D

//1
if (hasDriversLicense&&hasGoodVision){
    console.log('You are able to drive the car!')
} else{
    console.log('Dont drive!')

}
//2
if (hasDriversLicense && hasGoodVision && !isTired){
console.log('You can drive and pace through the streets!')
}else {
    console.log('Someone else should drive...Dont sleep and drive!')
}

//3
if(hasDriversLicense && hasGoodVision && !isTired && !drankAlk){
    console.log('You are a streetracer..Lets pace and race!')
} else {
    console.log('Start drinking and stop driving!')
}
//Average 1
const averageTeamA = (23+56+30+45)/4;
const averageTeamB = (33+22+40+70)/4;
console.log(averageTeamA,averageTeamB);

let averageBothTeams = (averageTeamA+averageTeamB);
console.log(averageBothTeams);

if (averageTeamA>averageTeamB){
    console.log('Average of Team A ist higher than Team B!');
} else if(averageTeamB>averageTeamA){
    console.log('Average of Team B ist higher than Team A!');

} else if (averageTeamA===averageTeamB) {
    console.log('Both teams have the same average!');
}

//Average 2 mit Bedingung das Durchschnitt mind. 45 ist.

const averageTeamA = (33+56+30+70)/4;
const averageTeamB = (33+56+40+70)/4;
console.log(averageTeamA,averageTeamB);

if(averageTeamA>averageTeamB && averageTeamA>=45){
    console.log('Team A Higher Average!');
} else if(averageTeamB>averageTeamA && averageTeamB>=45){
    console.log('Team B Higher Average!');
}else if(averageTeamA===averageTeamB && averageTeamA>=45 && averageTeamB>=45){
    console.log('Both Have the Same Average!')
}else{
    console.log('Nobody Have At Least 45 Average!')
}

//Switch statement
// VAR 1
const day ='monday';
switch (day){
    case 'monday':
        console.log('Standup-Meeting');
        console.log('Programming');
    break;
    case 'tuesday':
        console.log('Developermeeting');
        console.log('Drinking wine!');
    break;
    case 'wednesday':
        console.log('Chillax');
    break;
    case 'thursday':
        console.log('Glad that soon will be friday!');
    break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
    break;
    default:
        console.log('Not a valid day');
}

//VAR 2
const day1 ='monday';

if(day1==='monday'){
    console.log("Shit, it's Monday!");
} else if(day1==='tuesday'){
    console.log('Stop crying!');
} else if(day1==='wednesday'){
    console.log('Wait another 2 day!');
}else if(day1==='thursday'){
    console.log('Drink wine!');
} else if(day1==='friday'){
    console.log('Hurray!');
}else if(day1==='saturday'||day1==='sunday'){
    console.log('Weekend');
}else{
    console.log('Not a valid day!');
}



const age =18;
age>=18 ? console.log('I like to drink Vodka!'):
console.log('I like to drink water!');

const age2= 12;
console.log(`I like to drink ${age2>=18 ? 'wine': 'water'}`);


function logger(){
    console.log('My name is Ray!');
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice =`Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(10, 0);
console.log(appleJuice);

const appleOrangeJuice= fruitProcessor(10,20);
console.log(appleOrangeJuice);

function vegetableMachine(cucumber, lettuce, paprika, feta){
    const salad = `It's a mixed salade with ${cucumber} cucumber, ${lettuce} lettuce, ${paprika} paprika and ${feta} pieces of feta cheese!`;
    return salad;
}
const mixSalad = vegetableMachine(1,4,2,20);
console.log(mixSalad);


//Normal function
function greet(name, lastName) {
    console.log(`Hey ${name} ${lastName} !`)
}

greet('Colin', 'Bertram');
greet('Ray', 'Bertram');


const calcAge2 = birthYear => 2050 - birthYear;

console.log(calcAge2(1945));
function sum(a, b) {
    return a + b
}
console.log(sum(105.5, 202.5));

const sum2 = (a, b) => a + b;

console.log(sum2(4, 5));

function isPositive(number) {
    return number >= 0
}

let isPositive2 = (number) => number >= 0;
console.log(isPositive2(-1));

const addition = (a, b, c) => a + b + c;
console.log(addition(100, 150, 250));

console.log(typeof (addition));


const a = -1;
const b = 2 + 2;
const c = -6;


if (a + b + c >= 0) {
    console.log('The number is above 0!');
} else {
    console.log('The number is beneath 0!');
}

const average1 = (10 + 10 + 10 + 30) / 4;
const average2 = (15 + 20 + 5 + 16) / 4;

const average3 = (10 + 13 + 7 + 10) / 4;
const average4 = (10 + 80 + 0 + 5) / 4;

console.log(average1, average2, average3, average4);

if (average1 > average2) {
    console.log('The average of Team 1 is higher than Team 2!');
} else if (average1 < average2) {
    console.log('The average of Team 2 is higher than Team 1!')
} else if (average1 === average2) {
    console.log('They have the same average!')
} else {
    console.log('Lol!')
}

function genderMix(men, woman) {
    console.log(men, woman);
    const gender = `There are ${men} men and ${woman} woman! `;
    return gender;
}
console.log(genderMix(10, 12));
console.log(genderMix);
genderMix(10, 12);


const calcAge2 = function (birthYear) {
    return 2050 - birthYear;
}
const age1 = calcAge2(1990);
const age2 = calcAge2(1995);
const age3 = calcAge2(1400)

console.log(age1, age2, age3);


const calcAge = birthYear => 2090 - birthYear;

const age4 = calcAge(1990);
console.log(age4);

//Function and IF-Clauses
const calcAvg = (a, b, c) => (a + b + c) / 3;

const avg = calcAvg(10, 40, 10);
console.log(avg);

const avg2 = calcAvg(10, 50, 5);
console.log(avg2);

if (avg > avg2 && avg >= 20) {
    console.log(`With the average score of ${avg}, Team 1 wins!`)
} else if (avg < avg2 && avg2 >= 20) {
    console.log(`With the average score of ${avg2}, Team 2 wins! `)
} else if (avg === avg2 && avg >= 20 && avg2 >= 20) {
    console.log(`With the score ${avg} both teams win!`)
} else {
    console.log('Nobody wins!')
}


//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
const age2 = calcAge1(2000);
const age3 = calcAge1(2001);
const age4 = calcAge1(2002);

console.log(age1, age2, age3, age4);

//function expression
const calcAge2 = function (birthYear1) {
    return 2070 - birthYear1;
}
const age5 = calcAge2(1991);
const age6 = calcAge2(2000);

console.log(age5, age6);


//Arrow function

const averageNumber = (a, b, c, d) => (a + b + c + d) / 4;

let average1 = averageNumber(1, 2, 3, 4);
console.log(average1);

average1 = averageNumber(2, 4, 6, 8);
console.log(average1);

average1 = averageNumber(10, 10, 10, 10);
console.log(average1);


//Function in other functions

const cutPieces = function (fruit) {
    return fruit * 8
}
function fruitProcessor(mangos, pineapple, kiwi) {
    const mangoPieces = cutPieces(mangos);
    const pineapplePieces = cutPieces(pineapple);
    const kiwiPieces = cutPieces(kiwi);
    const fruitSalad = `The fruitsalad has ${mangoPieces} Mango-Pieces, ${pineapplePieces} Pineapple-Pieces and ${kiwiPieces} Kiwi-Pieces!`
    return fruitSalad;
}
const salad1 = fruitProcessor(5, 2, 3);
const salad2 = fruitProcessor(1, 4, 2);
let salad3 = fruitProcessor(100, 22, 12);
console.log(salad1);
console.log(salad2);
console.log(salad3);

//Functions in other Functions 2

const cutPieces2 = vegetable => vegetable * 0.5; //Arrow

function vegetableProcessor(tomato, rice, potatoe) {
    const tomatoPieces = cutPieces2(tomato);
    const ricePieces = cutPieces2(rice);
    const potatoePieces = cutPieces2(potatoe);
    const veggieSalad = `The veggie-salad has ${tomatoPieces} tomato-pieces, ${ricePieces} rice-pieces and ${potatoePieces} potato-pieces!`;
    return veggieSalad;
} //Function declaration

const vSalad1 = vegetableProcessor(20, 10, 30);
const vSalad2 = vegetableProcessor(5, 2, 60);

console.log(vSalad1);
console.log(vSalad2);

const calcAge = year => 2020 - year;

const yearsUntilRetirement = function (birthYear, lastName, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} ${lastName} retires in ${retirement} years!`)
        return retirement;
    } else {
        console.log(`${firstName} ${lastName} has already retired!`)
        return 65 - age;
    }
}

const person1 = yearsUntilRetirement(2000, 'Bertram', 'Raymond');
const person2 = yearsUntilRetirement(1964, 'Bertram', 'Harry');
const person3 = yearsUntilRetirement(1933, 'Bertram', 'Jayden');

console.log(person1);
console.log(person2);
console.log(person3);


//Arrays
const friends = ['Michael', 'Steven', 'Bernd', 'Dennis'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Ray';
const ray = [firstName, 'Bertram', 2020 - 2000, 'student', friends];

console.log(ray);
console.log(ray.length)


//Array-Exercise
const calcAge = birthYear => 2020 - birthYear;

const years = [1990, 1967, 1980, 2002, 2010, 2000];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];

console.log(ages);


const friends = ['Michael', 'Steven', 'Bernd', 'Dennis'];
console.log(friends);

friends.push('Jay'); //adds elements to the end of an array
console.log(friends);

friends.unshift('John'); //adds elements to the beginning of an array
console.log(friends);

friends.pop(); //removes the last element of an array
console.log(friends);

friends.shift(); // removes the first element of an array
console.log(friends);

console.log(friends.indexOf('Bernd'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bernd'));

if (friends.includes('Bob')) {
    console.log('You have a friend called Bernd');
} else {
    console.log('Who is this?');
}


//Ternary Operator
const age = 23;
age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink juice or water');

const age2 = 65;
age2 >= 65 ? console.log('You are to old to work!') : console.log('Workbee!');

let gender = 'female';
gender = 'male'
gender === 'male' ? console.log('You are a man!') : console.log('You are a woman!');


const calcAge4 = birthyear => 2090 - birthyear;

const age10 = calcAge4(2000);
console.log(age10);

const calculator = (a, b, c, d, e) => (a + b + c + d + e);

let age11 = calculator(1, 2, 3, 4, 5);
console.log(age11)

const calcAgeOld = function (birthyear2) {
    return 2020 - birthyear2;
}

const old1 = calcAgeOld(1946);
const old2 = calcAgeOld(1933);

console.log(old1);
console.log(old2);

const friendsCalc = newfriend => newfriend;

const friends = ['Bob', 'Mike', 'Harvey', 'Dillion'];

const friend1 = friendsCalc(friends[0]);
const friend2 = friendsCalc(friends[1]);
const friend3 = friendsCalc(friends[2]);
const friend4 = friendsCalc(friends[friends.length - 1]);

console.log(friend1);
console.log(friend2);
console.log(friend3);
console.log(friend4);
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;//Ternary Operator 
}
//const calcTip1 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; //Arrow-Function 

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

