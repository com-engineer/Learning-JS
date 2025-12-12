//confusing comparisons 
//comparing the same datatype is easier but create confuse when we need to compare different datatypes
console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);//equality check and other comparison operator works differently
console.log(null>=0);//comparison convert null as 0 number while equality don't 

console.log(undefined==0);
console.log(undefined>0);// all gives false
console.log(undefined>=0);


//Strict checking using "===" it not only checks the "value" but also checks the "datatype"

console.log(1==="1");//false
console.log(1=="1");//true



