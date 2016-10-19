// string
let myName: string = 'Max';
// myName = 28;

// number
let myAge: number = 28;
// myAge = 'max';

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 0;

// assign types
let myRealAge: number;
// myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports", true]; // using any[] because arr holds different types
hobbies[3] = 100;                               
// hobbies = 55;                         
console.log(hobbies);

//tuples
let address: [string, number] = ["Superstreet", 99]; //tuple contains two elms string, number

// enum
enum Color {
  Blue,
  Black = 100,
  White 
}

let myColor: Color = Color.Black;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2
}
console.log(multiply(5,5));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(20, 4));

// objects
let userName: { name: string, age: number } = {
  name: "Max",
  age: 28
};
// userName = {
//   a: "hello",
//   b: 28
// };

// complex objects
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 25, 72, 2000],

  output: function(all: boolean): number[] {
      return this.data;
  }
};

// type alias *same type as let complex above #Awesome*
type complexType = {data: number[], output: (all: boolean) => number[]} 

// passing in the newly defined type complexType to complex2 type e.g let complex2: complexType = ...
// complex2 = {};
let complex2: complexType = {
  data: [100, 25, 72, 2000],

  output: function(all: boolean): number[] {
      return this.data;
  }
};


// union types
let myRealRealAge: number | string = 28;
myRealRealAge = "28";
// myRealRealAge = true; 

// check types
function finalValue(unknownValue: any):void{
  if (typeof unknownValue == "string"){
    console.log("The value is a string");
  } else if (typeof unknownValue == "number"){
    console.log("The value is a number");
  }else if(typeof unknownValue == "boolean"){
    console.log("The value is a boolean");
  }else if(typeof unknownValue == "void"){
    console.log("The value is void");
  }else if(typeof unknownValue == "any"){
    console.log("The value is type any");
  }else if(typeof unknownValue == "any[]"){
    console.log("The value is a array");
  }
}

// never
function neverReturns(): never {
  throw new Error('Ann error!');
}




// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: string | null = null;
canThisBeAny = "Hello";
// canThisBeAny = 12;
//set in tsconfig "strictNullChecks": true


