// let a = ["alaa", "ahmad", "ali", "amira", "osama", "ooo"];
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }
// ***********************************************
// this example return the string value in a new array
let c = ["alaa", 5, 2, 6, "ahmad", "ali", "amira", "osama", 99, 66, 87, "ooo"];
let b = [];
for (i = 0; i < c.length; i++) {
  if (typeof c[i] === "string") {
    b.push(c[i]);
  }
}
console.log(b);
