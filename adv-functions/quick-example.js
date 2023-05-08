function multiplyTwo(arg) {
    return arg * 2
}

function addTwo(arg) {
    return arg + 2
}


function mathFunction(func) {
    return func(10)
}


console.log(mathFunction(multiplyTwo))
console.log(mathFunction(addTwo))
