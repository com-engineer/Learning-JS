// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user=new User("gaurav","abc@gmail.com",123);
// console.log(user.encryptPassword());
// console.log(user.changeUserName());

//behind the scene

function UserTwo(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

UserTwo.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

UserTwo.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}

const user2=new UserTwo("surya","surya@gmail.com",123)

console.log(user2.encryptPassword());
console.log(user2.changeUserName());
