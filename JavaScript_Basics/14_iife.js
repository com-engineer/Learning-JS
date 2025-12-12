//immediately invoked function expression (IIFE)
/*
❓Why do we use IIFE?

1.To avoid polluting global variables
(variables inside IIFE cannot be accessed outside)

2.To create a private scope

3.To run some code immediately (initial setup, config, etc.)
*/

//suppose a file only having db connection code and we want as our system start run
//the file automatically start executing

// function db(){
//     console.log("db connected");//problem occurs when the function get polluted due 
//     //globally scope variables and things
//     //to avoid this function being get polluted we use "iife"
// }

// db()

(function db(){
    //named iife
    console.log("db connected");//problem occurs when the function get polluted due 
    //globally scope variables and things
    //to avoid this function being get polluted we use "iife"
})();//ends the code 
// ()()
//iife is used when there is problem due to globally scoped variable 
var a=10;
((name)=>{
    //unnamed iife
    var a=40
    console.log(a);//=>40
    
    console.log(`db connected....${name}`);//this gives me error so let us rewrite it
// as above function only then it should get executed
})("gaurav")
console.log(a);//=>10
// generally the value of a gets updated to 40 but due to iife it doesn't happen
//the variable a inside the iife function become private and cannot be accessed 
//outside-+



// (function two(){
//     console.log("db connected");//this again give the error while the syntax 
// //is same as the previous one then what is the problem
// //iife function immediately invoked the function but don't know where to stop 
// //the context so in that case in js we need to end the context so for that we need 
// //to add the semicolon"; now we can also use the arrow function as well
// //the problem was of the semicolon and nothing else

// })()