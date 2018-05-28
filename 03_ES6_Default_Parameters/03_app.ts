/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Starter Function

function countdownStarter(final,initial=0,interval=1){
    let current  = initial;
    var output="";

    while(current <= final){
        output += current;
        if(current < final)
        {
        	output +=" , ";
        }
       

        current += interval;
        document.getElementById('display').innerHTML= output;
       
    }
}

countdownStarter(20);

