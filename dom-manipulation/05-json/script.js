// READING JSON FILES

// FETCH METHOD 1
// console.log("Start fetching file")

// // Asynchronous Programming
// // Promise
// fetch('cars.json') // => returns promise
//     .then((response) => response.json()) // json() => reutrns promise
//     .then((json) => console.log(json));

// console.log("File fetched")

// FETCH METHOD 2
// async function getData() {
//     console.log("start getting data")
//     let result = await fetch('cars.json')
//     console.log("end of getting data, => ", result)
// }

// getData()

// AXIOS METHOD
// async function main() {
//     // await must be used in async function
//     let result = await axios.get("cars.json")
//     console.log(result.data)
// }

// main()


