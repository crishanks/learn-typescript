interface NamedPerson {
    firstName: string;
    age?: number; //? means optional
    [propName: string]: any; //array notation if I don't know the name of the key yet at the time you set up your interface
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log(`Hello, ${person.firstName}`);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}

greet(person);
// greet({firstName: "Max", age: 27}); //object literals passed as arguments are checked more strictly. interface must have all the properties in object literal
person.greet("Johnson");

class Person implements NamedPerson {
    //implement allows us to use an interface when creating a class.
    constructor(firstName: string = "Anonymous") {
        this.firstName = firstName;
    }
    firstName: string;
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`);
    }
}

const myPerson = new Person();
myPerson.firstName = "Cristopher"
greet(myPerson);
myPerson.greet("Stevenson");

// Interfaces with function types

interface DoubleValueFunc {
    (numberOne: number, numberTwo: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
    return (value1 + value2) * 2;
}

console.log(myDoubleFunction(10, 20));

// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 29,
    firstName: 'Billy',
    greet(lastName: string) {
        console.log("hello!");
    }
}

console.log(oldPerson);