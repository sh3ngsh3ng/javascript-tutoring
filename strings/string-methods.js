// Different wayhs to initialize strings
// let str1 = new String()
// console.log(str1)
// let str2 = new String("Hello World")
// console.log(str2)
// let str3 = ""
// console.log(str3)
// let str4 = "Hello World"
// console.log(str4)

// Accessing Strings by index
// let str = "Hello World"
// console.log(str[1])


// Strings are immutable
// they cannot be changed

// Reassignment of variable
// let str5 = "This is a string"
// str5 = "Yes, it is a string"


// String Methods
let str = "Hello World";


// 1) string.indexOf(str, fromIndex)
// returns the index of the first occurence of value passed in
// second arguments: search from the stipulated index onwards
// let firstOccurence = str.indexOf('o') // => index 4
// let secondOccurence = str.indexOf('o', firstOccurence + 1)

// let email = "ben@yahoo.com"
// let idx = email.indexOf('@')
// console.log(email.slice(idx + 1))

// 2) string.slice(start, end)
// returns a copy of the string, without changing the original
let str2 = "Hello, Ben"
let str3 = str2.slice(7)
// console.log(str2.slice(7))
console.log(str3, str2)

// 3) string.toLowerCase()
let str4 = "Kern is HANDSOME"
let str5 = str4.toLowerCase()
console.log(str5)
console.log("original string =>", str4)

// 4) string.toUpperCase()

// 5) string.trim()
// removes the whitespaces from both ends of the string
// let str6 = "      Ben is also HANDSOME      "
// console.log("without trim => ", str6)
// console.log("after trimming => ", str6.trim())


// 6) string.includes(substr)
let str7 = "Kern and Ben are BEST frens"
// let str8 = str7.toLowerCase() // "kern and ben are best frens"
let str8 = str7.toLowerCase().includes("ben")
console.log(str8)
