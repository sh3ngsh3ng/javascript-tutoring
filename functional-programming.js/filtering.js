// FILTERING

// Example 1: Filter for odd numbers
let numbers = [1,2,3,4,5,6,7,8,9]

// Case 1: named function
function filterOddNumbers(x) {
    if (x % 2 == 0) {
        return false
    } else {
        return true
    }
}

let filteredNums = numbers.filter(filterOddNumbers)
// Case 2: Anonymous Function
let filteredNumsAnonymous = numbers.filter(function(x) {
    if (x % 2 == 0) {
        return false
    } else {
        return true
    }
})
// Case 3: Arrow Function
let filteredNumsArrow = numbers.filter(x => x % 2 !== 0)
console.log(filteredNums)
console.log(filteredNumsAnonymous)
console.log(filteredNumsArrow)

// Example 2: Filter for string length more than 3
let strings = ['Ben', 'Ken', 'Adam', 'Alex', 'Gail']
let answer = strings.filter(x => x.length > 3)
console.log(answer)


