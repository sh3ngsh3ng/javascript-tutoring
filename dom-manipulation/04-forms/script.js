// Radio Buttons
// Method 1: selecting by class
// document.querySelector("#btn").addEventListener('click', function () {
//     // select all radio buttons
//     let allRadioBtns = document.querySelectorAll('.gender')

//     // loop through all radiobtns
//     for (let radioBtn of allRadioBtns) {

//         // radioBtn refers to a nodeObj (each of the radio button)
//         if (radioBtn.checked) {
//             console.log(radioBtn.value)
//         }
//     }
// })

// Method 2: selecting by pseudo check css 
// document.querySelector("#btn").addEventListener('click', function() {
//     let selectedRadioBtn = document.querySelector("input:checked")
//     console.log(selectedRadioBtn.value)
// })


// Method 3: selecting by name attribute
// document.querySelector("#btn").addEventListener('click', function() {
//     let allRadioBtns = document.querySelectorAll("[name='gender']")
//     console.log(allRadioBtns)
//     // filtering
// })


// CHECK BOXES
// document.querySelector("#btn").addEventListener('click', function() {
//     let checkBoxes = document.querySelectorAll('.hobby')
//     let results = []
//     for (let box of checkBoxes) {
//         if (box.checked) {
//             results.push(box.value)
//         }
//     }

//     console.log("results =>", results)
// })


// Dropdown
// document.querySelector("#btn").addEventListener('click', function() {
//     let selectedCountry = document.querySelector("#dropdown").value
//     console.log(selectedCountry)
// })

// Textarea
document.querySelector("#btn").addEventListener('click', function() {
    let textArea = document.querySelector("#intro").value
    console.log("This is textArea value => ", textArea)
})
