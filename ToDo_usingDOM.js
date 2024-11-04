let btn=document.querySelector("button");
btn.addEventListener("click",abc)
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
    
function abc(){
    let val=inp.value;
    let li = document.createElement("li");
    li.textContent = val;
    ul.appendChild(li);
    inp.value="";
}

// let lis=document.querySelectorAll("li")
// for(li of lis){
//     li.addEventListener("click",function (){
//         li.remove();
//     })
// }

