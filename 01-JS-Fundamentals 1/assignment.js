/*
//BMI
const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

const bodyMassIndexMark1 = (weightMark) / (heightMark ** 2);
console.log(bodyMassIndexMark1) //BMI Mark

const bodyMassIndexJohn1 = (weightJohn) / (heightJohn ** 2)
console.log(bodyMassIndexJohn1); //BMI John

markHigherBMI1 = (bodyMassIndexMark1 > bodyMassIndexJohn1);
console.log(markHigherBMI1);


//if-else BMI
if (bodyMassIndexJohn1 < bodyMassIndexMark1) {
    console.log(`Marks BMI is (${bodyMassIndexMark1}) and higher than John's!(${bodyMassIndexJohn1})`);
} else {
    console.log(`John's BMI is ${bodyMassIndexJohn1}  higher than Mark's(${bodyMassIndexMark1})`);
}










const weightMark1 = 95;
const heightMark1 = 1.88;

const weightJohn1 = 85;
const heightJohn1 = 1.76;

const bodyMassIndexMark2 = (weightMark1) / (heightMark1 ** 2);

const bodyMassIndexJohn2 = (weightJohn1) / (heightJohn1 ** 2);

console.log(bodyMassIndexMark2);
console.log(bodyMassIndexJohn2);

markHigherBMI2 = (bodyMassIndexMark2 > bodyMassIndexJohn2);
console.log(markHigherBMI2)

if (bodyMassIndexJohn2 < bodyMassIndexMark2) {
    console.log(`Marks BMI is (${bodyMassIndexMark2}) and higher than John's!(${bodyMassIndexJohn2})`);
} else {
    console.log(`John's BMI is (${bodyMassIndexJohn2}) higher than Mark's(${bodyMassIndexMark2})`);

}


//Coding-Challenge 3
//1
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas)

//2
if (averageKoalas > averageDolphins) {
    console.log('Koalas win the competion!');
} else if (averageDolphins > averageKoalas) {
    console.log('Dolphins win the competition!');
} else if (averageKoalas === averageDolphins) {
    console.log('Both win the competition')
}

//Bonus 1 (3)
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);


if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins wins the Trophy!')
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the Trophy!')
} else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the competition!')
} else {
    console.log('No one wins the trophy!')
}
*/

const bill = 400;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);


