//Let's start

// console.log("Hello Anshu Coding Family");
// console.log('Hello imranshuraj');


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

// // console.log(typeof a);
// // console.log(typeof b);
// // console.log(typeof c);
// // console.log(typeof d);
// // console.log(typeof age);
// // console.log(typeof price);
// // console.log(typeof firstName);
// // console.log(typeof e);
// // console.log(typeof f);

//Non-primitive (It is also known as reference type.)-> 
// Object means collection of values. The key:value pair is stored inside the object.
// Array means a type of object used to store ordered collection of data.
// Function means also a type of object that can be invoked to perform a specific task.

//How to creates object



