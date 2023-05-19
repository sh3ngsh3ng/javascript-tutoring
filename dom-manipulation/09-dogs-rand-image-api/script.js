async function getBreeds() {
    let response = await axios.get("https://dog.ceo/api/breeds/list/all")
    let breeds = response.data.message
    let dropdownList = document.querySelector("#dog-breed")
    for (let x in breeds) {
        // x => breed 
        let el = document.createElement("option")
        el.value = x
        el.innerText = x.charAt(0).toUpperCase() + x.slice(1)
        dropdownList.appendChild(el)
    }
}

getBreeds()

document.querySelector("#get-image-btn").addEventListener('click', async function() {
    let selectedBreed = document.querySelector("#dog-breed").value
    
    let response = await axios.get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)

    let img = response.data.message

    let imgOutput = document.querySelector("#img-output")
    imgOutput.src = img
})
