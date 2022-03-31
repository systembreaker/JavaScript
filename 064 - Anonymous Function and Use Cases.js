/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;

setTimeout(function elzero() {
  console.log("Good");
}, 2000);
// ========================================================
document.getElementById("show").onclick = function () {
  document.write("Wlcome back alaa");
};
// ===========another anonymouse function=======================

let a = function (a1, a2) {
  return a1 + a2;
};
document.write(a(500, 90000));

// ======using this to do somthing on time==============
setTimeout(function () {
  console.log("ldkfjlkasdjgflkasdgf");
}, 3000);
