const accountId=14526;
let accountEmail="exmaple@gmaIL.COM";
var accountPassword="12345";//create the problem of scope where this variable is globally accessible to 
//every part i.e issue in block scope and function scope
// so recommended to use "let" only
// accountId=1453666;
accountEmail="hitesh@gmaIL.COM";
accountPassword="1234576";
accountCity="Mumbai";//not recommanded but possible
let accountState;
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);