// JS Fundamentals - Part1
//Coding Chalange #1
let markMass1 = 78;
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

