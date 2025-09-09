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

