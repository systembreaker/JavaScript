/*
  Loop Control
  - Break
  - Continue
  - Label
*/

let products = ["Keyboard", 1, 2, 36, 55, 89, "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break mainLoop;
//     }
//   }
// }

for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);
}
