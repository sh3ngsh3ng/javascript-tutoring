let book = {
    "title": "The Lord of the Rings",
    "author": "JRR Tolkien",
    "ISBN": "123-123-123-123",
    "pages": 7220
}
// For in loop
// for (let x in book) {
//     console.log(x)
// }

// Object Methods

// 1) entries
// returns an array of arrays, 
// where the inner array contains key at index 0 and value at index 1

// let x = ['key', 'value']
// let [x , y] = ['key' , 'value']

let [x,y] = ['title', 'The Lord of the Rings']

for (let x of Object.entries(book)) {
    console.log("look here", x)
    console.log(`Key => ${x[0]}, Value => ${x[1]}`)
}


// 2) key
// returns an array of the keys in the object
// for (let x of Object.keys(book)) {
//     console.log(`Key => ${x[0]}, Value => ${x[1]}`)
// }


// 3) hasOwnProperty
console.log(book.hasOwnProperty('jam'))

// 4) toString
console.log(book.toString())


// 5) assign
let bookTwo = {
    'author2': 'Ben',
    'book2': 'Ben'
}

let bookThree = {
    'author3': 'Kern'
}

console.log(Object.assign(book, bookTwo, bookThree))
