console.log(`Fundamentals Part 2: Functions ready!`);

console.log(`=== FUNCTIONS ===`);

function logger() {
    console.log("My name is Jonas");
}  

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log(`==========`);
const juice1 = fruitProcessor(5, 0);
console.log(juice1);
const juice2 = fruitProcessor(2, 4);
console.log(juice2);
const juice3 = fruitProcessor(3, 2);
console.log(juice3);

console.log(`=== FUNCTION DECLARATIONS VS EXPRESSIONS ===`);
function greetStudent(studentName) {
    console.log(studentName);
    const name = `Hello ${studentName}, welcome to JavaScript.`;
    return name;
}

const greet1 = greetStudent(`Alexander`);
console.log(greet1);

// Function expression
const calcAge = function(birthYear) {
    return 2037 - birthYear;
};

const age1 = calcAge(1991);
console.log(age1);

function calcAge1(birthYear, currentYear) {
    // Parameters
    const age = currentYear - birthYear;
    return age;
}

const myAge = calcAge(1991, 2037); // Arguments
const herAge = calcAge(2005, 2037);

console.log(`I am ${myAge} years old`);
console.log(`She is ${herAge} years old`);

// Return Values and Scope

function calcAge2(birthYear) {
    return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
const age = calcAge2(birthYear); //another funtion after another!
const retirement = 65 - age;

if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired 🎉`;
    }
}

console.log(yearsUntilRetirement(1991, `Alexander`));
console.log(yearsUntilRetirement(1950, `Mark`));


//Global scope and local scope
const globalVar = `This is a global variable`;

function testScope() {
    // Function scope
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
//console.log(localVar); // Error: localVar is not defined
console.log(globalVar); // This works

const userName = "Alexander"; // Global variable

/* function createWelcomeMessage(user) {
    const message = `Welcome back, ${user}!`;
    const timestamp = new Date().toLocaleTimeString();
    return `${message} (Current time: ${timestamp})`; // Using local variable
}
console.log(createWelcomeMessage(user)); // Passing global variable as argument */


// Coding Challenge #1
console.log("======Challenge 1======");
// Function to calculate average score
function calcAverage(score1, score2, score3) {
    const average = (score1 + score2 + score3) / 3;
    console.log(average);
    return average;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No team has won...`
    }
}


// Test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27); 
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Array - Creation and Access
console.log("=== ARRAYS ===");
const grades = [85, 92, 78, 96, 88];
console.log(grades);

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const mixed = ["Jonas", 27, true, friends];
console.log(mixed);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

const calcAge3 = function(birthYear) {
    return 2025 - birthYear;
};

const ages = [calcAge3(2000), calcAge3(1995), calcAge3(1991)];
console.log(ages);
ages[1] - calcAge3(1950);
console.log(ages);

// Array - Methods
const friends1 = ["Michael", "Steven", "Peter"];
const newLength = friends1.push("Jay");
console.log(friends1);
console.log(newLength);

friends1.unshift("John");
console.log(friends1);
console.log(newLength);

const popped = friends1.pop();
console.log(popped);
console.log(friends1);

const shifted = friends1.shift();
console.log(shifted);
console.log(friends1);

//pop()
//shift()

console.log(friends1.indexOf("Michael"));
console.log(friends1.indexOf("John"));

console.log(friends1.includes("Michael"));
console.log(friends1.includes("John"));

// Array Iteration - for loop
console.log("=== ARRAY ITERATION - for loop ===");
const friends2 = ["Michael", "Steven", "Peter"];

// for loop
for (let i = 0; i < friends2.length; i++) {
    console.log(`Hello ${friends2[i]}`);
}

const years1 = [1991, 2007, 1969, 2020];
const ages1 = [];

for (let i = 0; i < years1.length; i++) {
    ages1.push(2025 - years1[i]);
}
console.log(ages1);

// foreach loop
console.log("=== ARRAY ITERATION - foreach loop ===");
friends2.forEach(function(friend, index) {
    console.log(`${index}: ${friend}`);
});

// Arrow function
friends2.forEach((friend, index) => {
console.log(`Friend ${index + 1}: ${friend}`);
});

// Example: Calculate total grades
const grades1 = [85, 92, 78, 96, 88, 74];
let total = 0;

// calculate total using for loop
for (let i = 0; i < grades1.length; i++) {
total += grades1[i];
}
const average1 = total / grades1.length;
console.log(`Average grade (for loop): ${average1.toFixed(2)}`);

// Count passing grades using forEach
let passingCount = 0;
grades1.forEach((grade) => {
    if (grade >= 70) passingCount++;
});
console.log(`${passingCount} out of ${grades1.length} students passed`);

// Coding Challenge #2
console.log("======Challenge 2======");

const grades2 = [78, 85, 92, 67, 88, 95, 73, 82];

//FUnction to calculate average
function calculateAverage(grades2) {
    let sum = 0;
    for (let i = 0; i < grades2.length; i++) {
        sum += grades2[i];
    }
    return sum / grades2.length;
}

// Function to find highest grade
function findHighestGrade(grades2) {
let highest = grades2[0];
    for (let i = 1; i < grades2.length; i++) {
        if (grades2[i] > highest) {
            highest = grades2[i];
        }
    }
    return highest;
}

function findLowestGrade(grades2) {
let lowest = grades2[0];
    for (let i = 1; i < grades2.length; i++) {
        if (grades2[i] < lowest) {
            lowest = grades2[i];
        }
    }
    return lowest;
}

function countPassing(grades2, passingGrade) {
    let count = 0;
    for (let i = 0; i < grades2.length; i++) {
        if (grades2[i] >= passingGrade) {
            count++;
        }
    }
    return count;
}

// Generate report
const average0 = calculateAverage(grades2);
const highestGrade = findHighestGrade(grades2);
const lowestGrade = findLowestGrade(grades2);
const passingCount1 = countPassing(grades2, 70);

console.log("Grade Report:");
console.log(`Average Grade: ${average0.toFixed(2)}`);
console.log(`Highest Grade: ${highestGrade}`);
console.log(`Lowest Grade: ${lowestGrade}`);
console.log(`Number of Passing Students: ${passingCount1} out of ${grades2.length}`);

// JavaScript Fundamentals Part 2 - Hour 2


// The Array Problem
console.log("======The Array Problem======");
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

console.log(jonasArray[0]);
console.log(jonasArray[1]);
console.log(jonasArray[2]);
console.log(jonasArray[3]);
console.log(jonasArray[4]);

