// Functions are first class citizens in Javascript
// They can be treated like any other value in Javascript

// 1) Assigned to a variable
// 2) Passed as arguments to functions
// 3) Returned from functions


// An example of first class citizen in JAvascript
// -> E.g. Integer

// (1)
let x = 5

// (2)
function passIntoArguments(arg) {
    return arg
}

passIntoArguments(5)

// (3)
function returnInteger() {
    return 5
}




// FUNCTIONS

// 1) Assigning functions to variables
function sayHello() {
    console.log("Hello!")
}

let doSomething = sayHello

doSomething()



// 2) Passed as arguments to functions
function sayHelloAgain(func) {
    func()
}

sayHelloAgain(sayHello)


// 3) Returned from functions

// example 1
function outerFunc() {
    function innerFunc() {
        // console.log("Hello!! from inner function")
        return "Hello!! from inner function"
    }
    return innerFunc
}

console.log(outerFunc()())

// example 2
function callBackFunc() {
    return "This is from callBackFunc"
}

function doSomething(func) {
    return func
}

console.log(doSomething(callBackFunc))

