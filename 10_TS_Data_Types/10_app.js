/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */
/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/
var isClassOnSunday = true;
var output = "isClassOnSunday:- " + isClassOnSunday;
document.getElementById('display').innerHTML = output;
/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/
var TypeScriptVersion = 2.7;
output = "Type Script Version is :- " + TypeScriptVersion;
document.getElementById('display').innerHTML = output;
/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */
var myName = 'Pradeep';
output = " My Name is : " + myName;
document.getElementById('display').innerHTML = output;
// You can also use template strings, which can span multiple lines and have embedded expressions.
/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */
var uiTechnologies = ['HTML', 'CSS', 'javascript', 'Bootstrap'];
output = uiTechnologies.join("-");
document.getElementById('display').innerHTML = output;
/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */
var Month;
(function (Month) {
    Month["January"] = "JAN";
    Month["February"] = "FRB";
})(Month || (Month = {}));
var month_name = Month.January;
output = "Month Name is : " + month_name;
document.getElementById('display').innerHTML = output;
/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */
var anyVal = ['abcd', 100, true, { name: "John" }];
output = anyVal.join("-");
//document.getElementById('display').innerHTML = output;
/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */
function greet(name) {
    var output = "Good Evening :- " + name;
    //document.getElementById('display').innerHTML = output;
}
greet('Pradeep');
/*
    undefined and null
    these datatypes are used to assign values to themselves
 */ 
