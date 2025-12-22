
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

// Answer5

function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    var totalMarks = 300;
    var obtainedMarks = m1 + m2 + m3;
    return (obtainedMarks / totalMarks) * 100;
}

function mainFunction() {
    var marks1 = +prompt("Enter marks of subject 1:");
    var marks2 = +prompt("Enter marks of subject 2:");
    var marks3 = +prompt("Enter marks of subject 3:");

    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3);

    alert(
        "Average Marks: " + average +
        "\nPercentage: " + percentage + "%"
    );

    console.log("Average Marks:", average);
    console.log("Percentage:", percentage);
}

mainFunction();