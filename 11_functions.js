// function funcName(){
//     //body
//     console.log("hello...function");
    
// }

// funcName();
//arguements->values passed to the function
//parameters->not actual value just the representation of the value not actuall value

// function loginUserMessage(username){
// function loginUserMessage(username="sam"){//default value if there is no username
//     if(username===undefined){
//         console.log("Please enter the username........");
//         return;
//     }
//     return `${username} just LoggedIN`;
// }

// console.log(loginUserMessage("gaurav"));
// console.log(loginUserMessage());//undefined

//+++++++++++part2+++++++++

// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(2));
//but what if we want to give multiple values then we use "Rest Operator" or "Spread Operator"
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,600));//returns an array

//passing object

const user={
    username:"deepu",
    price:499
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
      //here we need to check whether parameter is holding the object or not
      //whether the key that i am accessing is present in the object or not
}

// handleObject(user);
//we can also pass the object directly to the function
handleObject({
    username:"deepu1",
    price:299
})

