var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
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
//check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log('final value is a number');
}
//never
function neverReturns() {
    throw new Error('an error');
}
//nullable
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Cris",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
// Classes
var Person = /** @class */ (function () {
    function Person(name, username, age, type) {
        this.username = username;
        this.age = 27;
        this.name = name;
        this.age = age;
        this.type = type;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Steve", "steve1", 28, 'man');
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool Guy"); //won't work with private method
// Inheritance
var Cris = /** @class */ (function (_super) {
    __extends(Cris, _super);
    // name = "Cris";
    function Cris() {
        return _super.call(this, "Cris", "cris1", 22, 'cool') || this;
    }
    return Cris;
}(Person));
var cris = new Cris();
console.log(cris);
//Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
//Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    //static means you can use the property or method without having to instantiate the class
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract Classes
//can't instantiate, can only be inherited from
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBundget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
// Practice
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car1 = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
var Adult = /** @class */ (function () {
    function Adult() {
        this._firstName = "Bob";
    }
    Object.defineProperty(Adult.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Adult;
}());
var jon = new Adult();
console.log(jon.firstName);
jon.firstName = 'pa';
console.log(jon.firstName);
jon.firstName = "Johnathan";
console.log(jon.firstName);
// Namespacing
// To not polute the global namespace
// namespace MyMath {
//     const PI = 3.14;
//     export function calculateCircumference(diameter: number) {
//         return diameter * PI;
//     }
//     export function calculateRectangle(width: number, length: number) {
//         return width * length;
//     }
// }
var PI = 2.99;
console.log(MyMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(10, 20));
console.log(PI); //2.99
