function stauts(username, age) {
  if (age < 20) {
    console.log(
      ` hi mr ${username} your age is ${age} and its to young to start this App`
    );
  } else if (age > 20) {
    console.log(
      ` hi mr ${username} your age is ${age} and its Ok to start this App`
    );
  } else {
    console.log("Go Back when you got Older 😂😂😂😂");
  }
}
stauts("A", 19);
stauts("b", 20);
stauts("c", 22);
stauts("d", 26);
stauts("e", 50);
stauts("g", 30);

// ********************Another Advanced Exam*************************

function genyear(start, end, ex) {
  for (let i = start; i <= end; i++) {
    if (i === ex) {
     console.log("bad year");
    }
    console.log(i);
  }
}
genyear(1994, 2020, 2018);
