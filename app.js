
// Answer1

// function power(base, exponent) {
//     var result = 1;

//     for (var i = 1; i <= exponent; i++) {
//         result = result * base;
//     }

//     return result;
// }

// var baseNumber = +prompt("Enter base number:");
// var exponentNumber = +prompt("Enter exponent:");

// var finalResult = power(baseNumber, exponentNumber);

// alert("Result: " + finalResult);
// console.log("Result:", finalResult);

// Answer2

// function checkLeapYear() {
//     var year = +prompt("Enter a year:");

//     if (year % 4 === 0) {
//         alert(year + " is a Leap Year");
//         console.log(year + " is a Leap Year");
//     } else {
//         alert(year + " is NOT a Leap Year");
//         console.log(year + " is NOT a Leap Year");
//     }
// }

// checkLeapYear();

// Answer3

// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea() {
//     var a = +prompt("Enter side a:");
//     var b = +prompt("Enter side b:");
//     var c = +prompt("Enter side c:");

//     var S = calculateS(a, b, c);

//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//     alert("Area of the triangle is: " + area);
//     console.log("Area of the triangle is: " + area);
// }

// calculateArea();

// Answer4

// function calculateAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// function calculatePercentage(m1, m2, m3) {
//     var totalMarks = 300;
//     var obtainedMarks = m1 + m2 + m3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//     var marks1 = +prompt("Enter marks of subject 1:");
//     var marks2 = +prompt("Enter marks of subject 2:");
//     var marks3 = +prompt("Enter marks of subject 3:");

//     var average = calculateAverage(marks1, marks2, marks3);
//     var percentage = calculatePercentage(marks1, marks2, marks3);

//     alert(
//         "Average Marks: " + average +
//         "\nPercentage: " + percentage + "%"
//     );

//     console.log("Average Marks:", average);
//     console.log("Percentage:", percentage);
// }

// mainFunction();

// Answer5

// function customIndexOf(text, searchChar) {
//     var index = -1;

//     for (var i = 0; i < text.length; i++) {
//         if (text[i] === searchChar) {
//             index = i;
//             break;
//         }
//     }

//     return index;
// }

// var userText = prompt("Enter a string:");
// var userChar = prompt("Enter a single character:");

// var result = customIndexOf(userText, userChar);

// alert("Index is: " + result);
// console.log("Index is:", result);

// Answer6

// function removeVowels(sentence) {
//     var result = "";

//     for (var i = 0; i < sentence.length; i++) {
//         var char = sentence[i];

//         if (
//             char !== "a" && char !== "e" && char !== "i" &&
//             char !== "o" && char !== "u" &&
//             char !== "A" && char !== "E" && char !== "I" &&
//             char !== "O" && char !== "U"
//         ) {
//             result = result + char;
//         }
//     }

//     return result;
// }

// var userSentence = prompt("Enter a sentence (max 25 characters):");

// var output = removeVowels(userSentence);

// alert("Sentence without vowels:\n" + output);
// console.log(output);

// Answer7

// function countDoubleVowels(text) {
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var pair = text[i] + text[i + 1];

//         switch (pair) {
//             case "aa":
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":

//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":
//             case "eu":

//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":

//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":

//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":
//                 count++;
//                 break;
//         }
//     }

//     return count;
// }

// var sentence = prompt("Enter a sentence:");
// var result = countDoubleVowels(sentence.toLowerCase());

// alert("Number of two-vowel occurrences: " + result);
// console.log(result);

// Answer8

// var distanceKm = +prompt("Enter distance between two cities (in kilometers):");

// function convertToMeters(km) {
//     var meters = km * 1000;
//     alert("Distance in meters: " + meters);
// }

// function convertToFeet(km) {    
//     var feet = km * 3280.84;
//     alert("Distance in feet: " + feet);
// }

// function convertToInches(km) {
//     var inches = km * 39370.1;
//     alert("Distance in inches: " + inches);
// }

// function convertToCentimeters(km) {
//     var centimeters = km * 100000;
//     alert("Distance in centimeters: " + centimeters);
// }

// convertToMeters(distanceKm);
// convertToFeet(distanceKm);
// convertToInches(distanceKm);
// convertToCentimeters(distanceKm);

// Answer9

// var workingHours = +prompt("Enter total hours worked:");
// var overtimePay = 0;

// if (workingHours > 40) {
//     var overtimeHours = workingHours - 40;
//     overtimePay = overtimeHours * 12;
//     alert("Overtime Pay is Rs. " + overtimePay);
// } else {
//     alert("No overtime pay");
// }

// Answer10

function calculateNotes() {
    var amount = +prompt("Enter amount to withdraw:");

    var hundredNotes = (amount - (amount % 100)) / 100;
    amount = amount % 100;

    var fiftyNotes = (amount - (amount % 50)) / 50;
    amount = amount % 50;

    var tenNotes = (amount - (amount % 10)) / 10;

    alert(
        "100 Rupee Notes: " + hundredNotes +
        "\n50 Rupee Notes: " + fiftyNotes +
        "\n10 Rupee Notes: " + tenNotes
    );

    console.log("100 Rupee Notes:", hundredNotes);
    console.log("50 Rupee Notes:", fiftyNotes);
    console.log("10 Rupee Notes:", tenNotes);
}

// Function call
calculateNotes();
