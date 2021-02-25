// // ASSESSMENT 2: Coding practical questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is HIGHLY recommended
// // If you get stuck, please leave comments to help us understand your thought process

// // Add appropriate dependencies to the repository:
// // $ yarn add jest

// // Use test driven development to complete the following questions
// // Run the file with the following command:
// // $ yarn jest

// // Reminder: The test will call your function

// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// // a) Create a test with expect statements for each of the variables provided.

// describe("is number divivisble by 3", () => {
// 	it("its divisible or not based on input", () => {
// 		var num1 = 15;
// 		// Expected output: "15 is divisible by three"

// 		var num2 = 0;
// 		// Expected output: "0 is divisible by three"

// 		var num3 = -7;
// 		// Expected output: "-7 is not divisble by three"
// 		expect(divider(num1)).toEqual("15 is divisible by three");
// 		expect(divider(num2)).toEqual("0 is divisible by three");
// 		expect(divider(num3)).toEqual("-7 is not divisible by three");
// 	});
// });

// const divider = (num) => {
// 	if (num % 3 === 0) {
// 		return `${num} is divisible by three`;
// 	} else {
// 		return `${num} is not divisible by three`;
// 	}
// };

// // console.log(divider(num1))
// // console.log(divider(num2))
// // console.log(divider(num3))

// // b) Create the function that makes the test pass.

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = [
	"temperature",
	"database",
	"chopsticks",
	"mango",
	"deduction",
];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("returns array capitalized", () => {
	it("capitalized by desired input", () => {
		var randomNouns1 = [
			"streetlamp",
			"potato",
			"teeth",
			"conclusion",
			"nephew",
		];
		// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

		var randomNouns2 = [
			"temperature",
			"database",
			"chopsticks",
			"mango",
			"deduction",
		];
		// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

		expect(capitalLetters(randomNouns1)).toEqual([
			"Streetlamp",
			"Potato",
			"Teeth",
			"Conclusion",
			"Nephew",
		]);
		expect(capitalLetters(randomNouns2)).toEqual([
			"Temperature",
			"Database",
			"Chopsticks",
			"Mango",
			"Deduction",
		]);
	});
});

const capitalLetters = (array) => {
	let newArray = array.map((value) => {
		return value[0].toUpperCase() + value.substring(1);
	});
	return newArray;
};

console.log(capitalLetters(randomNouns1));
console.log(capitalLetters(randomNouns2));

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"];
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"];
// Expected output: [-9, 0, 3, 18, 94]\

describe("returns an array with ONLY NUMBERS sorted from least to greatest.", () => {
	it("returns an array with ONLY NUMBERS sorted from least to greatest", () => {
		var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"];
		// Expected output: [-8, 0, 8, 46, 59, 107]

		var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"];
		// Expected output: [-9, 0, 3, 18, 94]

		expect(gimmeNums(mixedDataArray1)).toEqual([-8, 0, 8, 46, 59, 107]);
		expect(gimmeNums(mixedDataArray2)).toEqual([-9, 0, 3, 18, 94]);
	});
});

const gimmeNums = (array) => {
	let sortFilter = array.filter((value) => {
		return typeof value === "number";
	});
	return sortFilter.sort(function (a, b) {
		return a - b;
	});
};

console.log(gimmeNums(mixedDataArray1));
console.log(gimmeNums(mixedDataArray2));

// b) Create the function that makes the test pass.

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("logs the index of the first vowel", () => {
	it("logs the index of the first vowel", () => {
		var vowelTester1 = "learn";
		// Expected output: 1
		var vowelTester2 = "academy";
		// Expected output: 0
		var vowelTester3 = "challenge";
		// Expected output: 2

		expect(vowelFinder(vowelTester1)).toEqual(1);
		expect(vowelFinder(vowelTester2)).toEqual(0);
		expect(vowelFinder(vowelTester3)).toEqual(2);
	});
});

var vowelTester1 = "learn";
// Expected output: 1
var vowelTester2 = "academy";
// // Expected output: 0
var vowelTester3 = "challenge";
// // Expected output: 2

const vowelFinder = (string) => {
	let newVowel = string.split("");
	for (let i = 0; i < vowelFinder.length; i++) {
		let value = newVowel[i];
		if (["a", "e", "i", "o", "u"].includes(value.toLowerCase())) {
			return i;
		}
	}
};

console.log(vowelFinder(vowelTester1));
console.log(vowelFinder(vowelTester2));
console.log(vowelFinder(vowelTester3));

// b) Create the function that makes the test pass
