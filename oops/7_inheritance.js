class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

// const user1=new Teacher("Gaurav","abc@gmail.com",123);
// user1.addcourse();

const user2=new User("gaurav");
// user2.addcourse();
user2.logMe();

console.log(user2 instanceof User);
