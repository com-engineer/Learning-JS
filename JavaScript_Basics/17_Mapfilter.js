//use when we want to use some conditions

const num=[1,2,3,4,5,6,7,8]

// const newnums=num.filter((num)=>{
// const newnums=num.filter((num)=> num>4)//can be return in this form also
//here we don't need to explicitlly mention "return" keyword
//     return num>4;//it returns the value whereas foreach do not returns any value
// })

//in for..each we can also do the above task but we need to use condition explicitly
// const myNums=[]
// num.forEach((item)=>{
//     if(item>4){
//         myNums.push(item);
//     }
// })

// console.log(newnums);
// console.log(myNums);

//practice
// const books = [
//   {
//     id: 1,
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     genre: "Fiction",
//     price: 299,
//     rating: 4.7,
//     published: 1988,
//     inStock: true
//   },
//   {
//     id: 2,
//     title: "Atomic Habits",
//     author: "James Clear",
//     genre: "Self-help",
//     price: 450,
//     rating: 4.9,
//     published: 2018,
//     inStock: false
//   },
//   {
//     id: 3,
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     genre: "Finance",
//     price: 350,
//     rating: 4.5,
//     published: 1997,
//     inStock: true
//   },
//   {
//     id: 4,
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     genre: "Programming",
//     price: 799,
//     rating: 4.8,
//     published: 2008,
//     inStock: true
//   },
//   {
//     id: 5,
//     title: "The Psychology of Money",
//     author: "Morgan Housel",
//     genre: "Finance",
//     price: 499,
//     rating: 4.7,
//     published: 2020,
//     inStock: false
//   },
//   {
//     id: 6,
//     title: "You Don't Know JS",
//     author: "Kyle Simpson",
//     genre: "Programming",
//     price: 600,
//     rating: 4.6,
//     published: 2015,
//     inStock: true
//   },
//   {
//     id: 7,
//     title: "Ikigai",
//     author: "Héctor García",
//     genre: "Self-help",
//     price: 299,
//     rating: 4.3,
//     published: 2016,
//     inStock: true
//   },
//   {
//     id: 8,
//     title: "Deep Work",
//     author: "Cal Newport",
//     genre: "Productivity",
//     price: 550,
//     rating: 4.5,
//     published: 2016,
//     inStock: false
//   }
// ];

// const userBooks=books.filter((bk)=> bk.genre=="Productivity");
// console.log(userBooks);

//+++map+++
/*
The .map() method is a function available on all JavaScript arrays. It is a higher-order function 
that creates a new array populated with the results of calling a provided callback function on every 
element in the original array, without modifying the original
*/
// const newNum=num.map((num)=>num+10);//act like filter returns the value

//chaining
const newNum=num.map((num)=> num*10).map((item)=> item+1).filter((item)=> item>30)
console.log(newNum);
