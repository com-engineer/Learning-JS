//arrays are resizable can be mix data types
//js array-copy operation create shallow copy

//"shallow copy"=>A shallow copy of an object
//is a copy whose properties share the same references (point to the same underlying values)

//"deep copy"=>A deep copy of an object
//  is a copy whose properties do not share the same references (point to the same underlying values)

// const numbers=[1,2,3,4,5];
// console.log(numbers);
// console.log(numbers.length);//property not method
// console.log(numbers[0]);//accessing elements using index

// //array methods
// numbers.push(6);//adds element at last
// console.log(numbers);
// numbers.pop();

// numbers.unshift(0);//adds element at starting
// // numbers.shift();//removes element from starting
// console.log(numbers);

// console.log(numbers.indexOf(3));//gives index of element

// console.log(numbers.includes(4));//gives true/false if element is present or not

// const newArr=numbers.join();
// console.log(numbers);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice methods

const arr=[1,2,3,4,5];

console.log("A",arr);
console.log(arr.slice(1,3));
console.log("B",arr);
console.log(arr.splice(1,3));
console.log("C",arr);

//slice do not change original array
//splice changes original array
// infact splice remove that much element form the original array


