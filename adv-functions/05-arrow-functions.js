// Arrow function is another way to write anonymous functions in Javascript


// 1) Anonymous function
let anonymousSayHello = function () {
    console.log("This is anonymous function")
}

let arrowSayHello = () => {
    console.log("This is an arrow function")
    console.log("Hahahahahah")
}

arrowSayHello()


// 2) Arrow functions with multiple parameters
let addTwo = (x, y) => {
    // fucntion body
    return x + y
}

console.log(addTwo(5, 10))

// 3) Arrow functions with one parameter
let printKern = name => {
    console.log(name)
}


// 4) Arrow function with one parameter and one statement
let printName = name => "Hi " + name

console.log(printName("Ben"))



// E.g.
function transformTheString(str, func) {
    let message = func(str)
    return message
}

// 1) Passing in named function
// function transformCallback(str) {
//     return str.toUpperCase()
// }

// console.log(transformTheString("hello world", transformCallback))


// 2) Anonymous function
// console.log(
//     transformTheString("hello world", function () {
//         return str.toUpperCase()
//     })
// )

// 3) Anonymous arrow function
// console.log(
//     transformTheString("hello world", (str) => str.toUpperCase())
// )