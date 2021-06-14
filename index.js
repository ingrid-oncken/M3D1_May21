/*

1)
Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.

2)
Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

3)
Create a function to remove a character at the specified position of a given string and return the new string.

4)
 Create a function to find the largest of three given integers.

5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

6) 
Create a function that creates and returns the specified number of copies of a given string (positive number).

7)
Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.

8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 

10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)
Create a function to find the longest string from a given array of strings.

12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)
Create a function to find the index of the greatest element of a given array of integers

14)
Create a function to get the largest even number from an array of integers.

15)
Create a function to check from two given integers, whether one is positive and another one is negative.

16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)
Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

//BEFORE BEGINING REVIEW TERNARY OPERATOR, TEMPLEATE LITERALS, HOW TO PASS
//PARAMETERS AS FUNCTIONS, SPREAD OPERATOR, ARROW FUNCTION, SORT METHOD, REMAINDER OPERATOR

// 1)Create a function to calculate the sum of the two given integers.
//   If the two values are the same, then returns the triple of their sum.
console.log(`\n\n`)
console.log(`******************** EX 1 ******`)

const funcEx1 = function (n1, n2) {
  return n1 === n2 ? (n1 + n2) * 3 : n1 + n2
}

//Also works with simple if/else statement
// const funcEx1 = function (a, b) {
//   if (a === b) {
//     return (a + b) * 3
//   } else {
//     return a + b
//   }
// }

console.log(`For the numbers 3 and 7 we have ${funcEx1(3, 7)}`)
console.log(`For the numbers 5 and 5 we have ${funcEx1(5, 5)}`)
console.log(`For the numbers 10 and 8 we have ${funcEx1(10, 8)}`)

console.log(`\n\n`)

// 2) Create a function to check two given numbers.
//   Return true if one of the numbers is 50, or if their sum is 50.
console.log(`******************** EX 2 ******`)

const funcEx2 = function (n1, n2) {
  return n1 === 50 || n2 === 50 || n1 + n2 === 50
}

// const funcEx2 = function (a, b) {
//   if (a === 50 || b === 50 || a + b === 50) {
//     return true
//   } else {
//     return false
//   }
// }

console.log(`For the numbers 3 and 7 we have ${funcEx2(3, 7)}`)
console.log(`For the numbers 50 and 5 we have ${funcEx2(50, 5)}`)
console.log(`For the numbers 10 and 40 we have ${funcEx2(10, 40)}`)

// 3) Create a function to remove a character at the specified position of a
//    given string and return the new string.
console.log(`******************** EX 3 ******`)

const funcEx3 = function (string, position) {
  return string.slice(0, position) + string.slice(position + 1)
}

// const funcEx3 = function (string, position) {
//   return string.slice(0, position) + string.slice(position + 1)
// }
// const funcEx3 = function (string, pos) {
//   return string.slice(0, position) + string.slice(position + 1)
// }
console.log(funcEx3(`Love`, 2))
console.log(funcEx3(`Ingrid`, 1))
console.log(funcEx3(`Hello`, 3))

console.log(`\n\n`)

// 4) Create a function to find the largest of three given integers.
console.log(`******************** EX 4 ******`)

const funcEx4 = function (n1, n2, n3) {
  return n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3
}

// const funcEx4 = function (...args) {
//   const sorted = args.sort((a, b) => b - a)
//   return sorted[0]
// }

console.log(`The largest number between 1, 3, 6 is ${funcEx4(1, 3, 6)}`)
console.log(`The largest number between 7, 4, 15 is ${funcEx4(7, 4, 15)}`)
console.log(`The largest number between 120, 74, 33 is ${funcEx4(120, 74, 33)}`)
console.log(`\n\n`)

// 5) Create a function to check whether two numbers are in range 40..60
//    or in the range 70..100 inclusive.
console.log(`******************** EX 5 ******`)
const funcEx5 = function (n1, n2) {
  return (
    (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
    (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)
  )
}
console.log(funcEx5(43, 56))
console.log(funcEx5(70, 95))
console.log(funcEx5(39, 61))
console.log(funcEx5(72, 100))
console.log(funcEx5(43, 98))

// const funcEx5 = function (n1, n2) {
//   if (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) {
//     console.log("n1 and n2 in range 40...60")
//   } else if (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100) {
//     console.log("n1 and n2 in range 70...100")
//   } else {
//     console.log("n1 and n2 not in the range")
//   }
// }
// funcEx5(40, 50)
// funcEx5(70, 95)
// funcEx5(72, 100)
// funcEx5(43, 98)

console.log(`\n\n`)

// 6) Create a function that creates and returns the specified number of
//    copies of a given string (positive number).
console.log(`******************** EX 6 ******`)

const funcEx6 = function (string, copies) {
  return copies > 0 ? string.repeat(copies) : string
}

// const funcEx6 = function (string, copies) {
//   if (copies <= 0) {
//     return "copies should be positive number"
//   } else {
//     let num = ""
//     for (let i = 0; i < copies; i++) {
//       num += string + " "
//     }
//     return num
//   }
// }
console.log(funcEx6(`Ingrid `, 5))
console.log(funcEx6(`Bla `, 3))
console.log(`\n\n`)

// 7) Create a function that returns the city name of a given string,
//    if the string begins with "Los" or "New", otherwise returns bla.
console.log(`******************** EX 7 ******`)

const funcEx7 = function (string) {
  return string.startsWith(`Los`) || string.startsWith(`New`) ? string : `bla`
}

// const funcEx7 = function (string) {
//   if (string.startsWith("Los") || string.startsWith("New")) {
//     return string
//   } else {
//     return ""
//   }
// }

console.log(funcEx7(`New York!`))
console.log(funcEx7(`Los Angeles.`))
console.log(funcEx7(`Berlin`))

console.log(`\n\n`)

// 8) Create a function to calculate the sum of three elements
//    of a given array of integers of length 3.
console.log(`******************** EX 8 ******`)

const funcEx8 = function (...array) {
  let sum = 0
  array.forEach((element) => {
    sum += element
  })
  return sum
}

// const funcEx8 = function (...array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i]
//   }
//   return sum
// }

console.log(funcEx8(20, 23, 45))

console.log(`\n\n`)

//9) Create a function to test whether an array of integers of
//   length 2 contains 1 or a 3.
console.log(`******************** EX 9 ******`)

const funcEx9 = (...argument) => argument.includes(1) || argument.includes(3)
console.log(funcEx9(5, 4))
console.log(funcEx9(1, 3))
console.log(funcEx9(4, 6))
console.log(`\n\n`)

// 10) Create a function to test whether an array of integers of length 2
//     does not contain 1 or a 3
console.log(`******************** EX 10 ******`)

const funcEx10 = (argument) => !funcEx9(argument)
console.log(funcEx10(5, 4))
console.log(funcEx10(1, 3))
console.log(funcEx10(4, 6))

console.log(`\n\n`)

// 11) Create a function to find the longest string from a given array of strings.
console.log(`******************** EX 11 ******`)

const funcEx11 = (namesArray) => {
  let lenghtArr = []
  namesArray.forEach((string) => lenghtArr.push(string.length))

  let max = Math.max(...lenghtArr)
  let index = lenghtArr.indexOf(max)
  return `The largest name is ${namesArray[index]} with ${max} letters`
}

// const funcEx11 = function (namesArray) {
//   const lenghtArr = []
//   for (let i = 0; i < namesArray.length; i++) {
//     lenghtArr.push(namesArray[i].length)
//   }
//   const largest = [...lenghtArr].sort((a, b) => b - a)[0]
//   const index = lenghtArr.indexOf(largest)

//   return (
//     "The largest name is " +
//     namesArray[index] +
//     " with " +
//     largest +
//     " letters "
//   )
// }
console.log(funcEx11(["Mykola", "Ingrid", "Alessandra", "Helena", "Theodora"]))

console.log(`\n\n`)

// 12)Create a function to find the types of a given angle.
//    Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
console.log(`******************** EX 12 ******`)
const funcEx12 = (angle) =>
  angle < 90
    ? "acute"
    : angle === 90
    ? "right"
    : angle > 90 && angle < 180
    ? "obtuse"
    : angle === 180
    ? "straight"
    : false

// const funcEx12 = function (angle) {
//   if (angle < 90) {
//     return "acute"
//   } else if (angle === 90) {
//     return "right"
//   } else if (angle < 180) {
//     return "obtuse"
//   } else {
//     return "straight"
//   }
// }

console.log(`180 is an ${funcEx12(180)} angle`)
console.log(`30 is an ${funcEx12(30)} angle`)
console.log(`90 is an ${funcEx12(90)} angle`)
console.log(`100 is an ${funcEx12(100)} angle`)
console.log(`\n\n`)

// 13) Create a function to find the index of the greatest element of a given array of integers
console.log(`******************** EX 13 ******`)
// const funcEx13 = (arr) => {
//   let index = []
//   arr.forEach(num => index.push(num))
//   let greatest = Math.max(...index)
//   return greatest
// }

const funcEx13 = function (arr) {
  const largest = [...arr].sort((a, b) => b - a)[0]
  // console.log(largest)
  return arr.indexOf(largest)
}
console.log(
  `In the array [3, 4, 5, 10, 7] the index of the greetest number is ${funcEx13(
    [3, 4, 5, 10, 7]
  )}`
)

console.log(`\n\n`)

// 14) Create a function to get the largest even number from an array of integers.
console.log(`******************** EX 14 ******`)
const funcEx14 = (arr) => {
  let array = []
  arr.forEach((num) =>
    num % 2 === 0 ? array.push(num) : "This array has only ODD numbers"
  )
  return Math.max(array)
}

// const funcEx14 = function (arr) {
//   const temp = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       temp.push(arr[i])
//     }
//   }
//   return temp.sort((a, b) => b - a)[0]
// }

console.log(
  `The largest even number is in the array [3, 4, 21, 11] is ${funcEx14([
    3, 4, 21, 11,
  ])}`
)
console.log(`\n\n`)

// 15)Create a function to check from two given integers, whether one is positive and another one is negative.
console.log(`******************** EX 15 ******`)
const funcEx15 = (n1, n2) => (n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0)

// const funcEx15 = function (n1, n2) {
//   if ((n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0)) {
//     return true
//   } else {
//     return false
//   }
// }

console.log(`Is there a positive AND a negative number? ${funcEx15(-1, 1)}`)
console.log(`\n\n`)

// 16)Create a function to create new string with first 3 characters are in lower case
//    and the others in upper case.
//    If the string length is less than 3 convert all the characters in upper case.
console.log(`******************** EX 16 ******`)

const funcEx16 = (string) =>
  string.length < 3
    ? string.toUpperCase()
    : string.substring(3, -1).toLowerCase() + string.substring(3).toUpperCase()

// const funcEx16 = function (string) {
//   if (string.length < 3) {
//     return string.toUpperCase()
//   } else {
//     return string.slice(0, 3).toLowerCase() + string.slice(3).toUpperCase()
//   }
// }

console.log(funcEx16("supercalifragilisticexpialidocious"))
console.log(funcEx16("hi"))
console.log(`\n\n`)

// 18) Create a function to convert a number to a string, the content of which depends on the number's factors.
// Follow next example:
// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28. this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30. this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34. This would be "34".
console.log(`******************** EX 18 ******`)

const funcEx18 = (num) => {
  let string = ""
  return num % 3 === 0
    ? (string += "Diego")
    : num % 5 === 0
    ? (string += "Riccardo")
    : num % 7 === 0
    ? (string += "Stefano")
    : (string += `has no cool factor`)
}

// const funcEx18 = function (num) {
//   let string = ""
//   if (num % 3 === 0) string += "Diego"
//   if (num % 5 === 0) string += "Riccardo"
//   if (num % 7 === 0) string += "Stefano"
//   return `has no cool factor`
// }

console.log(`The number 101 is a ${funcEx18(101)} factor`)
console.log(`The number 56 is a ${funcEx18(56)} factor`)
console.log(`The number 70 is a ${funcEx18(70)} factor`)
console.log(`The number 18 is a ${funcEx18(18)} factor`)
console.log(`\n\n`)

// 19) Create a function that given a phrase returns its acronym, like British Broadcasting Corporation
//     returns BBC
console.log(`******************** EX 18 ******`)
const funcEx19 = (string) => {
  console.log(`The acronym of ${string} is:`)
  let acronym = ""
  string.split(" ").forEach((word) => (acronym += word.charAt(0).toUpperCase()))
  return acronym
}

// const getAcronym = function (str) {
//   const temp = str.split(" ")
//   let acronym = ""
//   for (let i = 0; i < temp.length; i++) {
//     acronym += temp[i].charAt(0).toUpperCase()
//   }
//   return acronym
// }

console.log(funcEx19("British Broadcasting Corporation"))
console.log(funcEx19("Strive School"))
console.log(`\n\n`)
