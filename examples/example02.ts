
let variable = "Test";
function reset(){
  let variable = "Second Test";
  console.log(" Global ",this.variable);
  console.log(" Local Scope ",variable);
}
reset();

// Arrow sunctions
console.log("ARROW FUCNTIONS");

const addNumbers = function(numer1: number, number2: number): number{
  return numer1 + number2;
};
console.log(addNumbers(20,50)); 

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
console.log(multiplyNumbers(100, 100));

const multiplyNumbersOnTwoLines = (number1: number, number2: number): number => {
  return number1 * number2;
};
console.log(multiplyNumbersOnTwoLines(50,50));

const greet = () => {
  console.log('hello');
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Manu");

// Default Parameters

const countdown = (start: number = 10): void => {
  while(start > 0 ) {
    start--;
  }
  console.log("DOne!", start);
};
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1,2,3,4,5];
console.log(Math.max(1,2,3,4,5));
console.log("passing in an array to the max operator", Math.max(...numbers));

function makeArray(name: string, ...args: number[]){
  return args;
} 
console.log(makeArray("instacode", 5,6,9,7,4,10));