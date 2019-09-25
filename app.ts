/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
import CircleMath = MyMath.Circle;

//string
let myName = 'Cris';

//number
let myNumber = 27;
//floats are also numbers

//boolean
let hasHobbies = false;

//assigning types
//any
let myRealAge;
//assigning type number
let myOtherNumber: number;
myOtherNumber = 27;

//array
let hobbies = ['Cooking', 'Sports'];
console.log(typeof hobbies); //--> object
//array of any
let sports: any[] = ["Soccer"]
sports = [100];

//tuple
let address:[string, number] = ["Street", 99];


//enum
enum Color {
    Gray,
    Green = 100,
    Blue = 2
}

let myColor: Color = Color.Green;
console.log(myColor);

//any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

//functions
function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

//void
function sayHello(): void {
    console.log('hello');
    //doesn't return anything
}

//argument types
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

//function types
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
console.log(myMultiply(2,5));

//objects
let userData: { name: string, age: number } = {
    name: "Cris",
    age: 27
};

//complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

//types
type Complex = {data: number[], output: (all: boolean) => number[]}

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

//union types
let myActualAge: number | string = 27;
myActualAge = "27";

//check types
let finalValue = "A string";
if (typeof finalValue == "number") {
    console.log('final value is a number');
}

//never
function neverReturns(): never {
    throw new Error('an error');
}

//nullable
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;


//practice
type BankAccount = { money: number, deposit: (val: number) => void }

let bankAccount: BankAccount = {
    money: 2000, 
    deposit(value: number): void {
        this.money += value;
    }
}

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Cris",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

// Classes
class Person {
    public name: string;
    private type: string;
    protected age: number = 27;

    constructor(name: string, public username: string, age: number, type: string) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    printAge() {
        console.log(this.age)
        this.setType("Old Guy")
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Steve", "steve1", 28, 'man');
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool Guy"); //won't work with private method


// Inheritance
class Cris extends Person {
    // name = "Cris";

    constructor() {
        super("Cris", "cris1", 22, 'cool');
    }
}

const cris = new Cris();
console.log(cris);


//Getters & Setters
class Plant {
    private _species: string = "Default";
    
    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default"
        }
    }

    get species() {
        return this._species;
    }
}

let plant = new Plant();
console.log(plant.species);

//Static Properties & Methods
class Helpers {
    //static means you can use the property or method without having to instantiate the class
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
//can't instantiate, can only be inherited from
abstract class Project{
    projectName: string = "Default";
    budget: number = 1000;

    //abstract methods means we don't declare logic here, but logic will need to be declared on the child class
    abstract changeName(name: string): void;

    calcBundget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

const newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);


// Practice
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;  
    }

    honk(): void {
        console.log("Toooooooooot!");
    }
 
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}
const car1 = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


class BaseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());


class Adult {
    private _firstName: string = "Bob";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

const jon = new Adult();
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

const PI = 2.99;

console.log(CircleMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(10,20))
console.log(PI); //2.99
