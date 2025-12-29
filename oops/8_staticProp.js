class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username:${this.username}`);
        
    }

    static createId(){//"static" ristrict the access of property
        return `123`;
    }

}

// const gaurav=new User("gaurav");
// console.log(gaurav.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const teacher1=new Teacher("teacher1","abc@gmail.com");
teacher1.logMe()
console.log(teacher1.createId());
