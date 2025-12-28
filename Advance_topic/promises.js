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
// const promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err=false;
//         if(!err){
//             resolve({username:"surya",password:123})
//         }else{
//             reject('Something went wrong')
//         }
//     },2000)
// })

//avoid call hell
// const username=promise4.then((user)=>{//=>do not store the returned value in the username 
//so we use chaining

// promise4
// .then((user)=>{
//     //getting only username
//     console.log(user);
//     return user.username;//where this "username" goes
// })
// .then((username)=>{
//     console.log(username);
    
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })//we can also use as promise has some time limimt so we want some result whether promise is resolved or not

// console.log(username);//=>Promise { <pending> } directly got printed but the promise is in pending state 
//till 2 sec

//===================>>>>>>>>>>>promise5

// const promise5=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         setTimeout(()=>{
//         let err=false;
//         if(!err){
//             resolve({username:"surya",password:123})
//         }else{
//             reject('Something went wrong')
//         }
//     },2000)
//     })
// })

//async await
//structure
// async function consumePromiseFive(){
//     await promise5
// }

//async and await cannot handle error directly we need to handle it explicitly using try and catch
// async function consumePromiseFive(){
//     try{const response=await promise5
//     console.log(response);
//     }catch(err){
//         console.log(err);
//     }
// }

// consumePromiseFive();

// async function getAllUsers(){
//     // fetch('https://api.github.com/users/com-engineer')//returns promise data in the form of string
//     try{
//         const response=await fetch('https://randomuser.me/api/')
//         // console.log(response);
        
//         const data=await response.json();//it also takes time so needs await
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }

// getAllUsers();


//doing same above task using .then 
fetch('https://api.github.com/users/com-engineer')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((err)=> console.log(err))

//if we run the code without using fetch as we did from starting and at the last we are using fetch we run all the code
//then the fetch code runs first then above all  but why its happening the top code should run first
//then the last one but here its not 
///continue to learn the reason behind it.............