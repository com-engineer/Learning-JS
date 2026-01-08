function setUserName(username){
    //complex DB calls
    this.username=username;
    console.log("called");
    
}

function createUser(username,email,password){
    // setUserName(username);
    setUserName.call(this,username);
    this.email=email;
    this.password=password;
}

const user1=new createUser("gaurav",'abc@gmail.com',123)
console.log(user1);//=>createUser { email: 'abc@gmail.com', password: 123 }
// username is not set only email and possword is set
//method setUserName is never get called only given the refernce we can explicitlly call it using "call"
//once get executed it removes all its content so it never return to outer context that is create user
//even its getting called but not reflect in the object
//don't add own this of the function give the referance for the this