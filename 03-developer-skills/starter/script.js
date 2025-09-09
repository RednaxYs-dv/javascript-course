// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Professional Development Environment Setup

console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// messy code
const messyExample = function (name, age) {
    if (age >= 18) {
        return "Hello " + name + ", you are an adult";
    } else {
        return "Hello " + name + ", you are a minor";
    }
};
console.log("Current messy code example:",
messyExample("John", 25));

console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// Extension Installation Test

function testExtensions() {
    const extensionTests = [
        {name: "Prettier", status: "installed", purpose: "code formatting" },
        {name: "Live Server", status: "installed", purpose: "auto refresh" },
        {
            name: "Auto Rename Tag",
            status: "installed",
            purpose: "HTML efficiency",
        },
    ];

    return extensionTests;
}

const extensionStatus = testExtensions();
console.log("Extension installation status:", extensionStatus);

// Prettier COnfiguration Test

const prettierTest = {
    firstName: "Sarah",
    lastName: "Johnson",
    skills: ["JavaScript", "React", "Node.js"],
    isActive: true,
};

const messyFunction = function (x, y, z) {
    if (x > 0 && y > 0) {
        return x + y + z;
    } else {
        return 0;
    }
};

const messyArrow = (items) => {
    return items.map((item) => {
        return item.toUpperCase();
    });
};

console.log("Before Prettier formatting - this code works but looks unprofessional");

// bad formatting 1
const studentTest = {
    firstName: "Alexander",
    skills: ["HTML", "CSS", "JavaScript"],
    experience: "beginner",
    goals: ["become-developer", "build-projects"],
};

const testFunc = function (data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
};

// Test 1: Basic live reload
let liveServerTest = "Initial message - change #1";
console.log("Live Server Test:", liveServerTest);

// Test 2: Time-based updates
const timeStamp = new 
Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live server update #${updateCount} at ${timeStamp}`);

// Test 3: Function testing
function demonstrateLiveReload() {
    const randomColor = ["red", "blue", "green", "purple", "orange"][
        Math.floor(Math.random() * 5)
    ];
    const message = `Live Server rocks! Random color: ${randomColor}`;

    console.log(message);
    return message;
}

demonstrateLiveReload();

// SE: Add the function and test live reload
function showCurrentTime() {
    const now = new Date().toLocaleTimeString();
    console.log("Current Time:", now);
    return now;
}

showCurrentTime();

// Code Snippets Testing 1

// Type 'cl' then press Tab - is should expand to console.log();
console.log("Testing snippet functionality - cl + Tab created this line!!!");

//Type "func" then press Tab - it should expand to a function template
function testSnippets() {
    console.log("Function created with snippet - func + Tab!!!");
    return "Snippets working perfectly!";
}

testSnippets();

// Type 'arrow' then press Tab - it should expand to an arrow function template
const snippetTest = (message) => {
    console.log(`Arrow function from snippet: ${message}`);
    return message;
};

snippetTest("Arrow snippet working!!!");

console.log("=== SETUP COMPLETE ===");

// Environment Setup Verification

console.log("🎉 Professional Development Environment Complete!");
console.log("✅ Prettier: Automatic code formatting");
console.log("✅ Live Server: Automatic browser refresh");
console.log("✅ Snippets: Fast code generation");
console.log("✅ Extensions: Enhanced productivity");
console.log("Ready for professional JavaScript development!");

// Calculate time savings
function calculateTimeSavings() {
    const dailyConsoleLogs = 50;
    const keystrokesPerLog = 11;
    const dailySavings = dailyConsoleLogs * keystrokesPerLog; // 11 keystrokes saved per log
    const monthlySavings = dailySavings * 22; // Assuming 250 working days

    console.log(`Daily keystrokes saved: ${dailySavings}`);
    console.log(`Monthly keystrokes saved: ${monthlySavings}`);

    return { daily: dailySavings, monthly: monthlySavings };
}
calculateTimeSavings();

