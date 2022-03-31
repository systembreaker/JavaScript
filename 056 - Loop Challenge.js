/*
  Loop Challenge
*/
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Olga",
  "Amany",
  "Samia",
  "Anwar",
  "Saleem",
  "Alaa",
  "Ofek",
];
let counter = 3;
let auto = 5;
for (let f = 0; f < auto; f++) {}
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
}
document.write(`<div><h1> We have  ${myAdmins.length - 2} Admins</h1></div>`);
document.write(`<hr>`);
for (let x = 0; x < counter; x++) {
  document.write(
    `<div><h1> the admin of team ${x + 1} is ${myAdmins[x]}</h1><hr></div>`
  );
  document.write(`<h3> The Team Memebers:</h3> 
`);

  if (myAdmins[x].charAt(0) === "A") {
    for (let xx = 0; xx < myEmployees.length; xx++) {
      if (myEmployees[xx].charAt(0) === "A") {
        myAdmins.push(myEmployees[xx]);

        document.write(` 
         ${myEmployees[xx]}<br>`);
      }
    }
  } else if (myAdmins[x].charAt(0) === "O") {
    for (let xx = 0; xx < myEmployees.length; xx++) {
      if (myEmployees[xx].charAt(0) === "O") {
        myAdmins.push(myEmployees[xx]);
        document.write(`  ${myEmployees[xx]}<br>`);
      }
    }
  } else if (myAdmins[x].charAt(0) === "S") {
    for (let xx = 0; xx < myEmployees.length; xx++) {
      if (myEmployees[xx].charAt(0) === "S") {
        myAdmins.push(myEmployees[xx]);
        document.write(` ${myEmployees[xx]}<br>`);
      }
    }
  }
}

// *********************************************************
