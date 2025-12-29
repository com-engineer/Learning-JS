//js show prototypal behavior
//also can have prototypal inheritance

function multiplyBy5(num){
    this.num=num;
    return num*5;
}
// console.log(multiplyBy5(3));
// multiplyBy5.power=2;
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);//these proves that "function" is an "object"
//this prototype can have some properties of function 

function createUser(username,score){
    this.username=username;
    this.score=score;
    //since function is an object so can we inject some properties into it ?=>yes
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
    ;
}

const user1=new createUser("book",30);
const user2=new createUser("tea",20);

// we can access the properties directly whereas rest of the things like prototype is handled internally

user1.printMe();//=>Cannot read properties of undefined without "new" keyword
//prototype is injected but when the values are passed using the function createUser() to user1 the user1 is not 
//aware about that properties so we need to make user1 knowthat thiese properties has came and this is
//done using "new" keyword. new keyword is doing something behind the scene
