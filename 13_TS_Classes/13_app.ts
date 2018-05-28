// Create a simple class and usage
class Greeter{

     private greeting : string;

    constructor(messege :string){
        this.greeting = messege;
    }

    greet(){
        return "Good Morning : -" + this.greeting;
    }

    public get getGreetMassege():string{
        return this.greeting;
    }

    public set setGreetMessege(messege){
        this.greeting = messege;
    }
}

let greeter = new Greeter("Pradeep");

let output =greeter.greet();

output =greeter.getGreetMassege;

greeter.setGreetMessege ="John";

output =greeter.getGreetMassege;

document.getElementById('display').innerHTML=output;

// add a constructor to a class

// add methods to a class

// add getter and setter methods of a class

// Implement an interface and methods and variables of interface