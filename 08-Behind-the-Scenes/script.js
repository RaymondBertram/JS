'use strict';

//Hoisting with variables
/*
console.log(me);
// console.log(job);
console.log(year);
//
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Hoisting with functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

//
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCard();
var numProducts = 10;

function deleteShoppingCard() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  //   console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  //   console.log(this);
};
calcAge(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const mathilda = {
  year: 2017,
};
mathilda.calcAge = jonas.calcAge; // method borrowing, get method from another object
mathilda.calcAge();

const f = jonas.calcAge;
f();

// var firstName = 'Mathilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    //Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}!`);
  },
};

jonas.greet();
jonas.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 4, 6);
*/
