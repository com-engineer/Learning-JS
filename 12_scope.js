// let a = 10
// const b = 20
// var c = 30

// {}//=>scope
//below is the "block scope" and outside it is the "golbally scope"
if (true) {
    let a = 10
    const b = 20
    var c = 30
}
//when i want to access the variables which is declare in the if statement
//it will give error as these variables are only accessible within the if scope 
//outisde that it is not allowed "but" var c will be accessed which is the problem 
//thats y it is recommended not to use var

//concept of scope is different in the node envi and browser env

// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
//closure=>"“Function ke bahar ke variables ko function yaad rakhta hai — even after execution.”"
// function one(){
//     const username="deepu"
//     function two(){
//         const website="youtube"
//         console.log(username);      
//     }
//     // console.log(website);//not accessible
//     two()
// }

// one()

//+++++++++++++++++++another representation of the function+++++++++++++
//concept of "hoisting"
addOne(5)//easily accessible 
function addOne(num){
    return num+1;
}

addTwo(5);//cannot access before declaration 
const addTwo=function(num){
    return num+2;
}

console.log(addTwo);


