// Adding Interaction
let btn = document.querySelector("#my-button")
// First parameter: type of event
// Second parameter: callback function
function buttonClicked() {
    alert("Function is working, button clicked")
}

// btn.addEventListener('click', buttonClicked)

btn.addEventListener('click', function() {
    let header = document.querySelector("#title")
    header.style.backgroundColor = 'yellow'
})

// Event Driven Programming (EDP) is a programming paradigm in which the flow of the program is dtermined
// by events such as user actions (mouse clicks, key presses..)
// i.e. fucntion only execute when an event occurs

// What are events can we listen to?
// 1) click
// 2) mouseover
// 3) mouseout
// 4) mousemove
// .....

// Mouseover
let targetTag = document.querySelector("#text")
targetTag.addEventListener('mouseover', function() {
    alert('U are hovering over me!')
})
