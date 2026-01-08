  /*
  The JavaScript reduce() method is a powerful built-in Array method that executes a user-supplied
   "reducer" callback function on each element of an array, resulting in a single output value. 
   This single value can be a number, a string, an object, or even a new array. 
"How it Works"
The reduce() method iterates through the array and maintains an accumulator, which stores the result 
of the previous iterations. The value returned by the callback function in each iteration becomes the
 accumulator for the next iteration. 
  */
const arr=[1,2,3,4,5,6,7,8,9,10]
//syntax
const initialvalue=0;
const sum=arr.reduce(
    (accumulator,currentvalue)=> {
        console.log(`accumalator value is ${accumulator} and current value is ${currentvalue}`);
        
        return accumulator+currentvalue
    },initialvalue
//here "accumulator" initially have 0 and as the number gets added the accumulator 
//value keeps on updating 
);

console.log(sum);


const shoppingCart = [
  {
    itemName: "Laptop",
    price: 55000
  },
  {
    itemName: "Headphones",
    price: 1500
  },
  {
    itemName: "Keyboard",
    price: 800
  },
  {
    itemName: "Mouse",
    price: 600
  },
  {
    itemName: "Smartphone",
    price: 20000
  }
];

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
