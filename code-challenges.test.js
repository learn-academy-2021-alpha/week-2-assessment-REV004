// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// var num1 = 15
// // Expected output: "15 is divisible by three"

// var num2 = 0
// // Expected output: "0 is divisible by three"

// var num3 = -7
// // Expected output: "-7 is not divisble by three"

// const divider = (num) => {
//     if (num % 3 === 0)
//     return `${num} is divisble by three`
// }else{
//     return `${num} is not divisible by three`
// }

// console.log(divider(num1))
// console.log(divider(num2))
// console.log(divider(num3))

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = [
	"temperature",
	"database",
	"chopsticks",
	"mango",
	"deduction",
];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// const capitalLetters = (array) => {
// 	let newArray = [];

// 	for (let index = 0; index < array.length; index++) {
// 		newArray.push(array[index].toUpperCase());
// 	}

// 	return newArray;
// };

// console.log(capitalLetters(randomNouns1));
// console.log(capitalLetters(randomNouns2));

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"];
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray1 = [3, "yo!", 94, -9, false, 0, 18, "hola!"];
// Expected output: [-9, 0, 3, 18, 94]\

const gimmeNums = (array) => {
	let sortFilter = array.filter((value) => {
		return typeof value === "number";
	});
	return sortFilter.sort(function (a, b) {
		return a - b;
	});
};

console.log(gimmeNums(mixedDataArray1));

// b) Create the function that makes the test pass.

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// var vowelTester1 = "learn";
// // Expected output: 1
// var vowelTester2 = "academy";
// // Expected output: 0
// var vowelTester3 = "challenge";
// // Expected output: 2

// const vowelFinder = (string) => {
// 	let vowelsFinder = ["a", "e", "i", "o", "u"];
// 	let newArray = string.split("");
// 	let final = 0;
// 	for (let index = 0; index < newArray.length; index++) {
// 		if (
// 			(final < 0 && newArray[index] === "a") ||
// 			newArray[index] === "e" ||
// 			newArray[index] === "i" ||
// 			newArray[index] === "o" ||
// 			newArray[index] === "u"
// 		) {
// 			final = newArray.indexOf(newArray[index]);
// 		}
// 	}
// 	return final;
// };
// //for this one it gives me the first output as correct but for some reason I cant get it to give me other ones *brain explodes* *help!*

// console.log(vowelFinder(vowelTester1));
// console.log(vowelFinder(vowelTester2));
// console.log(vowelFinder(vowelTester3));

// b) Create the function that makes the test pass.
