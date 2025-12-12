//for..loop
//break,continue
//while..loop
//do..while loop

//special loops->array specific loops
//["","",""],[{},{},{}]..etc
//1.For..of

// const arr=[1,2,3,4,5];
// const str="gaurav";
// for (const element of str) {
//     // console.log(element);
    
// }

//Maps->key values are unique and follows the oreder and can be iterable
// const map=new Map();
// map.set('name','gaurav')
// map.set('roll no',26)
// // console.log(map);

// for(const [key,value] of map){
// for(const key of map){//this give me array [ 'name', 'gaurav' ]
//     console.log(key);//=>[ 'name', 'gaurav' ]but we want single single key not array
//      console.log(key,':-',value)
    
// }

//for..of cannot be used to iterate over the objects
// const obj={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by app"
// }

//2.for..in also used many places
// for(const key in obj){
//     console.log(key,':-',obj[key]);
//     // console.log();
// }

// const arr=[1,2,3,4,5];

// for (const key in arr) {
//   console.log(key);//->give indexes
//   console.log(arr[key]);//->get the value 
// }

// for(const key in map){
//     console.log(key);//do not return anything as map is not iterable using for..in   
    
// }

//+++++++++for..each loop++++++++++++++
// for..each is the part of the array as a property
// const coding=["js","ruby","java","python"]
// coding.forEach(function (val){
//     // coding.forEach(function name(){})for call back function we do not write name so just
//     //remove the name of the function and it will become "call back function"
//     console.log(val);
    
// })

// coding.forEach((val)=>{//arrow function
//     // coding.forEach(const one= (name)=>{})for call back function we do not write variable name so just
//     //remove the name of the variable and it will become "call back function"
//     console.log(val);
    
// })

//another method declare the function explicitly and then pass it 
// function test(num){
//     console.log(num);    
// }

// coding.forEach(test)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })


// const mycoding=[
//     {
//         languagename:"javascript",
//         filename:"js"
//     },
//     {
//         languagename:"java",
//         filename:"java"
//     },
//     {
//         languagename:"python",
//         filename:"py"
//     }

// ]

// mycoding.forEach((item)=>{
   
//     console.log( item.filename);
    
// })

//+++++++++++important concept++++++
// const coding=["js","ruby","java","python"]
// const val=coding.forEach((item)=>{
//     console.log(item);//what if i want to store this for..each into a variable 
//     //does it returns anything?lets see
//     // return item
    
// })
// console.log(val);//do not return anything even though we explicitly mention return