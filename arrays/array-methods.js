// Different ways to initialize arrays
// let arr1 = new Array()
// let arr2 = new Array(1, 2, 3, 4, 5)

// let arr3 = [];


// let arr4 = [1, 2, "string", { "key": "value" }, [4, 5, 6]]

// Accessing Arrays by index
// console.log(arr4[2])

// Iterating through arrays
// for (let i = 0; i < arr4.length; i++) {
//     console.log(arr4[i])
// }

// for (let x of arr4) { // x = element of array
//     console.log("for of loop => ", x)
// }

// Property of array
// Length
// console.log(arr4.length)


// Array Methods
let arr = [1, 2, 3, 4, 5]
// let copyArr = arr.slice() // returns a copy

// - arrays are mutable
// arr[2] = 3.3
// console.log(arr)


// 1) array.push(element)
// adds element to the end of the array
// arr.push(6)
// arr.push("Seven")
// console.log(arr)


// 2) array.pop()
// removes the last element from the array
// let seven = arr.pop()
// console.log("popped out => ", seven)
// console.log(arr)

// 3) array.shift()
// removes the first element from the array
// let removedElement = arr.shift()
// console.log(removedElement, arr)

// 4) array.unshift()
// adds element to the beginning of the array
// arr.unshift(0)
// console.log(arr)

// 5) array.slice(start, end)
// returns a copy of the array
// let arr2 = arr.slice(1, 4)
// console.log("arr2 => ", arr2)


// 6) array.splice(start, howMany, element1, element2...)
// removes elements from an array, and if necessary, inserts new element in their place
let fruits = ["Apple", "Banana", "Coconut", "Dragonfruit", "Orange", "Grape"]
// let removedFruit = fruits.splice(2, 2, "Cucumber", "Pear")
// console.log("This fruit is removed => ", removedFruit)
// console.log(fruits)



// 7) includes, indexOf, join, reverse

// Array destructuring
let x = [1, 2, 3, 4, 5]
let [a, b, c, d, e] = x
console.log(a, b, c, d, e)
