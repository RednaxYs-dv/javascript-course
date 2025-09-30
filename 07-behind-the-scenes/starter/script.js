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

'use strict';


// console.log(title); // Uncomment to test: TDZ with let
let title = 'Behind the Scenes';

function outer1() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label); // expect 'outer'
  }
  inner();
}
outer1();

function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one(); // expect 'stack: two'

// Hour 2 starts here

const person = {
    name: 'Ellen',
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    },
};

//person.greet(); // expect "Hello, I'm Ellen"

const anotherPerson = { name: 'Rendays' };
anotherPerson.greet = person.greet;
anotherPerson.greet(); // expect "Hello, I'm Rendays"

/* const greetFunction = person.greet;
greetFunction(); */// expect "Hello, I'm undefined" or error in strict mode

const obj = {
    name: 'Object',

    regularMethod: function() {
        console.log('Regular:', this.name);
    },
    arrowMethod: () => {
        console.log('Arrow:', this.name);
    }
};

obj.regularMethod(); // expect "Regular: Object"
obj.arrowMethod(); // expect "Arrow: undefined" or error in strict mode

const quiz = {
    name: 'Quiz Object',
    regularMethod() {
        console.log('Regular:', this.name);
    },
    arrowMethod: () => {
        console.log('Arrow:', this.name);
    }
};
quiz.regularMethod(); // expect "Regular: Quiz Object"
quiz.arrowMethod(); // expect "Arrow: undefined" or error in strict mode

const timer = {
    name: 'Timer',
// Old school approach using regular function
    start: function() {
        console.log(`${this.name} starting...`);
        const self = this;

        setTimeout(function () {
            console.log(`${ self.name} finished!`);
        }, 1000);
    },
// Modern approach using arrow function
    startModern: function() {
        console.log(`${this.name} starting modern...`);
        
        setTimeout(() => {
            console.log(`${this.name} finished modern!`);
        }, 1500);
    },
};

timer.start();
timer.startModern();

const user = {
    name: 'Yuzuha',
    hobbies: ['reading', 'pranking', 'goofying around'],

    /* printHobbiesBad: () => {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }, */

    printHobbiesGood() {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);
        });
    },
};

user.printHobbiesGood();
// user.printHobbiesBad(); //error expected

const functionTypes = {
    regularFunction: function() {
        console.log('Arguments length:', arguments.length);
        console.log('First argument:', arguments[0]);
    },

    arrowFunction: () => {
        console.log('Arrow function called');
    },

    modernFunction: (...args) => {
        console.log('Args length:', args.length);
        console.log('First arg:', args[0]);
    },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');

const userCard = {
    name: 'Sarah',
    setupEvents() {
        console.log('Setting up events for', this.name);
    },
};

userCard.setupEvents();

// Array
const calculator = {
    numbers: [1, 2, 3, 4, 5],
    multiplier: 2, 

    processNumbers() {
        return this.numbers.map(num => num * this.multiplier);
    },
};

console.log('Processed numbers:', calculator.processNumbers());

const delayedGreeter = {
    name: 'Ellen Joe',

    startCountdown: function () {
        console.log('Starting countdown...');
        
        setTimeout(() => {
            console.log(`Hello, I love ${this.name}`);
        }, 2000);
    },
};

delayedGreeter.startCountdown();