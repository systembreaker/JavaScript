//let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
// console.log(myFriends.sort());
// console.log(myFriends.reverse());
// console.log(myFriends.sort().reverse());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 5));
// console.log(myFriends.slice(1, -4));
// console.log(myFriends.slice(-4));
//splicing Array

// myFriends.splice(0, 5, "Alaa");
// console.log(myFriends);
//
/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter).reverse()); // ["Elham", "Mazero"]
console.log(my.slice(zero, -counter).reverse().toString().slice(0, 2)); // "Elzero"

console.log(
  my.slice(zero, -counter).toString().slice(4, 6).charAt(0).toLowerCase() +
    my.slice(zero, -counter).toString().slice(5, 6).charAt(0).toUpperCase()
); // "rO"
