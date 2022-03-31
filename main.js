/*
Output To Screen
1- windows.alert
2- document.write
3- console.log
*/

// window.alert('welcom Back');
document.write("Welcome for js file");
console.log("Welcom Back Coder");
// ++++++++++++++++++++++++++++++++++++++++++

/* Console method
1- log
2- error
3- table
*/
console.log("Console Method +log+");
console.error("Dont Mess With js");
console.table(["Ahmad", "Alaa", "Ali"]);

// ++++++++++++++++++++++++++++++++++++++++++

/*
styleing Cosole
 directive :%c
*/
console.log("Welcome From %cJs File", "color:blue;font-size:30px;");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Data Type and Type of Opertator
1- string
2- number
3- boolean
4- array
5- object
6- undefine
7- null
*/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
  11-Variables Intro
  - What Is Variable ?
  هي عباره عن متغير يمكن استخدامه اكثر من مره في اكثر من موقع
  - Why We Use Variables ?
  لتسهيل عمليات البرمجه
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  var a= "user";
  - Variable Without Var
  a="user"
  - Multiple Variables In The Same Line
  var a= "user",age=14;
  - Id And Global Variable
   يعتبر متغير [id ] لديه [html]اي عنصر من عناصر  
   
  - Loosely Typed vs Strongly Typed
  لا يوجد حاجه لتعريف لغه الجافا سكربت  بنوع المتغير
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
 12-Identifiers Name Conventions And Rules
 
 
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 13-compar between [var,let,conset]
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
 14- String Syntax + Character Escape Sequences
  \ Escape + Line Continue
  \n
*/

console.log('Alaa is\\ "School"');
console.log("Alaa is\\ 'School'");
console.log('Alaa is\\ "School"');
console.log("Alaa is\\Web 'School'");
console.log("Alaa is\\web \
School");
console.log("Elzero\nWeb\nSchool");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
15-  Concatenation
*/

let a = "We Love";
let b = "JavaScript";

document.write(a + " " + b);

console.log(a, b);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
 16- Template Literals (Template Strings)
*/

// First Example

let at = "We Love";
let b2 = "JavaScript";
let c3 = "And";
let d4 = "Programming";

console.log((at = ' "" ' + b2 + "\n" + c3 + " " + d4));

console.log(`${at} "" '' \\ ${b2}
${c3} ${d4}`);

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
  18-Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/

console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
 19 - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
  Assignment Operators
*/

let aq = 10;

aq = aq + 20;

aq = aq + 70;

aq += 100; // a = a + 100

aq -= 50; // a = a - 50

aq /= 50; // a = a / 50
let aw = 10;
aw = aw + 30;
aw = aw + 20;
aw += 40;
console.log(aw);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 23
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
24
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());
console.log((100.1).toString());

console.log((100.554555).toFixed(2));

console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt("100 Osama"));
console.log(parseInt("Osama 100 Osama"));
console.log(parseInt("100.500 Osama"));
console.log(parseFloat("100.500 Osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Osama" / 20));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
25--
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
27
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*28
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let a = "Elzero Web School";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 8));
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15

console.log(a.slice(2, 6));
console.log(a.slice(-5, -3));

console.log(a.repeat(5));

console.log(a.split("", 6));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 29  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let a = "Elzero Web School";

console.log(a.length);

console.log(a.substring(2, 6));
console.log(a.substring(6, 2));
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 5, a.length - 3));

console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));

console.log(a.startsWith("E"));
console.log(a.startsWith("E", 2));
console.log(a.startsWith("zero", 2));

console.log(a.endsWith("l"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
31
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");
// *****************************************************************

/*
33
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
   Block Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);
// *****************************************************

/*
34
  Nested If
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}

console.log(price);

// ************************************************************
035;
/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");
// ++++++++++++++++++++++++++++++++++++++
/*
36
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price = 0;

console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);
