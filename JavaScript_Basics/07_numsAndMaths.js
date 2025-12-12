// const score=400;//bydefault number

// const balance=new Number(100);//object type....explicitly created number object
// console.log(score);
// console.log(balance);
// //have less methods in number object
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//fixed to 2 decimal places

// const decNum=223.34;
// console.log(decNum.toPrecision(4));
// console.log(decNum.toPrecision(2));//=>2.2e+2

// const hundreds=1000000;
// console.log(hundreds.toLocaleString("en-IN"));//in indian system lakh and crore
// console.log(hundreds.toLocaleString("en-US"));//in US system million


//+++++++++++++++++   Maths   ++++++++++++++++++
// console.log(Math);
// //important methods in Math object
// Math.abs(-4);//4
// Math.round(4.6);   //5
// Math.floor(4.9);  //4
// Math.ceil(4.1);   //5
// Math.min(2,34,5,6,7,-1);
// Math.max(2,34,5,6,7,-1);
// Math.random();//gives random number between 0 to 1(excluding 1)
// Math.random()*10;//gives random number between 0 to 10(excluding 10)
// Math.floor(Math.random()*10);//gives random integer number between 0 to 9
// Math.floor(Math.random()*10)+1;//gives random integer number between 1 to 10

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);//gives random integer number between min to max including both


