let myName="gaurav   ";

console.log(myName.length);//without space it gives 6 but we want 6 with space also
//without using "trim" we will make new property as method "trueLength()";




let myheroes=["thor","spiderman"]


let heropower={
    thor:"hamer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.gaurav=function(){
    console.log(`Guarav is present in all object`);//injected one property to all Object
    //given this power to everyone
    
}
//can i access this property inside the array also?
//=>yes
myheroes.gaurav();

// heropower.gaurav();

//but what if i give the power to array only so can this be replicated to all the objects 

Array.prototype.heyGaurav=function(){
    console.log("hello");
    
}

//theoritically
myheroes.heyGaurav();//=>has access
// heropower.heyGaurav();//no access


//prototypal inheritance
const user={
    name:"gaurav",
    email:"abc@gmail.com"
}

const teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fultime:true,
    __proto__:TeachingSupport
}

teacher.__proto__=user;

//modern syntax

Object.setPrototypeOf(TeachingSupport,teacher)


//solution for the first string problem to get the true length without using trim explicitly
String.prototype.trueLength=function(name){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

myName.trueLength();
"hitesh  ".trueLength();
"surya  hi".trueLength();
