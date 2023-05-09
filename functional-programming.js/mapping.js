// Functional Programming
// is a programming paradigm
    
// Example of Iterative Programming
let words = ['the', 'quick', 'brown', 'fox']
let transformedWords = []

for (let word of words) {
    transformedWords.push(word.toUpperCase())
}

// Example of Functional Programming
let words2 = ['quick', 'brown', 'fox', 'jumps']
transformedWords2 = words2.map( w => w.toUpperCase())
console.log(transformedWords2)


// MAPPING
// E.g. 1 Multiply By Two
let nums = [1, 2, 3, 4, 5]
function multiplyByTwo(x) {
    return x * 2
}
let numsMultipliedByTwo = nums.map(multiplyByTwo)
let numsMultipliedByTwoAnonymous = nums.map(function(x) {
    return x * 2
})
let numsMultipliedByTwoArrow = nums.map(x => x * 2)
console.log(numsMultipliedByTwo)
console.log("numsMultipliedByTwoAnonymous =>", numsMultipliedByTwoAnonymous)
console.log("numsMultipliedByTwoArrow =>", numsMultipliedByTwoArrow)

// E.g. 2 Change to uppercase
let smallCaps = ['a', 'b', 'c', 'd', 'e']

// Using named function
function changeToUpperCase(c) {
    return c.toUpperCase()
}
let bigCapsArray = smallCaps.map(changeToUpperCase)
// Anonymous function
let bigCapsArrayAnonymous = smallCaps.map(function(c) {
    return c.toUpperCase()
})
// Arrow function
let bigCapsArrayArrow = smallCaps.map(x => x.toUpperCase())
console.log(bigCapsArray)






