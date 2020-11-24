
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






