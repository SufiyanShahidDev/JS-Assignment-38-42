
// Answer1

function power(base, exponent) {
    var result = 1;

    for (var i = 1; i <= exponent; i++) {
        result = result * base;
    }

    return result;
}

var baseNumber = +prompt("Enter base number:");
var exponentNumber = +prompt("Enter exponent:");

var finalResult = power(baseNumber, exponentNumber);

alert("Result: " + finalResult);
console.log("Result:", finalResult);