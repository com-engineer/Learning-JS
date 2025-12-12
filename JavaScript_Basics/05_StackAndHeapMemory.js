/*
in programming like c and asmebly the programmer need to take care of memory utilization but modern
languages handle it by garbaege collection and memory management techniques.

Stack(Primitive datatypes) and Heap(Reference datatypes) 

let name="gaurav";//stored in stack memory
let name1=name;//copy of value is stored in stack memory
name1="hitesh";//modification is done to copy of original value not to original value
console.log(name);//original value remains same
console.log(name1);//modified value

Heap(Reference datatypes)
let user1={
    email:"user@gmail.com",
    upi:"user@upi"
}

let user2=user1;//copy of reference is stored in stack memory pointing to same object in heap memory
user2.email="user2@gmail.com";//modification is done to original value
console.log(user1.email);//original value is also modified
console.log(user2.email);//modified value
*/