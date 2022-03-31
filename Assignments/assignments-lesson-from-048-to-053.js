"use strict";
/*
let start = 10;
let end = 100;
let exclude = 40;

// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;

for (let i = 0; i < end; ) {
    i = i + start;
    if (i === exclude) {
        continue;
    }
    console.log(i);
}
*/

// ++++++++++++++++ Two++++++++++++++++++++++++++++
let start = 10;
let end = 0;
let stop = 3;

/*
// Output
10;
09;
08;
07;
06;
05;
04;
03;*/
// start = start.toString();
/*
for (i = 0; i < start; i++) {
  if (i === stop) {
    break;
  }
  a.push(i + 1);
  console.log(i + 1);
}
// console.log(` ${i.reverse()}`);
*/
// +++++++++++++++++++++++++++three++++++++++++++++++++++++++++++++++++++
// ----------------------------

let a = 0;
let b = 10;
let c = 3;
let f = [];
for (let i = c; i <= b; i++) {
  if (i < 10) {
    console.log(`${a} ${i}`);
  } else {
    console.log(i);
  }
  // console.log(i);
}
