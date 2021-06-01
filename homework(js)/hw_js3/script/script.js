'use strict';

let First = +prompt('Enter the first number');
let Second = +prompt('Enter the second number');
let Operation = prompt('Enter operation sign'); 

function calculator(First, Second, Operation) {
  switch (Operation) {
    case '+':
      return First + Second;
    case '-':
      return First - Second;
    case '*':
      return First * Second;
    case '/':
      return First / Second;
  }
}
alert(calculator(First, Second, Operation));