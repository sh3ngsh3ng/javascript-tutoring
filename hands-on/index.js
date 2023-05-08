let input = '12-12-1988' // DD-MM-YYYY


// console.log(`
// ${input.slice(0, 2)}\n${input.slice(3, 5)}\n${input.slice(6)}`)

// console.log(input.slice(0, 2))
// console.log(input.slice(3, 5))
// console.log(input.slice(6))


// let arr = input.split("-")
// console.log(arr)

// for (let x of arr) {
//     console.log(x)
// }



let arrOfPhotos = ['balloon.png', 'chair.heic', 'sofa.jpg', 'fan.mmpeg']
let result = []

for (let x of arrOfPhotos) {
    let idxOfFullstop = x.indexOf(".")
    let nameOfPic = x.slice(0, idxOfFullstop)
    result.push(nameOfPic)
}

console.log(result)
