// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2

let num1=Number(prompt("Enter first number."));
let num2=Number(prompt("Enter second number."));
let rem=num1%10;
if(num1%10==num2%10){
    console.log(num1,num2," have same remainder: ",rem);
}else{
    console.log(num1,num2," does not have same remainder.");
}