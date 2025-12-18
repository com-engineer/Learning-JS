//concat the strings
// let string1 = "Hello, ";
// let count=50;
// let concatenatedString = string1 + count;
// console.log(concatenatedString); // old and outdated method

// console.log(`${string1} and its count is ${count}`);//new modern way

//another method to declare the string
const gameName=new String('Dynamo');
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

//string methods
// console.log(gameName.length);//property not method
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('D'));
// substring(start,end)
console.log(gameName.slice(-6,4));//=>Dyna
console.log(gameName);


// console.log(gameName.replace('Dynamo','Valorant'));

// //trim() method removes the extra spaces from starting and ending of string
// let string2="     Hello World     ";
// console.log(string2.trim());

// console.log(gameName.includes('mo'));//=>yes/No

// console.log(gameName.split(''));//split into array of characters
console.log(gameName.split('n'));//split into array of substrings based on separator





