"use strict";
//string
var myName = 'Cris';
//number
var myNumber = 27;
//floats are also numbers
//boolean
var hasHobbies = false;
//assigning types
//any
var myRealAge;
//assigning type number
var myOtherNumber;
myOtherNumber = 27;
//array
var hobbies = ['Cooking', 'Sports'];
console.log(typeof hobbies); //--> object
//array of any
var sports = ["Soccer"];
sports = [100];
//tuple
var address = ["Street", 99];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log('hello');
    //doesn't return anything
}
//argument types
function multiply(val1, val2) {
    return val1 * val2;
}
//function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 5));
//objects
var userData = {
    name: "Cris",
    age: 27
};
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myActualAge = 27;
myActualAge = "27";
