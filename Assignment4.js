// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let key=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==key){
        arr.splice(i,1);
    }
}
console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6.

// let num=287152;
// let count=0;
// while(num>0){
//     num = Math.floor(num / 10);
//     count++;
// }
// console.log(count);

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

// let num=287152;
// let sum=0;
// while(num>0){
//     sum=sum+num%10;
//     num = Math.floor(num / 10);
// }
// console.log(sum);

// Qs4. Print the factorial of a number n.

// let num1=Number(prompt("Enter a number: "));
// let fact=1
// for(let i=1;i<num1+1;i++){
//     fact=fact*i;  
// }
// console.log("factorial of number is : ",fact);


// Qs5. Find the largest number in an array with only positive numbers

// let Arr=[54,10,24,52,84,63,42,28,16];
// let larg=0
// for(let i=0;i<Arr.length;i++){
//     if(Arr[i]>larg){
//         larg=Arr[i];
//     }
// }
// console.log("Largest number in array is : ",larg);