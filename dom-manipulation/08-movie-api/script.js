document.querySelector("#search").addEventListener('click', async function() {
    let userInputTitle = document.querySelector("#input").value
    let userInputType = document.querySelector(".type:checked").value

    let response = await axios.get("https://www.omdbapi.com/", {
        params: {
            apiKey: "81a24446",
            t: userInputTitle,
            type: userInputType
        }
    })

    let outputLocation = document.querySelector("#output")
    outputLocation.innerHTML = 
    `
        <h1>${response.data.Title}</h1>
        <p>Genre: ${response.data.Genre}</p>
        <p>Actors: ${response.data.Actors}</p>
    `
    console.log(response.data)
})