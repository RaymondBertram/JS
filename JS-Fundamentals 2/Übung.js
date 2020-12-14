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
*/

//Function and IF-Clauses 

