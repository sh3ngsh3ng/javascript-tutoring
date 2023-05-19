document.querySelector("#inner-btn").addEventListener('click', function() {
    alert("Button is clicked!")
})

document.querySelector("#outer-btn").addEventListener('click', function() {
    // select for the parent element
    let parentDiv = document.querySelector("#parent-div")
    // insert button into the parent element
    

    // Method 1: innerHTML (side effects)
    // parentDiv.innerHTML += "<button>Click Me</button>"


    // Method 2: createElement + appendchild
    let el = document.createElement("button")
    el.innerHTML = "Click Me!"

    parentDiv.appendChild(el)

})