const user={
    username:"deepu",
    price:199,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
//"this" is used for the current context        
    }
}

// user.welcomeMessage();

// user.username="sam";//context is changed meaning value is changed
// user.welcomeMessage();

// function one(){
//     let username="gaurav"
//     console.log(this.username);//we cannot use "this" inside the functions only in
//     //objects
    
// }
// one()


//arrow Function

// const one=()=>{
//     let username="gaurav"
//     // console.log(this.username);//undefined
//     // console.log(this);//gives the empty object
    
// }
// one()

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(5,2));

// const addTwo=(num1,num2)=> num1+num2;//implicit return due to one line only
// const addTwo=(num1,num2)=> (num1+num2);//we can use paranthesis instead of {} braces
const addTwo=(num1,num2)=> ({username:"gaurav"});//returning object
console.log(addTwo(5,2));
