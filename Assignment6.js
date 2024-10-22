// Qs1. Write a JavaScript function that returns array elements larger than a number.


// let arr=[12,16,28,24,17,15,25,27,30];
// let key=15;
// function greatArr(){
//     let newarr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>key){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr
// }
// console.log(greatArr());


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

// let str="abcdababcdefgggh";
// let ans="";
// function uniqueans(str){
//     for(let i=0;i<str.length;i++){
//         if(!(ans.includes(str[i]))){
//             ans+=str[i];
//         }
//     }
//     return ans;
// }
// console.log(uniqueans(str));


// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

// let country = ["Australia", "Germany", "United states of America"];
// function largestcountry(){
//     let larg=0;
//     for(let i=0;i<country.length;i++){
//         if(country[i].length>larg)
//             larg=country[i].length;
//     }
//     for(let j=0;j<country.length;j++){
//         if(country[j].length==larg){
//             console.log(country[j]);
//         }
//     }
// }
// largestcountry();


// 4.Write a JavaScript function to count the number of vowels in a String argument.

// strng="abcdefghijklmnopqrstuvwxyz";
// function vowconstcount(){
//     vcount=0,concount=0;
//     for(let i=0;i<strng.length;i++){
//         if(strng[i]=="a" || strng[i]=="e" || strng[i]=="i"|| strng[i]=="o"|| strng[i]=="u" || strng[i]=="A" || strng[i]=="E" || strng[i]=="I" || strng[i]=="O" || strng[i]=="U"){
//             vcount++;
//         }
//         else{
//             concount++;
//         }
//     }
//     console.log("Number of Vowel = ",vcount,"No of consonant = ",concount)
// }
// vowconstcount();


// Qs5. Write a JavaScript function to generate a random number within a range (start,end).


let start=Number(prompt("Enter the starting point."));
let end=Number(prompt("Enter the end point"));
function genrandom(start,end){
    let diff=end-start;
    let randomnum=Math.floor((Math.random()*diff)+start); 
    console.log(randomnum);
}
genrandom(start,end);
