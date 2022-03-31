// console.log(10 == "10");
// console.log(10 != "10");
// console.log(10==="10");
// console.log(10!=="10");
// console.log(10>"10");
// console.log(10>="10");
// console.log(10<20);
// console.log(10<=10);
// console.log(10 == "10" && 10 > 8 && 10 > 50);
// console.log(10 == "10" || 10 > 80 || 10 > 50);

// let a = 20;
// let b = 200;
// let c = 300;
// let E = 500;
// if (a > b) {
//   console.log("A is Smaller than B");
// } else if (b > a) {
//   if (E !== a) {
//     console.log("Fuck Of");
//   } else {
//     console.log("B is greater than A");
//   }
// } else {
//   console.log("Nothing is true");
// }
// ++++++++++++++++++++++++++++++++++
// let Name = "Alaa";
// let gander = "male";
// let Age = 10;
// Age === 20
//   ? console.log("Your Age is 20")
//   : Age < 20
//   ? console.log("your age is too young")
//   : Age > 20
//   ? console.log("your age is greater than 20")
//   : console.log("unknow Age");
// ********************************************************
/*
let a1 = ["Alaa", "Ahmad", "mosab", ["Ali", "Gamal", "David"]];
console.log(a1[3][1][2]);
console.log(Array.isArray(a1));
let rr = new Array(1, 3, 5);
console.log(rr);
console.log(a1.length);
a1[a1.length-1] = "MGM"
console.log(a1);
*/

//**********************************************
let a3 = [1, 2, 3, 5, 6];
a3.unshift(0, 22);
console.log(a3);
a3.push(44);
console.log(a3);
a3.shift();
console.log(a3);
a3.pop();
console.log(a3);
let a11 = [1, 2, 3, 4, 100, 346];
console.log(a11.indexOf(100));
console.log(a11.indexOf(3, 1));
console.log(a11.lastIndexOf(3,-2));
console.log(a11.includes(3));