'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

console.log('Starting program');

function alpha() {
    console.log('alpha:start');
    beta();
    console.log('alpha:end');
}

function beta() {
    console.log('beta');
}

alpha();

function outerFunction() {
    console.log('Outer function start');
    innerFunction()
        console.log('Outer function end');
}

function innerFunction() {
    console.log('Inner function');
    console.trace();
}

outerFunction();

const globalVar = 'I am global ahh';

function anyFunction() {
    console.log(globalVar);
}

function myFunction() {
    const functionVar = 'I am function scoped';
    console.log(functionVar);
}

if (true) {
    let blockVar = 'I am block-scoped';
    const alsoBlockVar = 'Me too';
    var notBlockScoped = 'I leak out';

}

console.log(notBlockScoped);

const outer = 'global';

function demoScope() {
    const inner = 'function';
    if (true) {
        const blockConst = 'block';
        var functionVar = 'var-function-scoped';
        console.log(outer, inner, blockConst, functionVar);
    }
    console.log(outer, inner, functionVar);
}

demoScope();

const name = 'GlobalName';

function a() {
    const name = 'FunctionName';
    function b() {
        console.log(name);
    }
    b();
}

a();

console.log(varX);

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX);
console.log(letX);
console.log(constX);

console.log(addDec1(2, 3));

function addDec1(a, b) {
    return a + b;
}
const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

console.log(addDec1(2, 3));
console.log(addArrow(2, 3))
console.log(addExpr(2, 3));

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
console.log('Fetching data from', apiUrl);