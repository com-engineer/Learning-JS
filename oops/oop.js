//literal object

const user={
    username:"gaurav",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log("goot user details from database")
        // console.log(`username:${username}`);//=>gives error of "username not defined"
        // console.log(`username:${this.username}`);
        // console.log(this);
        
        
        
    }
}
// console.log(user.username);
// // user.getUserDetails();
// console.log(this);//=>{} whereas in browser it gives window oobject 

//what if i nned to make user2 then i'll have to make another object and defined the value again but it is time
//consuming

//"this" keyboard is use to refer to specific object or current context

//Constructor
// const myDate=new Date();
// const promise1=new Promise();//"new" keyword is the "constructor function" it alows user to make 
//"different instances" from single object literal.use to make the new context

function User(username,loginCount,isloggedIn){
    // username=username;//create confusion with the passed parameter
    this.username=username;
    this.loginCount=loginCount;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
        
    }
    this.isLoggedIn=isloggedIn;
    return this;//return the context can be ignored as it is implicit 
}

const userone=new User("Gaurav",12,true);
const usertwo=new User("Surya",10,false);
console.log(userone);//gives me {username: 'Surya',loginCount: 10,isLoggedIn: false} which is not true
//usertwo overriden the values so its not axceptable. so here we use "new" keyboard

//when we write new 1]it create an empty object {}
//step2]constructor function is called
//step3]arguesments is injetced using this keyword 
console.log(usertwo.constructor);//=>self referance
