/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/


//ex:

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];
let output="";

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);

// lambda Expression

movieLength = movies.map(movie => movie.length);

output= movieLength.join("-");
console.log(output);
document.getElementById('display').innerHTML = output;
console.log(movieLength);

