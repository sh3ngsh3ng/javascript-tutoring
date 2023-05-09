// Object Destructuring

let book = {
    "title": "The Lord of the Rings",
    "author": "JRR Tolkien",
    "ISBN": "123-123-123-123",
    "pages": 7220
}

// let {author, title, ISBN, pages} = book 
// console.log(title)
// console.log(author)
// console.log(ISBN)
// console.log(pages)

let {author:a, title:t, ...details} = book 
console.log(a)
console.log(t)
console.log(details)

let rectangle = {
    length: 10,
    breadth: 20,
    color: 'red',
    border: 'black 1px solid'
}

function calculateAreaOfRectangle({length, breadth}) {
    return length * breadth
}

console.log(calculateAreaOfRectangle(rectangle))
console.log(rectangle) // original object not modified