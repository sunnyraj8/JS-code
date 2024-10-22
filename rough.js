// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and 
//returns the average of those numbers.
// let arr=[2,3,4,5,6,8,10];
// let count=0;
// for(let i=0;i<arr.length;i++){
//     count++;
// }
// arrayAverage= (arr)=>{
//     sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/count;
// }
// console.log(arrayAverage(arr));


// Qs2. Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not.

// isEven= n => {
//     if(n%2==0){
//         console.log(n," is Even.");
//     }else{
//         console.log(n," is Odd");
//     }
// }
// num=Number(prompt("Enter a number tp check whether it is even or odd:"));
// isEven(num);

// let length=4;
// function callback() {
//     console.log(this.length);
// }
// const object={
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback,1,2);

const object = {
    message: 'Hello, World!',
    logMessage() {
    console.log(this.message);
    }
    };
    setTimeout(object.logMessage, 1000);
