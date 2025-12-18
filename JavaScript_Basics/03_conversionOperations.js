// let score="20";
// let score1="20abc";//=>will it be converted to number?
// let score2=null;//=>will it be converted to number?
// let score3=undefined;//=>will it be converted to number?
// let score4=true;//=>will it be converted to number?
// let score5="gaurav";//=>will it be converted to number?

// console.log(typeof score);
// console.log(typeof(score));//optional parentheses

// //but if we want to use score as number then we have to convert it into number datatype

// let valueInNumber1= Number(score);//=>20
// let valueInNumber2= Number(score1);//=>NaN
// let valueInNumber3= Number(score2);//=>0
// let valueInNumber4= Number(score3);//=>NaN
// let valueInNumber5= Number(score4);//=>1
// let valueInNumber6= Number(score5);//=>Nan
// console.log(typeof valueInNumber);

// // but score1 is not a number
// console.log(valueInNumber);//=>Nan=>not a number
// console.log(valueInNumber1);
// console.log(valueInNumber2);
// console.log(valueInNumber3);
// console.log(valueInNumber4);
// console.log(valueInNumber5);
// console.log(valueInNumber6);
// let isLogedIn=1;
// let isLogedIn1="";
// let isLogedIn2="gaurav";
// //1=>"true" ""=>"false" "gaurav"=>"true"
// let booleanIsLogedIn=Boolean(isLogedIn2);
// console.log(booleanIsLogedIn);
// console.log(typeof booleanIsLogedIn);

//converting to string
// let someNumber=1234;
// let stringSomeNumber=String(someNumber);
// console.log(stringSomeNumber);

// console.log(typeof stringSomeNumber);

//***********************Operations****************** */

// let val=3;
// let negVal=-val;
// console.log(negVal);

// let str1="hello";
// let str2="gaurav";
// let str3=str1+ " "+ str2;
// console.log(str3);

// console.log("1"+2);//=>12
// console.log(1+"2");//=>12
// console.log(1+2+"2");//=>32 if string is present at last then previous will be added as number
// console.log("1"+2+2);//=>122  if string is present at starting then all will be converted to string

// console.log(true);//true
// console.log(+true);//1

let x=1;
let y=x++;
console.log(y);
console.log(x);


// /If used postfix, with operator after operand (for example, x++), the increment operator increments
//  and returns the value before incrementing.

// /If used prefix, with operator before operand (for example, ++x), the increment operator increments
//  and returns the value after incrementing.




