/*
  Function
  - Function Inside Function
  - Return Function


// Example 1

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 2

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 3

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));*/

// =========================================
function teset(num1, num2) {
  // let a = num1 * num2;
  function a2() {
    function b1() {
      return num1 + num2;
    }
    return b1();
  }

  return a2();
}
console.log(teset(20, 50));
console.log(teset(20, 100));
