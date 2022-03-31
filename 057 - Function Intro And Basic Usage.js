"use strict";
//This is a simple Function
function Alaa(U, age) {
  if (age < 30) {
    console.log(`sorry mr ${U} your Age dose not suitble For this App`);
  } else if (age > 30) {
    console.log(
      `Hi mr ${U} your Age is ${age} and its good  for Playing This Game `
    );
  } else {
    console.log(`Hi mr ${U} your Age is ${age}`);
  }
}
Alaa("Ajmad", 55);
Alaa("ALaa", 25);
Alaa("Ahmad", 33);
Alaa("Md", 31);
Alaa("B", 16);
Alaa("C", 15);
Alaa("Ha", 36);

// ++++++++++++++++
function year(start, end, exlude) {
  for (let i = start; i <= end; i++) {
    if (i === exlude) {
      continue;
    }
    console.log(i);
  }
}

year(1994, 2021, 1995);
