// ++++++++++++First++++++++++++++++++++++++++++++++++++++++++++
function sayHello(theName, theGender) {
  if (theGender === "male") {
    console.log(`Helle mr ${theName}`);
  } else if (theGender === "female") {
    console.log(`Helle miss ${theName}`);
  } else {
    console.log(`Helle  ${theName}`);
  }
}
sayHello("Alaa", "male");
sayHello("Eman", "female");
sayHello("Eman");
// ++++++++++++++++++Two++++++++++++++++++++++++++++++++++++++++++
console.log(`+++++++++++++++++++++++Two+++++++++++++++++++++++++++++`);
function calculate(firstNum, secondNum = "", operation) {
  if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  } else if (secondNum === "") {
    console.log("Second Number Not Found");
  } else {
    console.log(firstNum + secondNum);
  }
}

calculate(20);
calculate(20, 30);
calculate(20, 30, "add");
calculate(20, 30, "subtract");
calculate(20, 30, "multiply");

// +++++++++++++++++++++++Three++++++++++++++++++++++++++++++++++++
console.log(`+++++++++++++++++++++++Three+++++++++++++++++++++++++++++`);
function ageInTime(theAge) {
  if (theAge > 100 && theAge < 10) {
    console.log(" Age Out Of Range");
  }
}
ageInTime(110);

// +++++++++++++++++++++++++foure++++++++++++++++++++++++++++++++++++++

console.log(`+++++++++++++++++++++++Four++++++++++++++++++++++++++++++`);
function showinfo(uname, age, Status) {
  if (typeof uname === "string" && typeof age === "number" && Status === true) {
    return `Hello ${uname}, Your Age Is ${age}, You Are Available For Hire`;
  } else if (
    typeof uname === "number" &&
    typeof age === "string" &&
    Status === true
  ) {
    return `Hello ${age}, Your Age Is ${uname}, You Are Available For Hire`;
  } else if (
    uname === true &&
    typeof age === "number" &&
    typeof Status === "string"
  ) {
    return `Hello ${Status}, Your Age Is ${age}, You Are Available For Hire`;
  } else {
    uname === false && typeof age === "string" && typeof Status === "number";
    return `Hello ${age}, Your Age Is ${Status}, You Are Not Available For Hire`;
  }
}

console.log(showinfo("Osama", 38, true));
console.log(showinfo(38, "Osama", true));
console.log(showinfo(true, 38, "Osama"));
console.log(showinfo(false, "Osama", 38));
console.log(`++++++++++++++++++++Five++++++++++++++++++++++++++++++++++`);

// ++++++++++++++++++++++Five++++++++++++++++++++++++++
// function cr(startYear, endYear) {
//   for (let i = startYear; i <= endYear; i++) {
//     let sl = document.createElement("select");
//     sl.innerHTML = `${i}`;
//     document.body.appendChild(sl);
//   }
// }
// cr(2000, 2021);
console.log(`++++++++++++++++++++Six++++++++++++++++++++++++++++++++++`);
// ++++++++++++++++++++++++++++++++++++Six+++++++++++++++++++++++++++++++++++++++++++
function m(...num) {
  let re = 1;
  for (let i = 0; i < num.length; i++) {
    re *= num[i];
  }
  if (num === "string") {
    return;
  }
  return `Final Result Is ${re}`;
}
console.log(m(10, 20, "5alaa", 66));
