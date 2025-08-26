// JavaScript Fundamentals - Part 1
// We'll write our code here!

/* let js = "amazing";
console.log(40 + 8 + 23 - 10);



console.log("=== DATA TYPES ===");

// Number (integers and decimals)
let age = 23;
console.log(age);
console.log(typeof age); // "number"

// String (text in quotes)
let firstName = "Jonas";
console.log(firstName);
console.log(typeof firstName); // "string"

// Boolean (true or false)
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // "boolean"

// Undefined (no value assigned yet)
let year;
console.log(year); // undefined
console.log(typeof year); // "undefined"

let dynamicVariable = 23;

dynamicVariable = "Now Im a dynamic text fahh";
console.log(dynamicVariable);   

dynamicVariable = true;
console.log(dynamicVariable); 

////////////////////////////////////
// Basic Operators - Math operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1992;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Substration:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

//Math with strings!
const firstName1 = "Jonas";
const lastName1 = 'Schmedtmann';
console.log(firstName1 + " " + lastName1);

console.log("Hello " + "World" + "!"); // "HelloWorld!"
console.log("I am " + 25 + " years old"); // "I am 25 years old"

////////////////////////////////////
// Assignment operators
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5; // 15
console.log("x starts as:", x);

x += 10; // Same as: x = x + 10 = 25
console.log("After x += 10:", x);

x *= 4; // Same as: x = x * 4 = 100
console.log("After x *= 4:", x);

x /= 2; // Same as: x = x / 2 = 50
console.log("After x /= 2:", x);

console.log("=== COMPARISION OPERATION");

console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log(ageJonas < 30);

console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);


const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older than Sarah:", isJonasOlder);

console.log("Complex comparison:");
console.log(now - 1991 > now - 2018); // Same as: ageJonas > ageSarah
console.log("test dtrginh", ageJonas > ageSarah);


console.log("=== OPERATOR PRECEDENCE ===");

//const now = 2037;
//const ageJonas = now - 1991;
//const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // true
// Math first: (2037 - 1991) > (2037 - 2018)
// Then compare: 46 > 19 = true

//let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */


/*
const firstName = "Jonas";
const birthYear = 1991;
const job = "teacher";
const year = 2037;

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old!`); // "I'm 46 years old!"
console.log(`Math works: ${2 + 3}`); // "Math works: 5"

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving`);
} else {
    yearsLeft = 18 - age;
    console.log(`Sarah is too young, Wait for another ${yearsLeft} years`);
}

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

// Test with money = 0 - what happens? */


// JavaScript Fundamentals - Hour 2

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(`Mark's BMI ${BMIMark.toFixed(2)}, John's BMI ${BMIJohn.toFixed(2)}`);
/* alternative way to calculate BMI
const BMI = mass / (height * height);
const BMI = mass / height ** 2;
let BMI;
let BMI = mass / height ** 2;
console.log("Mark's BMI:", BMI = massMark / (heightMark ** 2));
console.log("John's BMI:", BMI = massJohn / (heightJohn ** 2)); */

const markHigherBMI = (massMark / (heightMark ** 2)) > (massJohn / (heightJohn ** 2));
console.log("Is Mark's BMI higher than John 's?", markHigherBMI);

// Test Data 2
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark.toFixed(2)} is higher than John's BMI(${BMIJohn.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's BMI(${BMIMark.toFixed(2)})!`);
}

// Type Conversion and Coercion 

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(typeof NaN);
console.log(String(23), 23);
console.log(typeof String(23));

//type coercion (automatic conversion by JS engine itself)
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23"/"2");
console.log("23"*"2");

//tricky samples
let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

//Exercise 1
console.log("5" + 2); // it's 52, cuz string 5 then 2
console.log("5" - 2); //it's 3 cuz string will be number 
console.log("5" * 2); //it's 10, remember from earlier
console.log("5" / 2); //it's 2.5, earlier.

//explicit conversion
const userAge = "25";
const userScore = "95";
