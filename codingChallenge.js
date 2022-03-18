// JS Fundamentals - Part1
//Coding Challange #1
/*let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

console.log('Mark BMI 1', markBMI1, 'John BMI 1', johnBMI1);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

console.log('Mark BMI 2', markBMI2, 'John BMI 2', johnBMI2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);
*/

/*//Coding Challange  #2

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI) {
    console.log(`Mark BMI ${markBMI} is higher than John BMI ${johnBMI} `);
} else {
    console.log(`John BMI ${johnBMI} is higher than Mark BMI ${markBMI
        } `);

}*/

//Coding Challange  #3
// let DScore1 = 96;
// let DScore2 = 108;
// let DScore3 = 89;

// let KScore1 = 88;
// let KScore2 = 91;
// let KScore3 = 110;

// let averageD = (DScore1 + DScore2 + DScore3) / 3;
// let averageK = (KScore1 + KScore2 + KScore3) / 3;
// console.log(averageD, averageK);

// if (averageD > averageK) {
//     console.log(`Dolphins are the winners ${averageD}`);
// } else {
//     console.log(`Koalas are the winners ${averageK}`);
// }

//Bonus

let DScore1 = 97;
let DScore2 = 112;
let DScore3 = 101;

let KScore1 = 109;
let KScore2 = 95;
let KScore3 = 123;

let averageD = (DScore1 + DScore2 + DScore3) / 3;
let averageK = (KScore1 + KScore2 + KScore3) / 3;

if (averageD > averageK && averageD >= 100) {
    console.log(`Dolphins are the winners`);
} else if (averageD < averageK && averageK >= 100) {
    console.log(`Koalas are the winners`);
} else if (averageD === averageK && averageD >= 100 && averageK >= 100) {
    console.log(`Draw`);
} else {
    console.log(`There are no winners`);
}