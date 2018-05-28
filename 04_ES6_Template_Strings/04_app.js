/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/
// Starter
var employee = {
    name: "John",
    age: 40,
    desg: "Software Engineer"
};
var output = "<h1> Name : " + employee.name + " </h1> <br>" +
    "<h1> age : " + employee.age + "</h1><br>" +
    "<h1> Desg : " + employee.desg + "</h1><br>";
var templateString = "<h1> Name :" + employee.name + " </h1> <br> \n                     <h1> age : " + employee.age + "</h1><br> \n                     <h1> Desg : " + employee.desg + "</h1><br>";
document.getElementById('container').innerHTML = templateString;
