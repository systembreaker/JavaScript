/*  How To add Html Elments using js file
  باستخدام الجافا سكربت html كيفيه اضافه عنصر الى صفحه 
*/
let a = document.createElement("h1");
a.innerHTML = "Elzero";
document.body.appendChild(a);
//Add An ID to html tag
a.id = "el";
//Add css Style to html tag
a.style.cssText =
  "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial";
console.log(
  "%c Elzero %c Web %c School",
  "color:red;font-size: 40px",
  "color:green;font-size: 40px;font-weight: bold;",
  "background-color:blue;font-size: 40px"
);
//++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log("this is Console Groupe");

console.group("group one");
console.log("msg one");
console.log("msg two");
console.group("chiled group");
console.log("msg one");
console.log("msg two");
console.group("grand Group");
console.log("msg one");
console.log("msg two");

console.groupEnd();
console.groupEnd();
console.group("two");
console.log("msg one");
console.log("msg two");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.table(["Ahmad", "Alaa", "Amjad"]);

// console.log("Iam In Console");
/*
document.write("Iam In Page");*/
//--------------------------------------------------------------
/*
assignments-lesson-from-010-to-017
 */
let NumberOne = 10;
let Numbertwo = 20;
console.log(NumberOne + Numbertwo);
console.log(typeof NumberOne, typeof Nmbertwo);
console.log(`${NumberOne} ${Numbertwo}`);
console.log(typeof +` ${NumberOne} ${Numbertwo}`);
console.log(Numbertwo + "\n" + NumberOne);
console.log(`${NumberOne} 
${Numbertwo}`);
//-----------------------------------------------------------------
let elzero = `
<div class="elzero">
<p>Elzero</p>
</div>
`;
console.log(`elzero.innerHTML`); // object
console.log(typeof elzero);
// -----------------------------------------------------------------

console.log(
  'i\'m in \n\\\\ \n Love \\\\ """ \'\'\' \n ++ with ++ \n \\"""\\"""  \n ""javascript""'
);
//-------------------------------------------------------------------------------------------

let c = 21;
let b = 20;
console.log(`_${c}_2021_2021_2021_${b}_`);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let title = "Elzero",
  Description = "Elzero Web School",
  Date = "25 / 10";

let div = `
<div class="card">
<div class="t">
<h3> hello ${title}</h3>
<p>${Description}</p>
<span>${Date}</span>

</div>
</div>

`;
document.write(`${div.repeat(4)}`);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
assignments-lesson-from-018-to-022
*/
// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 + 3 + 190 + 10 - 400); // 0
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
let num = 3;

// Solution One
console.log((num += num)); // 6

// Solution Two
console.log((num *= true)); // 6

// Soultion Three
console.log((num *= num / num)); // 6

// Soultion Four
console.log(num - true + true); // 6

// Solution Five
console.log(num * true); // 6

// Solution Six
console.log(num); // 6
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log((+num * +num) / +num + +num); // 20

// Solution Three
console.log(+num * +true + +num); // 20

// Solution Four
console.log((+num - +num) / +num + +num + +num); // 20
