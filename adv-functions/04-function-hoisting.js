// Hoisting is a Javascript mechanism where the variables (?) and function declarations
// are moved to the top of their scope before execution



// 1) Function declarations are hoisted
sayHello()

function sayHello() {
    console.log("Hello!!!!")
}


// 2) Function expressions are not hoisted (anonymous function)
sayHello2()

let sayHello2 = function () {
    console.log("Hello!")
}
