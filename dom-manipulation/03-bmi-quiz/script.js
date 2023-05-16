// EIPO
document.querySelector("#bmi-btn").addEventListener('click', function() {
    let height = parseFloat(document.querySelector("#height").value)
    let weight = parseFloat(document.querySelector("#weight").value)
    
    // BMI calculation
    let bmi = weight / (height * height)

    console.log(bmi)

    // select for element
    let outputElement = document.querySelector("#output")
    // modify element
    outputElement.innerHTML = bmi

})


