function printStudent(student) {
    var output = JSON.stringify(student);
    document.getElementById('display').innerHTML = output;
}
var student1 = {
    name: "John",
    age: 25,
    course: "Engg",
    address: {
        city: "Hyderabad",
        state: "Telangana",
        country: "India"
    }
};
printStudent(student1);
