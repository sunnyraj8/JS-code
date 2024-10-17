let sttr=prompt("Enter a string");
let size=sttr.length
if ((sttr[0]=="a") && (size>3)){
    console.log("Good String");
}
else{
    console.log("Not a good string");
}

let num=12;
if ((num%3==0)&&((num+1==15)||(num-1==11))){
    console.log("Safe");
}
else {
    console.log("unsafe");
}