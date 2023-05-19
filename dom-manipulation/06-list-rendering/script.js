async function loadData() {
    // 1) load data from json
    let response = await axios.get("cars.json")
    console.log(response.data) // => array of car objects

    // 2) display data in our frontend
    // Select for parent element
    let carList = document.querySelector("#car-list")

    // Method 1 : innerHTML
    // for (let x of response.data) {
    //     carList.innerHTML += `<li>${x.car_model}, ${x.car_brand}, ${x.price}</li>`
    //     // console.log(carList.innerHTML)
    // }

    // Method 2: Create element
    for (let x of response.data) {
        // creating element
        let el = document.createElement("li")
        el.innerHTML = `<li>${x.car_model}, ${x.car_brand}, ${x.price}</li>`

        // insert into the parent
        // using the appendchild method
        carList.appendChild(el)
    }

}


loadData()