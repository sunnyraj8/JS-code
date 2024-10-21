// Qs1. Write a JavaScript function that returns array elements larger than a number.

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

//** */ str = "abcdabcdefgggh";
// for(let i=0;i<str.length;i++){
//     for(let j=1;j<str.length;j++){
//         if(str[i]==str[j]){
//             str.splice(j,1);
//         }
//     }
// }
// console.log(str);

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

// function printpoem(){
//     console.log("Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.\nWhen the blazing sun is gone,\nWhen he nothing shines upon,\nThen you show your little light,\nTwinkle, twinkle, all the night.\nThen the traveler in the dark\nThanks you for your tiny spark,\nHow could he see where to go,\nIf you did not twinkle so?\nIn the dark blue sky you keep,\nOften through my curtains peep\nFor you never shut your eye,\nTill the sun is in the sky.\nAs your bright and tiny spark\nLights the traveler in the dark,\nThough I know not what you are,\nTwinkle, twinkle, little star.")
// }

// printpoem();
//create a function that return cocanatenation of  all string in an array.

let arr=["pen","notebook","Laptop","charger","keyboard","Mouse","Apple"];
function concat(arr){
    let con="";
    for(i=0;i<arr.length;i++){
        con=con+arr[i];
    }
    return con;
}
console.log(concat(arr));
