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
