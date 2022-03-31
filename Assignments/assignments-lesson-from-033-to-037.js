let numOne = 9;
// Condition Output => "009"

let numTwo = 20;
// Condition Output => "020"

let numThree = 110;
// Condition Output => "110"
if (numOne < 10) {
  console.log(`00${numOne}`);
}
if (numTwo > 10 && numTwo < 100) {
  console.log(`0${numTwo}`);
}
if (numThree >= 110) {
  console.log(numThree);
}
// ++++++++++++++++++++++++++++++++++++++++++++++
let num1 = 9;
let str = "9";
let num2 = "20";

// Output
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
} else if (num1 === str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
} else {
  num1 !== num2;
  console.log("{num1} Is Not The Same Value Or The Same Type As {num2}");
}
// +++++++++++++++++++++++++++++++++++++++++
let num1 = 10;
let num2 = 30;
let num3 = "30";
if (num3 > num1 && num3 !== num2) {
  console.log("{num3} Is Larger Than {num1} And Not The Same Type As {num2}");
} else if (num3 > num1 && num3 == num2 && num3 !== num2) {
  console.log(
    "{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}"
  );
} else if (num3 !== num1 && num3 !== num2) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}
// +++++++++++++++++++++++++++++++++++++++++
// Edit What You Want Here

var num1 = 11;
var num2 = 8;
var num3 = 11;
var num4 = 35;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
