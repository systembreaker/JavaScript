/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"

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
// =====================================
function showDetails(Name, Age, status) {
  typeof Name === "string" && typeof Age === "number" && status === true
    ? console.log(
        `Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`
      )
    : typeof Name === "number" && typeof Age === "string" && status === true
    ? console.log(
        `Hello ${Age}, Your Age Is ${Name}, You Are Available For Hire`
      )
    : Name === true && typeof Age === "number" && typeof status === "string"
    ? console.log(
        `Hello ${status}, Your Age Is ${Age}, You Are Available For Hire`
      )
    : console.log(
        `Hello ${status}, Your Age Is ${Age}, You Are Available For Hire`
      );
}
console.log(showDetails("Osama", 38, true));
console.log(showDetails(38, "Osama", true));
console.log(showDetails(true, 38, "Osama"));

