// Create a simple function to add two numbers
function addNum(num1:number , num2:number):number{
    let sum:number =num1+num2;
    return sum;
}
let output =" The sum of 10 , 20 is :-" + addNum(10,20);
document.getElementById('display').innerHTML=output;


// Create the same add function with first number as 'any' type

function sum(num1:any ,  num2:number):number{
    if(typeof num1 === 'string'){
        if(isNaN(parseInt(num1, 10))){
            return 0;
        }
        else{
           num1 = parseInt(num1, 10);
        } 
    }
    let addition =num1 + num2;
    return addition;
}
output = "The sum of '10' , '20' is  : " + sum (10,20);
document.getElementById('display').innerHTML=output;

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers

function max(a:number):number;
function max(a:number , b:number):number;
function max(a:number , b:number , c:number):number;
function max(a:number , b?:number , c?:number):number{
    if(b === undefined && c === undefined){
        return a;
    }
    else if (c === undefined){
        if(a > b){
            return a;
        }
        else{
            return  b;
        }
    }
    else{
        if (a > b && a > c){
            return a;
        }
        else if (b > c){
            return b;
        }
        else{
            return c;
        }
    }
}
output = "The Max of 10 is : " + max (10);
//output = "The Max of 10 , 20 is : " + max (10 ,20);
//output = "The Max of 10 , 20 , 30 is : " + max (10,20,30);
document.getElementById('display').innerHTML=output;


//shortcut way for above function


function min(a:number):number;
function min(a:number , b:number):number;
function min(a:number , b:number , c:number):number;
function min(a:number , b?:number , c?:number):number{
    if( b === undefined && c === undefined){
        return a;
    }
    else if (c === undefined){
        return Math.min(a , b);
    }
    else{
        return Math.min(a , b , c);
    }
}
output = "The min of 10 is : " + min (10);
output = "The min of 10 , 20 is : " + min (10 ,20);
//output = "The min of 10 , 20 , 30 is : " + min (10,20,30);
document.getElementById('display').innerHTML=output;

// Create an Employee function and get an Employee Object
