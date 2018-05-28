/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
//Starter
var array = [10001, 'naveen', 'TechLead'];
// long way
function addFn(array) {
    var id = array[0];
    var myName = array[1];
    var designation = array[2];
}
function addFn1(array) {
    var id = array[0], myName = array[1], desg = array[2];
    console.log(id + " " + myName + " " + desg);
}
addFn1(array);
// Best usage is to exchange the value btw a & b
var a = 10;
var b = 20;
//to exchange the value of a , b in normal way
var temp = 0;
temp = b;
b = a;
a = temp;
// to exchange the value a,b using Destructiong ES6
_a = [b, a], a = _a[0], b = _a[1];
var _a;
// This is even works for Objects
