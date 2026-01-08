//dates are generaly stored in miliseconds form 1st jan 1970

let myDate=new Date();
console.log(myDate);

//in string format
// console.log(myDate.toString());//=>Mon Dec 08 2025 20:33:26 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString());//=>12/8/2025
// console.log(myDate.toLocaleString());//=>12/8/2025, 8:33:26 PM
// console.log(myDate.toLocaleTimeString());//=>8:33:26 PM

// console.log(typeof myDate);

// let newDate1=new Date(2025,0,25);
let newDate1=new Date("01-12-2025");
// console.log(newDate1.toDateString());

// let timestamp=Date.now();
// console.log(timestamp);
// console.log(newDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate2=new Date();
// console.log(newDate2.getDate());
// console.log(newDate2.getMonth());//0-11
// console.log(newDate2.getFullYear());
// console.log(newDate2.getHours());




/*
.toString()
.toDateString()
.toLacaleString()
.toLacaleDateString()
.toLacaleTimeString()
.getTime()
.getDate()
.getHours()
.getFullYear()
*/