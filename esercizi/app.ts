console.log("Your code goes here...");
// add a function with 4 argument with condition of showResult and return sun
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(phrase + n1 + n2);
  } else {
    return n1 + n2;
  }
}
//create 4 const number
const number1 = 10;
const number2 = 5;
const printResult = true;
const resultPhrase = "Result is :";
//use add method and create a const result
const result = add(number1, number2, printResult, resultPhrase);

//result
console.log(result);
