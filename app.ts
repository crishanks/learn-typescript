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