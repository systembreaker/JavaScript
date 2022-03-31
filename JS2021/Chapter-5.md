040 - Array Big Introduction(مقدمه عن المصفوفات)

```js
/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/
```

- How To create Array With 2 Method's (انشاء مصفوفه بطريقتين)

  *Method One:(الطريقه الاولى)

  ```js
  let arr=["Ahmad","Alaa","Ali","Alina"];
  ```

  *Method Two:(الطريقه الثانيه)

  ```js
  let c=new array(1,2,3,4);
  ```

- How To Access Array Element's (كيفيه الوصول الى عناصر المصفوفه)

  يمكن ان نصل الى عناصر المصفوفه من خلال الاندكس الخاص بالعنصر او موقع العنصر

  ```js
  console.log(arr[2]);//==>The Result is Ali
  console.log(arr[3]);//==>The Result is Alina
  ```

- Nested Arrays(المصفوفه المتداخله)

  ```js
  let br=[1,2,3,4,[5,6,9]];
  ```

- Change Arrays Elements (تغيرعناصر المصفوفه) 

  ```js
  let arr=["Ahmad","Alaa","Ali","Alina"];
   arr[1]="Gamal";
  //The Result is 
  arr=["Ahmad","Gamal","Ali","Alina"]
  ```

  *يمكن تغير المصفوفه المتداخله

- Check For Array Array.isArray(arr);(التحقق من المصفوفه)

```js
let arr=["Ahmad","Alaa","Ali","Alina"];
console.log(Array.isArray(arr));// The Result is True
```







041 - Using Length With Array (استخدام طريقه الطول مع المصفوفه)

** الطول يسبق الموقع بواحد 

- How To use Length With Array

```js
let a1=[1,2,3,4];
console.log(a.length) // The Result is 4
```

- How To Add Value To Array Using Length (كيفيه اضافه عنصر الى المصفوفه باستخدام الطول)

```js
let a1=[1,2,3,4];
a1[a1.length]=10 // The result is a1[1,2,3,4,10]
```

- How To Update The last Value in Array (كيفيه تحديث اخر قيمه في المصفوفه بشكل الي )

```js
let a1=[1,2,3,4];
a1[a1.length-1]=10 // The result is a1[1,2,3,10]
```



042 - Add And Remove From Array (اضافه او  حذف عناصر من المصفوفه)

```js
/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/
```

- Add Methods:

  1. unshifit // اضافه مجموعه من العناصر في بدايه المصفوفه

     ```js
     let a=[1,2,3,4];
     a.unshift(10,34);
     console.log(a) // The Result is [10,34,1,2,3,4]
     ```

   2. Push // اضافه مجموعه من العناصر في اخر المصفوفه

      ```js
      let a=[1,2,3,4];
      a.push(100,54);
      console.log(a) // The Result is [,1,2,3,4,100,54]
      ```

- Remove Methods:

  1. Shift  // حذف مجموعه من العناصر من بدايه المصفوفه

     ```js
     let a=[10,34,1,2,3,4];
     a.shift();
     console.log(a) // The Result is [34,1,2,3,4]
     ```

  2. Pop // حذف مجموعه من العناصر من نهايع المصفوفه

     ```js
     let a=[1,2,3,4,100,346];
     a.pop();
     console.log(a) // The Result is [1,2,3,4,100]
     ```

     

043 - Searching Array (البحث داخل المصفوفات)

```js
/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/
```

1. indexof (تستخدم لمعرفه موقع العنصر داخل المصفوفه)

   ```js
   let a=[1,2,3,4,100,346];
   console.log(a.indexof(100)) // The result is 4
   console.log(a.indexof(3,1)) // The Result is 2
   ```

   

2. lastindexof (تستخدم لمعرفه موقع اخر العنصر داخل المصفوفه)

   ```js
   let a=[1,2,3,4,100,346];
   console.log(a.lastIndexof(100)) // The result is 4
   console.log(a.lastIndexof(3,1-)) // The Result is 2
   ```

3. Includes (تستخدم للاستعلام عن وجود عنصر ما داخل المصفوفه)

   ```js
   let a=[1,2,3,4,100,346];
   console.log(a.includes(100)) // True
   console.log(a.includes(55)) //False
   ```

   



044 - Sorting Array