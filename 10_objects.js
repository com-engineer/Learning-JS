//singelton when we make object using constructor
// Object.create
//Object Literals
//key-values


//Symbols as keys

const sym1=Symbol("key1");
//how to use it as key

const obj1={
    name:"gaurav",
    "full name":"gaurav sharma",//there is no way to acces using dot notations
    //thats y use []
    [sym1]:"value1",
    age:24,
    location:"india",
    isLoggedIn:["Monday","Tuesday"],
    email:"abc@gmail.com"
}

//access
// console.log(obj1.email);
// console.log(obj1["email"]);
// console.log(obj1[sym1]);

//we can easily manipulate the objects 
// obj1.email="abcd@gmail.com";
// console.log(obj1);

// //to avoid any maipulation we need to declare it as freeze
// Object.freeze(obj1);
// obj1.email="rakesh@gmail.com";
// console.log(obj1);

//add function in the obj1 object
obj1.greeting=function(){
    console.log("Hello js User");
    
}
obj1.greeting2=function(){
    console.log(`Hello js User,${this.name}`);
    
}
console.log(obj1.greeting());
console.log(obj1.greeting2());
