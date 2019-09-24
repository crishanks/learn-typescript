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
