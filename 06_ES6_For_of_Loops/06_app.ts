/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

//Starter

//for.. in Loopo

let myArray = ['html','javascript','css','bootstrap'];
let output = "";
for(let index in myArray){
    let value = myArray[index];
    output += value + " ";
}
document.getElementById('display').innerHTML=output;

 
// for.. of Example
output ="";
for(let value of myArray){
    output += value + "-";
}
document.getElementById('display').innerHTML=output;