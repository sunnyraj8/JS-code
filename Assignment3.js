// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]
// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]
// Qs3. Write a JavaScript program to check whether a string is blank or not.
// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.
// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
// Qs6. Write a JavaScript program to check if an element exists in an array or not.

console.log("First Question");
let arr=[4,5,8,7,6,9,45,76,50];
let n=4;
let arr1=arr.slice(0,4);
console.log(arr1);

console.log("Second Question");
let arr2=arr.reverse();
let n1=4;
let arr3=arr2.slice(0,n1);
console.log(arr3);

console.log("Third Question");
str=prompt("Enter a string");
if(str.length>0){
    console.log("Not a Blank string");
}
else {
    console.log("Blank String");
}

console.log("Sixth Question");

arrr=[1,2,3,5,4,6,7,8,9,10,11,12,13,14,15,16];
nnum=Number(prompt("Enter what you want to search in array"));
a=0;
for(i=0;i<arrr.length+1;i++){
    if(nnum==arrr[i]){
        a=1;
    }
}
if(a=1){
    console.log("Element found");

}
else{
    console.log("Element not found");
}


// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let n=Number(prompt("Enter a number."));
// let sub=arr.slice(0,n);
// console.log(sub);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]

// let arr1=[7, 9, 0, -2];
// let n=3;
// let sub1=arr1.slice(-n);
// console.log(sub1);

// 3.Write a JavaScript program to check whether a string is blank or not.

// str=prompt("Enter a string.");
// if(str.length>0){
//     console.log(str," is not blank");
// }
// else{
//     console.log("Blank")
// }

// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

// let strn=prompt("Enter a string.");
// let n=Number(prompt("Enter the index number."));
// if(strn[n]==strn[n].toLowerCase()){
//     console.log("yes string is lower case at ",n," index");
// }else{
//     console.log("character is not lower case at ",n, " index");
// }

//5 Write a JavaScript program to strip leading and trailing spaces from a string.

// name1="  adk qbfk!   ";
// console.log(name1.trim());

// 6Write a JavaScript program to check if an element exists in an array or not.

// let fruits=["apple","banana","mango","grapes","kiwi","guava","blueberry","orange","apple"];
// let chooseFruit=prompt("Enter a fruits u want to choose.");
// let count=0;
// for(i=0;i<fruits.length;i++){
//     if(fruits[i]==chooseFruit){
//         count++;
//     }
// }
// if(count>0){
//     console.log(chooseFruit," found ",count," times in fruit section.");
// }
// else{
//     console.log(chooseFruit," does not found in fruit section.");
// }


