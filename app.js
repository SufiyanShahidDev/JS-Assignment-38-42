
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

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea() {
    var a = +prompt("Enter side a:");
    var b = +prompt("Enter side b:");
    var c = +prompt("Enter side c:");

    var S = calculateS(a, b, c);

    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

    alert("Area of the triangle is: " + area);
    console.log("Area of the triangle is: " + area);
}

calculateArea();