//1st Question
let num=150;
if (num%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}
//2nd question
name1=prompt("Enter your name");
age=Number(prompt("Enter your age"));
console.log(name1,"is",age,"years old.")
//3rd Question
num1=Number(prompt("Enter quarter number"));
switch(num1){
    case 1:
        console.log("JAnuary,feb,march");
        break;
    case 2:
        console.log("April,may,june");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Invalid Input");                
}

//4th Question
str=prompt("Enter a string");
if((str[0]=="A" || str[0]=="a")&& (str.length>5)){
    console.log("Golden String");
}
else{
    console.log("not a golden String");
}

//5th question
n1=Number(prompt("Enter three number"));
n2=Number(prompt());
n3=Number(prompt());

if(n1<n2<n3){
    console.log("Greatest number is",n3);
}
else if(n1<n2 && n2>n3){
    console.log("Greatest number is",n2);
}
else if(n1>n2 && n2<n3){
    console.log("Greatest number is",n1);
}
else {
    console.log("Equal");
}