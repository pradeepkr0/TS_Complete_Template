/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

//Starter

let array = [10001,'naveen','TechLead'];

// long way
function addFn(array){
    let id = array[0];
    let myName = array[1]; 
    let designation = array[2];
}

function addFn1(array){
    let [id,myName,desg] = array;
    console.log(id + " " + myName + " " + desg);

}
addFn1(array);



// Best usage is to exchange the value btw a & b

var a=10;
var b=20;

//to exchange the value of a , b in normal way

var temp =0;
temp=b;
b=a;
a = temp;

// to exchange the value a,b using Destructiong ES6
[a,b] = [b,a];
// This is even works for Objects

