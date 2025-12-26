/* promises are the "object" that represent the eventuall completion or failure of an asynchronous 
 operation and there result
 promises are completed in the future 
 we can use "asyn await" or "promise" in case of asynchromous operation

 has three state:
 1.pending
 2.fulfilled
 3.rejected

 */

 //no need of q and bluebird libraries in js as nodejs handles all of this

//=>>>>>>>>>Promise1

//  const promise1=new Promise(function(resolve,reject){});//promise is created
//  const promise1=new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls,cryptography,network
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();//without this the promise is not connected to .then and the content iside that will never 
//         //execute
//         //we can also pass any vallue
//     },2000)
//  });//promise is created
// //now we need to consume this promise
// promise1.then(function(){
//     console.log("promise consumed");
// })//resolve 


//=========>>>>>>>>Promise2

// new Promise(function(resolve,reject){//not stored in any variable
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("Promise 2 is completed")
// })

//============>>>>>>>>>promise3


//passing values through resolve to .then
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"gaurav",email:"abc@gmail.com"});
//     },2000)
// })

// promise3.then((user)=>{
//     //how to recieve the data
//     console.log(user);
    
// })


//========>>>>>>>>>>promise4

//handling the error through "reject"
const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=false;
        if(!err){
            resolve({username:"surya",password:123})
        }else{
            reject('Something went wrong')
        }
    },2000)
})
//avoid call hell
// const username=promise4.then((user)=>{//=>do not store the returned value in the username 
//so we use chaining
promise4
.then((user)=>{
    //getting only username
    console.log(user);
    return user.username;//where this "username" goes
})
.then((username)=>{
    console.log(username);
    
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("the promise is either resolved or rejected")
})//we can also use as promise has some time limimt so we want some result whether promise is resolved or not

// console.log(username);//=>Promise { <pending> } directly got printed but the promise is in pending state 
//till 2 sec

