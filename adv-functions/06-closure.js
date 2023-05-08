// Closures: A function that has access to the parent scope, even after the scope has closed

// Example 1
// let funcArr = []
// for (let i = 0; i < 10; i++) {
//     funcArr.push(
//         function () {
//             return i
//         }
//     )
// }
// console.log(funcArr[0]())
// console.log(funcArr[1]())
// console.log(funcArr[8]())

// Example 2
let fruitFunc = []
let fruits = ['Apple', 'Banana', 'Orange']

for (let i = 0; i < 3; i++) {
    fruitFunc.push(
        function () {
            return fruits[i]
        }
    )
}
console.log(fruitFunc[0]())
console.log(fruitFunc[1]())
console.log(fruitFunc[2]())


// Recap on scoping
// {
//     let x = 0
//     {
//         let y = 2
//     }
//     console.log(x)
//     console.log(y)
// }


// Example 3
function outerFunction() {
    let x = 9
    function innerFunction() {
        return x
    }
    return innerFunction
}

console.log(outerFunction()())