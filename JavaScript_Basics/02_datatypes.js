"use strict";//treat all js code as modern js or new versions

// alert("hello world");//we are using  node js not browser so alert will not work here
//ecma script 2015 -> modern js---it defines the standards for js
//datatypes in js

//number
//bigInt
//string
//boolean
//undefined =>value is not assigned to variable
//null =>representation of empty value
//symbol =>defines unique identifiers for objects

//object

console.log(typeof("hitesh"));
console.log(typeof(null));//=>object (bug in js)
console.log(typeof undefined);//=>undefined


//Data is categorize on the basis how it is tored and access in the memory
//there are two types of datatypes
//1. "Primitive datatypes" => stored in stack memory
//used as call by value
//eg: number, string, boolean, undefined, null, (symbol=>to make some variable unique), bigInt=>7 types
//changes are made to copy of original value not to original value
//eg of symbol let id=Symbol("123");

//JavaScript is a dynamically typed language
//we don't need to specify datatype while declaring variable
//datatype is automatically assigned when we assign value to variable
//datatype of variable can be changed during re-assignment

//2. "Reference datatypes" => stored in heap memory
//used as call by reference
//eg: objects, arrays, functions => 3 types
//changes are made to original value

//return types of data types
// console.log(typeof 1234);//number
// console.log(typeof 1234567890123456789012345678901234567890n);//bigInt
// console.log(typeof "hitesh");//string
// console.log(typeof true);//boolean
// console.log(typeof undefined);  //undefined
// console.log(typeof null); //object
// console.log(typeof {name:"hitesh",age:24});//object
// console.log(typeof [1,2,3,4,5]);//object
// console.log(typeof function(){})//function
//function is special datatype which returns function itself