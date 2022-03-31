// Main Code
/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
 let x = 50;
 console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);
/*
my code

first we should use let to declear a varubils because when we use var at  on local scope it will over write on the global scope 
*/
let a = 10;
function al() {
 let a = 200;
 console.log(a);
}
al();
