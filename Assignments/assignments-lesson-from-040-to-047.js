let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(-num + num, num)); // ["Ahmed", "Elham", "Osama"];

// ***************ASSi two *************************************
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift() + friends.pop();
console.log(friends); // ["Eman", "Osama"]

// ************three**************************
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr=arrTwo.reverse().concat(arrOne.reverse())
// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// ****************four****************************
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.splice(-1).toString().slice(2,6)
    .toUpperCase()); // ZERO
