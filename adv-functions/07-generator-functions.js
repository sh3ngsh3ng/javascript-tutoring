// Generator Functions are functions that can be paused and resumed

// Declaring normal function
function sayHello() {
    return "Hello!"
}

sayHello()

// Declaring generator function
// E.g. 1
// function* sayHelloGenerator() {
//     console.log("Hello")
//     yield
//     console.log("World")
// }

// let gen = sayHelloGenerator()
// gen.next()
// gen.next()

// E.g.
function* sayHelloGenerator2() {
    yield "Hello One"
    yield "Hello Two"
    yield "Hello Three"
    return "Generator Function is returned"
}

let gen2 = sayHelloGenerator2()
console.log("First call => ", gen2.next())
console.log("Second call => ", gen2.next())
console.log("Third call => ", gen2.next())
console.log("Last call => ", gen2.next())

// for (let i = 0; i < Infinity; i++) {
//     console.log(i)
// }

function* generateId() {
    let id = 1;
    // infinite loop
    while (true) {
        yield id++;
    }
}

let gen3 = generateId()
console.log(gen3.next())

