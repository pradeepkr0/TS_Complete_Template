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
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var output = "";
var movieLength = movies.map(function (movie) {
    return movie.length;
});
// lambda Expression
movieLength = movies.map(function (movie) { return movie.length; });
output = movieLength.join("-");
console.log(output);
document.getElementById('display').innerHTML = output;
console.log(movieLength);
