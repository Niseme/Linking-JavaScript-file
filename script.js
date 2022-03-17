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