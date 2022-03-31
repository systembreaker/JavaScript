/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print = function () {
 return 10;
};

let print = () => 10;

let print = function (num) {
 return num;
};

let print = num => num;

let print = function (num1, num2) {
 return num1 + num2;
};

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

/*My Coder*/

// simple arrow function with on parameter
let arr = (num, n2) => num * n2;
console.log(arr(200, 60000));
// ++++++++++++++++++++++++++++

//simple function with tow parameters
let ar = (num1, num) => {
 return num1 + num;
};

console.log(ar(2, 50));

// ++++++++++++++++++++++
// use underscore

let a = _num => _num;
console.log(a(600));
// ++++++++++++++++++++++++++
