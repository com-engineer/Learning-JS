//singelton when we make object using constructor
// Object.create
//Object Literals
//key-values


//Symbols as keys
//++++++++++++Object Literals++++++++++++
// const sym1=Symbol("key1");
//how to use it as key

// const obj1={
//     name:"gaurav",
//     "full name":"gaurav sharma",//there is no way to acces using dot notations
//     //thats y use []
//     [sym1]:"value1",
//     age:24,
//     location:"india",
//     isLoggedIn:["Monday","Tuesday"],
//     email:"abc@gmail.com"
// }

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
// obj1.greeting=function(){
//     console.log("Hello js User");
    
// }
// obj1.greeting2=function(){
//     console.log(`Hello js User,${this.name}`);
    
// }
// console.log(obj1.greeting());
// console.log(obj1.greeting2());

//+++++++++++++++++Singelton Object++++++++++++
// const User_=new Object();
// const User1_={}//=>non singelton

// User_.id="123abc";
// User_.name="Deepu";
// User_.isLoggedIn=false;

//Object inside Object

// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstnmae:"deepu",
//             lastname:"sharma"

//         }
//     }
// }


// console.log(regularUser.fullname.userfullname.firstnmae);

//combine object
// const obj1={1:"a",2:"2"};
// const obj2={3:"a",4:"b"};

// const obj3={obj1,obj2};//=>{ obj1: { '1': 'a', '2': '2' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3=Object.assign({},obj1,obj2);//{}->is optional act as target
// console.log(obj3);//=>{ '1': 'a', '2': '2', '3': 'a', '4': 'b' }

// const obj3={...obj1,...obj2};//easy to use
// console.log(obj3);


// when we get get object from data base we get in form of array
// const users=[
//     {
//         id:1,
//         email:"abc@gmail.com"
//     },
//     {
//         id:2,
//         email:"abc@gmail.com"
//     },
//     {
//         id:3,
//         email:"abc@gmail.com"
//     }
// ]

//how to iterate over it?
// users[1].email;

// console.log(User_);

// console.log(Object.keys(User_));//returns in the form of array can apply loop
// console.log(Object.values(User_));
// console.log(Object.entries(User_));//[ [ 'id', '123abc' ], [ 'name', 'Deepu' ], [ 'isLoggedIn', false ] ]

// //when value is not present
// console.log(User_.hasOwnProperty('isLoggedIn'));//=>true
// console.log(User_.hasOwnProperty('isLogged'));//=>false


//+++++++++++++++Object destructring and JSON API+++++++++++++++++
const course={
    coursename:"js in Hindi",
    price:999,
    instructor:"Hitesh"
}

//to avoid using repeatative dot access to the values of the object
//we can use other technique as follows

const {instructor:inst}=course

// console.log(course.instructor);//we can replace this 
// console.log(instructor);
console.log(inst);

//API-----------
// {
//     "name":"hitesh",
//     "coursename":"js in Hindi",
//     "price":"free"
//it gives the error as it  is a json formate
// }

//sometime we also get the api in array form
// [
//     {},
//     {},
//     {}
// ]


