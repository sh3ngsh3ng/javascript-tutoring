

async function loadData() {
    let response = await axios.get("career.json")
    return response.data
}


async function main() {
    // 1) load the data from the json
    let careers = await loadData() // careers => array of objects

    // 2) add the data to the index.html
    // - select for parent div to add the data
    let careerList = document.querySelector("#career-list")

    for (let x of careers) {
        careerList.innerHTML += `
        <div class="card">
        <div class="card-header">
            ${x.field}
        </div>
        <div class="card-body">
            <h5 class="card-title">${x.pay}</h5>
            <p class="card-text">${x.roles}</p>
        </div>
        </div>
        `
    }

}


main()




