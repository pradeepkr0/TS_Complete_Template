// Create a Student Interface , and printStudent function
interface Student{
    name : string;
    age : number;
    course : string;
    address : {
        city : string;
        state : string;
        country : string;
    }
}

function printStudent(student:Student){
    let output = JSON.stringify(student);
    document.getElementById('display').innerHTML=output;
}

let student1:Student = {
    name : "John",
    age : 25,
    course : "Engg",
    address : {
        city : "Hyderabad",
        state : "Telangana",
        country : "India",
    }
};

printStudent(student1);