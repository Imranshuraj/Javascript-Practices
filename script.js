//Let's start

// console.log("Hello Anshu Coding Family");
// console.log('Hello imranshuraj');
// console.log("Hello Anshu Coding Family 'imranshuraj'");
// console.log('Hello Anshu Coding Family "imranshuraj"');

// //Naming convention

// let fullName = "Anshu Bhaiya";  // Variable is in camel case.
// console.log(fullName);

// let full_name = "Anshu Ji"; // Variable is in snake case.
// console.log(full_name); 

// let FullName = "Anshu"; // Variable is pascal form.
// console.log(FullName);


// //Three way to declare variables

// var age = 23; // age with var is creating a global scope variable.
//               //  var is the old way to declare variables.
// var age = 35; // ✅var can be re-declared.
// age = 36;     // ✅var can be updated.

// let num = 34; // num with let is creating a block scope variable.
//               // let is a new way to  declare variales and it introduced in ES6(ECMAScript 2015).
// let num = 35; // ❌let cannot be re-declared.
// num = 36;     // ✅It can be updated.

// const PI = 3.14; // PI with const is creating a block scope variable.
//                  // const is introduced in ES6(ECMAScript 2015).
// const PI = 3.3 ; // ❌const cannot be re-declared.
// PI = 3.4;        // ✅It cannot be updated.


//Scope

// //Block scope - written within {} 
// {
//   var a = 3;
//   let b = 4;
// }
// console.log(a); //It is also a global variable then it can be printed thier value
// // console.log(b); // b with let does not print thier value.

// //Function scope
// var a = 1;
// let b = 11;
// console.log(a);
// console.log(b);
// function message() {
//   a = 2; // update global value
//   b = 12; //update global value
//   var c = 3; //declare within function
//   let d = 13; //declare within function
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// }
// message();
// console.log(a);
// console.log(b);
// // console.log(c);
// // console.log(d);

// //Global scope
// var a = 4;
// let b = 2;
// console.log(a);
// console.log(b);
// function message() {
//   console.log(a);
//   console.log(b);
// }
// {
//   console.log(a);
//   console.log(b);
// }
// message();
// console.log(a);
// console.log(b);


//Data types 
// // Primitive - BBNNSSU (BigInt Boolean Null Number String Symbol Undefined)

// let a = BigInt("12345");

// let b = true;
// let c = false;

// let d = null;

// let age = 19;
// let price = 12.32;

// let firstName = "Anshu";

// let e = Symbol("#");

// let f;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(age);
// console.log(price);
// console.log(firstName);
// console.log(e);
// console.log(f);
// console.log("");
//////How to print typeof variable
// // console.log(typeof a);
// // console.log(typeof b);
// // console.log(typeof c);
// // console.log(typeof d);
// // console.log(typeof age);
// // console.log(typeof price);
// // console.log(typeof firstName);
// // console.log(typeof e);
// // console.log(typeof f);

// //Non-primitive (It is also known as reference type.)-> 
// // Object means collection of values. The key:value pair is stored inside the object.
// // Array means a type of object used to store ordered collection of data.
// // Function means also a type of object that can be invoked to perform a specific task.

// //Object

// //How to creates object
// const student = {
//   fullName : "Anshu",
//   age : 19,
//   rollNo : 21,
// };
// //How to print object
// console.log(student);
// //How to print typeof object
// console.log(student.fullName);
// //or
// console.log(student["fullName"]);
// //How to print typeof value of key of object
// console.log(typeof student["age"]);
// //How to assign new value in object
// student["fullName"] = "Anshu Raj";
// student.age = student.age + 2;
// console.log(student["fullName"]);
// console.log(student.age);
// console.log(student);
// console.log("");

// // //Create a const object called idCard to store information
// // const idCard = {
// //   fullName : "Anshu Raj",
// //   rollNo : 21,
// //   age : 19,
// //   session : "2023 - 2026",
// //   address : "On his residence"
// // };
// // console.log(idCard);
// // console.log(idCard.fullName);
// // console.log(idCard.rollNo);
// // console.log(idCard.age);
// // console.log(idCard.session);
// // console.log(idCard.address);


//Comments
//This is a single line comment
/*This is a multiple line commnet*/


