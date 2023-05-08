// Anonymous functiosn are functions that are not bound to an identifier
// i.e. they don't have function name


// Anonymous functions
// - have to store a function in a variable

function sayHelloNormal() {
    console.log("Normal Hello")
}


let sayHello = function () {
    console.log("Anonymous function hello!")
}

sayHello()