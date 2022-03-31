031- Comparison Operators(عمليات المقارنة)

```javascript
== Equal ➡➡[يساوي]
!= Not Equal ➡➡ [لا يساوي]
=== Identical ➡➡[مطابق]
!== Not Identical ➡➡ [ غير مطابق]
> Larger Than ➡➡[ اكبر من]
>= Larger Than Or Equal ➡➡ [اكبر من او يساوي]
< Smaller Than ➡➡ [اصغر من]
<= Smaller Than Or Equal ➡➡ [اصغر من او يساوي]
```

* Equal (== )compar value only ➡ تقارن القيم فقط 

  ```javascript
  console.log(10=="10")// compare value only [true] النتيجه
  ```

* Not Equal (!=) compare value only ➡ تقارن القيم فقط

  ```javascript
  console.log(10!="10");// compare value only [true] النتيجه
  ```

* Identical (===) compar value +type ➡ يقارن القيمه مع النوع

  ```javascript
  console.log(10==="10");// compare value+type [false] النتيجه
  ```

* Not Identical (!== )compar value +type ➡ يقارن القيمه مع النوع

  ```js
  console.log(10!=="10"); // compare value+type [true] النتيجه 
  ```

* Larger Than (>)

  ```js
  console.log(10>"10"); [false] النتيجه
  ```

* Larger Than or Equal (>=)

  ```js
  console.log(10>="10"); [true] النتيجه
  ```

* Smaller Than (<)

  ```js
  console.log(10<"10"); [false] النتيجه
  ```

* Smaller Than or Equal (<=)

  ```js
  console.log(10<="10"); [true] النتيجه
  ```

  

032 - Logical Operators (العمليات المنطقيه)

```js
!➡➡ Not [Make True to false And False To True]
&& ➡➡And 
|| ➡➡Or
```

- Not (!) ➡[يعمل على جعل الصح خطأ والخطأ صح]

  ```js
  console.log(!(10=="10")); [False] النتيجه
  ```

- And(&&) ➡ [يجب تحقيق جميع الشروط] 

  ```js
  console.log(10 == "10" && 10 > 8 && 10 > 50); [False] النتيجه
  ```

- OR (||)➡[يجب تحقيق احد الشروط]

  ```js
  console.log(10 == "10" || 10 > 80 || 10 > 50); [True] النتيجه
  ```


033 -  If Conditions (الجمل الشرطيه)

```javascript
if					
else if				
else
```

* How To write If Conditions  كيفيه كتابه ال 

  ```js
  key(condition){
  block Of Coder
  }
  ---------------------
  if(condition){
    The code here
  }
  ```

> Exampel:
>
> ```javascript
> let A=20;
> let B=50;
> let c=80;
> if(A<B){
>   console.log("A is Smaller Than B")
> }else if(B>A){
>   console.log("B is Greater Than A")
> }else if(B<C){
>   console.log("B is Smaller Than C")
> }else{
>   console.log("Non is True😐😐😐😐😐")
> }
> ```
>
> 

034 - Nested If Conditions (جمله الشرط المتداخله)

```js
let a = 20;
let b = 200;
let c = 300;
let E = 500;
if (a > b) {
  console.log("A is Smaller than B");
} else if (b > a) {
 ➡➡ if (E !== a) {
    console.log("Fuck Of");
  } 
  ➡else {
    console.log("B is greater than A");
  }
} else {
  console.log("Nothing is true");
}

```





035 - Conditional Ternary Operator (الجمله الشرطيه المختصره)

- How to write Conditional Ternary Operator كيفيه كتابه ال

```js
condition ?if true :if false 
(الشرط)?(في حاله الصواب)?(في حاله الخطأ)
```

Example

```js
let Age=50;
Age===50?console.log("You Are To Old"):console.log("You are To young");
```

Example For Else

```js
let Age = 10;
Age === 20
  ? console.log("Your Age is 20")
  : Age < 20
  ? console.log("your age is too young")
  : Age > 20
  ? console.log("your age is greater than 20")
  : console.log("unknow Age");

```

 

036 - Nullish Coalescing Operator & Logical Or ()

```js
/*
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
```





037 - If Condition Challenge

```js
/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if ("????" === "w") {
  console.log("Good");
}

if ("????" !== "string") {
  console.log("Good");
}

if ("????" === "number") {
  console.log("Good");
}

if ("????" === "ElzeroElzero") {
  console.log("Good");
}
```

- The Soluotion : https://codepen.io/systembreaker/pen/MWoRoaK





038 - Switch Statement:

```js
اليه عمل السويتش نفس عمليه ال الاف
The switch statement alost like the if statement
```

- How to write The Switch Statement:

  ```js
    switch(expression) {
      Case 1:
        // Code Block
        break;
      Case 2:
        // Code Block
        break;
      Default:
        // Code Block
    }
  ```

  - [x] Example:

    ```js
    let day = "A";
    
    switch (day) {
      default:>>>>>>>>>>>>>>>>>>>>>>>>>>>>//we should Add deafult value in switch statement
        console.log("Unknown Day");
        break;
      case 0:
        console.log("Saturday");
        break;
      case 1:
        console.log("Sunday");
        break;
      case 2:
      case 3:
        console.log("Monday");
        break;
    }
    ```

    

039 - Switch And If Condition Challenge:

( (if And switch) التحدي عباره عن تحويل بين الحالتين )

```js
/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
```

> - The soluotion : https://codepen.io/systembreaker/pen/KKqYmGj

