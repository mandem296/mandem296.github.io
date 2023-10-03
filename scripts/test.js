//declare a variable
let myVariable;
myVariable = "Good";
myVariable;

//tests for conditionals
let iceCream = "chocolate"; // String
if (iceCream === "chocolate") { // Conditional. use (strict equality operator) === to compare
  alert("Yay, I love chocolate ice cream!"); // Action
} else {
  alert("Awwww, but chocolate is my favorite…");
}

//tests for functions
function multiply(num1,num2) { // Function declaration: multiply. The arguments are num1 and num2
  let result = num1 * num2; // Variable declaration: result
  return result;// Return statement: Tells the function to return the value of result
}

multiply(4, 7);// Function call: multiply. The arguments are 4 and 7
multiply(20, 20);// Function call: multiply. The arguments are 20 and 20
multiply(0.5, 3);// Function call: multiply. The arguments are 0.5 and 3

//built in functions
let myText = document.querySelector('h1');
alert("Hello world!");

