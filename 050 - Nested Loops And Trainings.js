/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("*".repeat(10));
  console.log(products[i]);

  for (let c = 0; c < colors.length; c++) {
    console.log("+".repeat(10));
    console.log(colors[c]);
  }
  for (let m = 0; m < models.length; m++) {
    console.log("+".repeat(10));
    console.log(models[m]);
  }
}
