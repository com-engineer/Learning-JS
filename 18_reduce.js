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
