// Create a simple class and usage
var Greeter = /** @class */ (function () {
    function Greeter(messege) {
        this.greeting = messege;
    }
    Greeter.prototype.greet = function () {
        return "Good Morning : -" + this.greeting;
    };
    Object.defineProperty(Greeter.prototype, "getGreetMassege", {
        get: function () {
            return this.greeting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Greeter.prototype, "setGreetMessege", {
        set: function (messege) {
            this.greeting = messege;
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
var greeter = new Greeter("Pradeep");
var output = greeter.greet();
output = greeter.getGreetMassege;
greeter.setGreetMessege = "John";
output = greeter.getGreetMassege;
document.getElementById('display').innerHTML = output;
// add a constructor to a class
// add methods to a class
// add getter and setter methods of a class
// Implement an interface and methods and variables of interface