console.log("🚀 Happy Coding!");
console.log("END OF PREVIEW 01 - SETUP YOUR DEV ENVIRONMENT");


// Developer Skills Hour 2 - Learning How to Code & Problem-Solving Framework
"use strict";

console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

console.log("Key insight: Professional developers think systematically, not just code");
console.log("Goal: Transform from beginner to professional problem-solver");

////////////////////////////////////
// The 4-Step Problem-Solving Framework

/*
STEP 1: UNDERSTAND THE PROBLEM
- Ask the right questions until 100% clear
- Key questions:
  * What exactly needs to be accomplished?
  * What are the inputs and expected outputs?
  * What are the edge cases and constraints?
  * Are there any special requirements?
*/

/*
STEP 2: DIVIDE AND CONQUER  
- Break big problem into small sub-problems
- Strategy:
  * Identify the main components
  * Find dependencies between components
  * Order sub-problems logically
  * Ensure each piece is solvable independently
*/

/*
STEP 3: RESEARCH SOLUTIONS
- Find answers for sub-problems you cannot solve
- Best sources: MDN Documentation, Stack Overflow, Google
- Research tips: Be specific, understand before implementing
*/

/*
STEP 4: IMPLEMENT AND TEST
- Code the solution step by step with testing
- Start simple, test each piece, combine gradually
*/

console.log("4-Step Framework: Understand → Divide → Research → Implement");

// Practical Problem-Solving Example 1

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    
    for (let i = 1; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperatures);
console.log("Temperature Amplitude:", amplitude);

// Practical Problem-Solving Example 2 - Handling Multiple Arrays & Debugging

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  "Problem-solving framework applied successfully to extended challenge!"
);

console.log("🎯 Framework mastered - ready for independent problem solving!");

console.log("END OF PREVIEW 02 - DEVELOPER MINDSET & PROBLEM SOLVING");

// Developer Skills Hour 3 - From Problem to Code: Mastering the Coding Process
"use strict";

console.log("=== HOUR 3: FROM PROBLEM TO CODE ===");

/*
Random Googling vs Strategic Research:

RANDOM GOOGLING (Beginner Approach):
- Search only when completely stuck
- Use vague search terms like "javascript array problem"
- Copy-paste first solution found
- Don't understand what the code does
- Same problems happen repeatedly

STRATEGIC RESEARCH (Professional Approach):
- Research proactively to understand concepts
- Use specific, targeted search terms
- Evaluate multiple solutions
- Understand solutions before implementing
- Build knowledge for future problems
*/

console.log(
  "Goal: Master research and debugging like a professional developer"
);
console.log(
  "Strategic research builds lasting knowledge, not just quick fixes"
);

// PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

/*
RESEARCH CHALLENGE: Find Maximum Value in Array
Search progression:
1. "javascript maximum value array"
2. "javascript Math.max array"  
3. "javascript Math.max spread operator array"
4. "Math.max MDN javascript"
*/

function demonstrateArrayMax(numbers) {
    // Method 1 - Using Math.max with spread operator
    const method1 = Math.max(...numbers);

    // Method 2 - Using a loop
    let method2 = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > method2) method2 = numbers[i];
    }

    // Method 3 - Using reduce method
    const method3 = numbers.reduce((max, curr) => (curr > max ? curr : max), numbers[0]);

    return {method1, method2, method3};
}

// Test the function 1
const testNumbers1 = [3, 5, 7, 2, 8];
const maxResults1 = demonstrateArrayMax(testNumbers1);
console.log("Multiple approaches from research:", maxResults1);

// STACK OVERFLOW BEST PRACTICES
function reverseStringMethods(str) {
    // Method 1 - Using built-in methods
    const method1 = str.split("").reverse().join("");

    // Method 2 - Using a loop
    let method2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        method2 += str[i];
    }

    // Method 3 - Using recursion
   const method3 = [...str].reverse().join("");
    
    return {method1, method2, method3};
}

// Test Stack Overflow research
const reverseResults = reverseStringMethods("JavaScript");
console.log("String reversal methods from research:", reverseResults);

