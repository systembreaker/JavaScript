let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let shownumber = 5;
document.write(`<h1>Show ${shownumber} Products</h1>`);
for (let i = 0; i < shownumber; i++) {
  document.write(`<di>`);
  document.write(`<h2>  -${i + 1}  ${products[i]}</h2>`);
  for (j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`${colors.join("|")}`);
  document.write(`</div>`);
}
