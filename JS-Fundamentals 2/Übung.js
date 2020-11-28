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
*/

 const hasDriversLicense = true; //A
 const hasGoodVision = true; //B 
 const isTired = false;  //C
console.log(hasDriversLicense&&hasGoodVision); 
console.log(hasDriversLicense||hasGoodVision); 

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








