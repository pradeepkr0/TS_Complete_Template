// Create a simple function to add two numbers
function addNum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var output = " The sum of 10 , 20 is :-" + addNum(10, 20);
document.getElementById('display').innerHTML = output;
// Create the same add function with first number as 'any' type
function sum(num1, num2) {
    if (typeof num1 === 'string') {
        if (isNaN(parseInt(num1, 10))) {
            return 0;
        }
        else {
            num1 = parseInt(num1, 10);
        }
    }
    var addition = num1 + num2;
    return addition;
}
output = "The sum of '10' , '20' is  : " + sum(10, 20);
document.getElementById('display').innerHTML = output;
function max(a, b, c) {
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    }
    else {
        if (a > b && a > c) {
            return a;
        }
        else if (b > c) {
            return b;
        }
        else {
            return c;
        }
    }
}
output = "The Max of 10 is : " + max(10);
//output = "The Max of 10 , 20 is : " + max (10 ,20);
//output = "The Max of 10 , 20 , 30 is : " + max (10,20,30);
document.getElementById('display').innerHTML = output;
function min(a, b, c) {
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.min(a, b);
    }
    else {
        return Math.min(a, b, c);
    }
}
output = "The min of 10 is : " + min(10);
output = "The min of 10 , 20 is : " + min(10, 20);
//output = "The min of 10 , 20 , 30 is : " + min (10,20,30);
document.getElementById('display').innerHTML = output;
// Create an Employee function and get an Employee Object
