"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greet(person);
// greet({firstName: "Max", age: 27}); //object literals passed as arguments are checked more strictly. interface must have all the properties in object literal
person.greet("Johnson");
var Person = /** @class */ (function () {
    function Person(firstName) {
        if (firstName === void 0) { firstName = "Anonymous"; }
        this.firstName = firstName;
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Cristopher";
greet(myPerson);
myPerson.greet("Stevenson");
