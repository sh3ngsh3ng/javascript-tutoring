


document.querySelector("#search").addEventListener('click', async function() {
    // User Input
    let userInput = document.querySelector("#input").value

    // Call API with user input
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + userInput)
    console.log(response.data)

    let pokemonName = response.data.name
    let weight = response.data.weight
    let type = response.data.types[0].type.name
    let img = response.data.sprites.other["official-artwork"].front_default
    
    // Display Information on Frontend
    let outputLocation = document.querySelector("#output")
    outputLocation.innerHTML = `
        <div>
            <h1>${pokemonName}</h1>
            <p>Weight: ${weight}</p>
            <p>Type: ${type}</p>
            <img src='${img}'/>
        </div>
    `
})






