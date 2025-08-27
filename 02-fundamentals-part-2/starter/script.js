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