// Sanity test to make sure javascript script is linked
// alert('Hello!')


// DOM Manipualtion
// 1) Selecting elements (node objects)
// 2) Applying the changes

// let header = document.querySelector("#title")
// header.innerHTML = "Introduction to DOM"

// Different ways to select elements
// 1) Select by id
let selectByID = document.querySelector("#header")
// 2) Select by class
let selectByClass = document.querySelector(".header")
// 3) Select by tag
let selectByTag = document.querySelector("p")
// 4) Select multiple lements with same class
let selectMultipleClass = document.querySelectorAll(".header")
// 5) Select multiple elements with same tag
let selectMultipleTag = document.querySelectorAll("p")


// Styling with DOM
let header = document.querySelector("#title") // -> one node object
header.style.color = 'yellow'
header.style.backgroundColor = 'green'
header.style.fontSize = "50px"
// console.log(header.style)

// Styling multiple elements
let pTags = document.querySelectorAll("p") // -> array of node object
// console.log(pTags)
for (let x of pTags) {
    x.style.backgroundColor = 'red'
    x.style.fontSize = '30px'
    x.style.color = 'yellow'
}
