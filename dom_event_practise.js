let btn=document.querySelector("button");
let div=document.querySelector("div");
let h1=document.querySelector("h1");
btn.onclick=randomclr
function randomclr(){
    let r=Math.floor(Math.random()*255+1);
    let g=Math.floor(Math.random()*255+1);
    let b=Math.floor(Math.random()*255+1);
    div.style.backgroundColor=`rgb(${r},${g},${b})`;
    h1.innerText=`rgb(${r},${g},${b})`;

}