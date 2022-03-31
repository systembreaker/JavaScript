/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
 var a = 10;
 let b = 20;
 console.log(`Function - From Local ${a}`);
 console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();

// ++++++++++++++++++++++++++++++++++++++++++
/**
 * My Code
 */

// GLOBAL SCOPE EXAMPLE *
var a = 900;
let b = 800;

function A() {
 console.log(a + b);
}
A();
// **********************
// Local Scope Example

function c() {
 let a = 20;
 var b = 9000;
 console.log(`This is local scope ${a}`);
 console.log(`This is local scope ${b}`);
}
c();
