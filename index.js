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
//PARAMETERS AS FUNCTIONS, SPREAD OPERATOR

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

// const funcEx4 = function (n1, n2, n3) {
//   return n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3
// }

const funcEx4 = function (...args) {
  const sorted = args.sort((a, b) => b - a)
  return sorted[0]
}

console.log(`The largest number between 1, 3, 6 is ${funcEx4(1, 3, 6)}`)
console.log(`The largest number between 7, 4, 15 is ${funcEx4(7, 4, 15)}`)
console.log(`The largest number between 120, 74, 33 is ${funcEx4(120, 74, 33)}`)
console.log(`\n\n`)
