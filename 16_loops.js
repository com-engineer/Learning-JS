//for..loop
//break,continue
//while..loop
//do..while loop

//special loops->array specific loops
//["","",""],[{},{},{}]..etc
//1.For..of

// const arr=[1,2,3,4,5];
const str="gaurav";
for (const element of str) {
    // console.log(element);
    
}

//Maps->key values are unique and follows the oreder and can be iterable
const map=new Map();
map.set('name','gaurav')
// console.log(map);

for(const [key,value] of map){
// for(const key of map){//this give me array [ 'name', 'gaurav' ]
    // console.log(key);//=>[ 'name', 'gaurav' ]but we want single single key not array
    //  console.log(key,':-',value)
    
}

//for..of cannot be used to iterate over the objects
const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by app"
}
//2.for..in also used many places
for(const key in obj){
    console.log(key,':-',obj[key]);
    // console.log();
    
    
}
