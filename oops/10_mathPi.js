const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log((Math.PI));//why it cannot be changed
// console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,       
  configurable: false      
}
*/
//can we add our own property and give some hardcoded value that no one can change it  like the value of Math.PI
//yes

// const obj=Object.create(null)

const obj={
    name:"tea powder",
    price:400,
    isAvailable:true,

    orderChai:function(){
        console.log("code fat gya")
    }
}

console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
//let us change the property
Object.defineProperty(obj,"name",{
    writable:false,
    enumerable: false,//can be iterable or not
})
console.log(Object.getOwnPropertyDescriptor(obj,"name"));

for(let [key,value] of Object.entries(obj)){//object is not iterable
    if(typeof value!=='function'){
        console.log(`${key}:${value}`);

    }
    
}