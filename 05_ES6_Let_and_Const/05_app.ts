/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// var Example

for(var i=0; i<=10; i++){

}

var output = "The value of i is : " + 1;
document.getElementById('display').innerHTML = output;

//let Example
for(var j=0; j<=10; j++){

}
// output = "The of j is : " + j;

//Const example

const MONTH_NAME = "January";
output = "The month name is :" +MONTH_NAME;
document.getElementById('display').innerHTML=output;

//MONTH_NAME + "February" ; // CE : cannot assign to a constant variable


