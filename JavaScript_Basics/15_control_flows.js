//if..else
//switch..case
//falsy values=>false,0,-0,BigInt 0n,"",null,undfined,NaN
//truthy values=>" ",[],{},function(){}

//important conditions
const obj={}

if(Object.keys(obj).length==0){
    console.log("object is empty");
    
}

//Nullish coalescing Operator (??): null undefined
//when we call from db,firebase we don't get direct response we get two values
//we may get the "null" value or "undefined" so for that this operator is used

let val;
// val=5 ?? 10;
// val=null ?? 10;//expected null but we get 10
val1=null ?? 10 ?? 20 //first value will be assigned
console.log(val);//=>5
