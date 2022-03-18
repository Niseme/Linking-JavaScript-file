// 10. Values and Variables
/*let js = 'amazing';
//if (js === 'amazing') alert('JS is fun');
console.log(40 + 6 + 9);

let firstName = 'Jonas';
console.log(firstName)*/

//12. Data types
/*let javascriptisfun = true;
console.log(javascriptisfun);

console.log(typeof true);
console.log(typeof javascriptisfun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptisfun = 'YES!';
console.log(javascriptisfun);
console.log(typeof javascriptisfun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);*/

/*//13.let, const and var
//mutable variable
let age = 30;
age = 31;

//immutable variable
const birthYear = 1989;
//birthYear = 1990;

//const job; //cannot be like that with const, can with let
//const - kai nesikeicia, let - kai keiciasi, var - senasis metodas

var job = 'programer';
job = 'teacher'
console.log(job);

lastName = 'Sem'; //creates in glogal scope, don't do that
console.log(lastName);*/

/*//14.Basic Operators

//Math operators
const now = 2022;
const ageJonas = now - 1989;
const ageSarah = now - 2019;
console.log(ageJonas, ageSarah);

//2 ** 3 means 2 ^ 3
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; //x = x + 10
x *= 4;
x++; //x = x + 1
x--;
console.log(x);

//Comparison operators

console.log(ageJonas > ageSarah); // > , < , >=, <=
console.log(ageJonas >= 33);

const isFullAge = ageSarah >= 18;

console.log(now - 1989 > now - 2019);*/

/*//15.Operator Precedence
const now = 2022;
const ageJonas = now - 1989;
const ageSarah = now - 2019;

console.log(now - 1989 > now - 2019);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);*/

/*//17.Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2022;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('String \n\ multiple \n\ lines');
console.log(`String
multiple
 lines`);*/

/*//18.Taking Decisions: if / else Statements

const age = 15;

if (age >= 18) {
    console.log(`Sarah can drive🚗`);
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah cannot drive 🚗, she has to wait for ${yearsLeft} years`);
}

const birthYear = 2020;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

/*//20. Type Conversion and Coercion

//type conversion
const inputYear = '1991'
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23));

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 7);

let n = '1' + 1;
n = n - 1;
console.log(n);*/

/*//21.Truthy and Falsy Values

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend at all");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log("height is defined");
} else {
    console.log("height is undefined");
}*/

/*//22.Equality Operators: == vs. ===
const age = 18;
if (age === 18) console.log("you are 18 years old"); //strict

if (age == 18) console.log("you are 18 years old");//loose


const favorite = prompt("what is your favorite number?")
console.log(favorite);
console.log(typeof favorite);

if (favorite == 27) { console.log("27 is a cool number"); }

const fav = Number(prompt("what is your favorite number?"))
if (fav === 27) {
    console.log("27 is a cool number");
} else if (fav === 7) {
    console.log("7 is a cool number");
} else if (fav === 8) {
    console.log("8 is a cool number");
}*/

//23.Boolean Logic
//24.Logical Operators
const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = false;
console.log(hasDrivingLicense && hasGoodVision && isTired);


if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive!');
}

