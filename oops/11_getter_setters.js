class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    //getters and setters for the email
    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value;
    }
    //getter and setters are used when we don't want to give the access of variables
    get password(){
        // return this._password.toUpperCase();
        return `${this._password}gaurav`;
    }

    set password(value){
        this._password=value;//password is set here only
    }

//now constrcutor is setting the values of  email and password but we are overriding the value of password
//through getter and setters by changing the variable name


    //question=> we are setting the variables in the constructor and setter as well    what is the use
    //constructor and setter start racing to set the value and due to which we get error like this=>"RangeError: Maximum call stack size exceeded"
}

const user1=new User("abc@gmail.com","abc");
console.log(user1.password);
console.log(user1.email);
