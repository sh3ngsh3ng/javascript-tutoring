// Callback functions are functions that are passed as arguments to other functions
// They are called back by the other functions/

// // 1) Callback function
function sayHello() {
    console.log("Hello!")
}

function sayGoodbye() {
    console.log("Goodbye!")
}

function doSomething(func) {
    func()
}

doSomething(sayHello)
doSomething(sayGoodbye)


// 2) Callback functions with parameters
function callName(name) {
    console.log(name)
}

function callTutor(func) {
    func("Yong Sheng")
}

callTutor(callName)

// 3) Callback function with parameters and return values
function sayHelloAgain(name) {
    return "Hello " + name
}

function sayHi(func) {
    let greeting = func("Kern")
    console.log(greeting)
}

sayHi(sayHelloAgain)