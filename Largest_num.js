// Qs5. Write a program to find the largest of 3 numbers.

num1=Number(prompt("Enter first number."));
num2=Number(prompt("Enter second number."));
num3=Number(prompt("Enter third number."));
if(num1==num2 && num2==num3){
    console.log(num1,"All are same.");
}
else if(num1>num2){
    if(num2>num3){
        console.log(num1," is greatest.");
    }else{
        if(num1<num3){
            console.log(num3," is greatest");
        }else{
            console.log(num1," is largest")
        }
    }
}
else if(num2>num3){
    console.log(num2," is largest.");
}
else{
    console.log(num3," is largest");
}
