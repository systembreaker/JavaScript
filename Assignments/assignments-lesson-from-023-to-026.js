console.log(100_00_0); // 100000
console.log(100e3); // 100000
console.log(5e4 * 2); // 100000
console.log(1e5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10 ** 5); // 100000
console.log(10_0_000); // 100000
console.log(1_0_0_0_0_0); // 100000
console.log(10e3 * 10); // 100000
console.log(5e3 * 20); // 100000
console.log(1e3 * 1e2); // 100000
console.log(1e3 * 100); // 100000
console.log(500 * 200); // 100000
console.log("++++++++++++++++++++++++++++++++++++++");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
console.log("++++++++++++++++++++++++++++++++++++++");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Number.MAX_SAFE_INTEGER);
console.log("++++++++++++++++++++++++++++++++++++++");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let myVar = "100.56789 Views";

console.log(Number.isInteger(parseInt(myVar))); // 100
console.log(Number.isInteger((100.56789).toFixed(2))); // 100.57
console.log("++++++++++++++++++++++++++++++++++++++");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let num1 = 10;

console.log(Number.isInteger((num1 + num1) / num1)); // 2
console.log("++++++++++++++++++++++++++++++++++++++");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(parseInt(Math.ceil(--flt))); // 10
console.log("++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math.floor(Math.random() * 4) + 1); // 0 || 1 || 2 || 3 || 4
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
