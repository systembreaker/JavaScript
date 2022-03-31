let mynum = [1, 2, 3, 4, 5, 6];
newar = [];
for (let i = 0; i < mynum.length; i++) {
 newar.push(mynum[i] + mynum[i]);
}
console.log(newar);
// =============with Map===========
// let b = mynum.map(function (elment, index, ar) {
//  return elment + elment;
// });
// console.log(b);
// ========arrow function================
let b1 = mynum.map(elment => elment + elment);

console.log(b1);