// // Operators --> It is used to perform some operation on data
// //1. Arithmetic operators --> +,-,*,/,%,**(It is used for Exponention)
// let a = 23;
// let b = 2;
// console.log("a = ",a,"and b = ",b)
// console.log("a + b ",a + b);
// console.log("a - b ",a - b);
// console.log("a * b ",a * b);
// console.log("a / b ",a / b);
// console.log("a % b ",a % b);
// console.log("a ** b ",a ** b);

//2. Unary operator --> +,-,++,--

// // 2.1. Unary plus(+) -->Converts the operand into a number(if possible).
// let a = "43";
// console.log(+a);

// //2.2. Unary negation(-) -->Convert the operand into a number and negates it.
// let a = "4";
// console.log(-a);

// //2.3. Increment operator (++)
// //2.3.1. pre-increment(++x) --> Increment first, then returns the value.
// let a = 2;
// console.log(a);
// console.log(++a);
// console.log(a);
// //2.3.2. post-increment(x++) -->Returns first, then increment
// let a = 5;
// console.log(a);
// console.log(a++);
// console.log(a);

// //2.3. Decrement operator (--)
// //2.3.1. pre-increment(--x) --> Decrement first, then returns the value.
// let a = 8;
// console.log(a);
// console.log(--a);
// console.log(a);
// //2.3.2. post-increment(x--) -->Returns first, then Decrement
// let a = 6;
// console.log(a);
// console.log(a--);
// console.log(a);

// //3. Assignment operators --> =,+=,-=,*=,/=,%=,**=
// // Assignment operator is used to assign the value of right hand operand into left hand operand.
// let a = 2;
// console.log("a",a);
// // console.log("a += 1",a += 1);
// // console.log("a -= 1",a -= 1);
// // console.log("a *= 1",a *= 1);
// // console.log("a /= 1",a /= 1);
// // console.log("a %= 1",a %= 1);
// // console.log("a **= 2",a **= 2);

// //4. Comparision operator

// // Comprasion operator is used to compare two or more values and return a boolean (true and false) based on the comparsion.
// // 4.1. Equality operator
// // // 4.1.1. Loose equality operator (==)
// // // Compares two values for equality after type conversion(if needed).
// console.log(5 == "5"); //Loose equality operator converts string type 5 into number type 5 . so , it returns true.
// console.log(0 == false); //It returns true

// // // 4.1.2. Strict equality operator
// // // Compares two values for equality without type conversion
// console.log(5 === "5"); //It returns false because it does not convert type .
// console.log(0 === false); //It returns false.

// // // 4.2.1. Loose inequality operator (!=)
// // // Compares two values for inequality after type conversion(if needed).
// console.log(5 != "5"); //Loose inequality operator converts string type 5 into number type 5 . so , it returns faslse.
// console.log(0 != false); //It returns false

// // // 4.2.2. Strict inequality operator
// // // Compares two values for inequality without type conversion
// console.log(5 !== "5"); //It returns true because it does not convert type .
// console.log(0 !== false); //It returns true.

// // // 5. Relational operator -->greater than (>),less than (<),Greater than or equal to(>=), Less than or equal to (<=),
// console.log(10>5);
// console.log(10<5);
// console.log(10>=5);
// console.log(5>=10);
// console.log(10>=10);
// console.log(10<=5);
// console.log(5<=10);
// console.log(10<=10);

// // 6. Logical operator

// // // 6.1. Logical AND (&&)
// // // If both conditions/expressions are true then it retuurns true.
// console.log(true && true);
// console.log("a" === "a" && "b" === "b");
// console.log("b" === "a" && "b" === "b");
// console.log("a" === "a" && "b" === "a");
// console.log("a" === "b" && "b" === "a");

// // // 6.2. Logical OR (||)
// // //It becomes true if at least one condition/expression is true. and if both conditions / expressions are false then it returns false
// console.log(true || true);
// console.log("a" === "a" || "b" === "b");
// console.log("b" === "a" || "b" === "b");
// console.log("a" === "a" || "b" === "a");
// console.log("a" === "b" || "b" === "a");

// // // 6.2. Logical OR (!)
// // //Converts it to a boolean and returns the opposite.
// console.log(!true);
// console.log(!false);
// console.log(!("a"==="a"));
// console.log(!("a"==="b"));
// console.log(!("b"==="a"));
// console.log(!("b"==="b"));