// MDN DOCUMENTATION BEST PRACTICES
function demonstrateConcat() {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = [7, 8, 9];

    const simple = array1.concat(array2);
    const multiple = array1.concat(array2, array3);

    console.log("Original array1 unchanged:", array1);
    return {simple, multiple};
}

const concatResults = demonstrateConcat();
console.log("Array concatenation results from MDN research:", concatResults);

// SYSTEMATIC DEBUGGING APPROACH
function calculateAverageScore(scores) {
    let total;

    for (let i = 0; i <= scores.length; i++) { // < not <=
        total += scores[i];
    }
    return total / (scores.length + 1); // scores.length not (scores.length + 1)

}

// Debugging the function
const testScores = [85, 90, 78, 92];
const buggyResult = calculateAverageScore(testScores);
console.log("Average Score (with bug):", buggyResult);

// BROWSER DEVELOPER TOOLS MASTERY
function demonstrateConsoleDebugging(data) {
    console.group("Debugging demonstrateConsoleDebugging");

    console.log("Input data:", data);

    if (typeof data != "object") {
        console.warn("Warning: Expected object, got", typeof data);
}

console.table(data);

    console.groupEnd();
    return Array.isArray(data) ? data.length : Object.keys(data).length;  
}

const arrayData = [1, 2, 3, 4, 5];
const objectData = {name: "Alice", age: 30, city: "Wonderland"};

demonstrateConsoleDebugging(arrayData);
demonstrateConsoleDebugging(objectData);

console.log("=== CODING PROCESS COMPLETE ===");

console.log("🎯 Mastered research and debugging like a pro developer!");

// DEBUGGER STATEMENT DEMO
function stepThroughDebugging(numbers) {
    debugger; // Set breakpoint here
    let sum = 0;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    console.log(`Processing index ${i}: value = ${currentNumber}`);

    if (typeof currentNumber === "number") {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }

  const average = count > 0 ? sum / count : 0;
  console.log("Final results:", { sum, count, average });

  return average;
}

// Test debugging function - open dev tools to see debugger in action
const mixedNumbers = [10, 20, "error", 30, null, 40];
const debugResult = stepThroughDebugging(mixedNumbers);
console.log("Debug session result:", debugResult);

// SYSTEMATIC CODING PROCESS SUMMARY

function calculateAverageScoreFixed(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        console.error("Invalid input: Expected non-empty array");
        return 0;
    }

    let total = 0;
    let count = 0;

    for (let i = 0; i < scores.length; i++) { // Fixed loop condition
        if (typeof scores[i] === "number") {
            total += scores[i];
            count++;
        } else {
            console.warn(`Skipping non-number at index ${i}:`, scores[i]);
        }
    }

    return count > 0 ? total / count : 0; // Only divide by count of numbers
}

const fixedResult = calculateAverageScoreFixed(testScores);
console.log("Average Score (fixed):", fixedResult);

// Comprehensive debugging verification
console.group("Debugging Verification Tests");

// Test 1 - Normal case
const normalScores = [85, 92, 78, 96, 88];
const normalResult = calculateAverageScoreFixed(normalScores);
console.log("Normal case result:", normalResult);

// Test 2 - Edge case with invalid data
const mixedScores = [85, "invalid", 92, null, 78];
const mixedResult = calculateAverageScoreFixed(mixedScores);
console.log("Mixed data result:", mixedResult);

// Test 3 - Error case with invalid input
const errorResult = calculateAverageScoreFixed("not an array");
console.log("Error case result:", errorResult);

// Test 4 - Edge case with empty array
const emptyResult = calculateAverageScoreFixed([]);
console.log("Empty array result:", emptyResult);

console.groupEnd();

console.log("Systematic debugging process successfully applied!");
console.log(
  "All bugs identified, isolated, investigated, fixed, and prevented"
);

console.log("🚀 Ready for independent coding with a professional process!");
console.log("END OF PREVIEW 03 - FROM PROBLEM TO CODE");