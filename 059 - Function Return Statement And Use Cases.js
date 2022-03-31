/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
}

generate(10, 20);

// ++++++++++My Code+++++++
function su(n1, n2, n3) {
  return n1 + n2 + n3;
}
let result = su(100, 200, 600);
console.log(result);

// +++++++++++ Another Example for return +++++++++++++++++

function x(y1, y2) {
  if (y1 > y2) {
    return y1 * y2;
  } else {
    return y1 + y2;
  }
}

let rx = x(10, 15);
console.log(rx+10);
