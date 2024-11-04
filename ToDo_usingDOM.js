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
    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    li.appendChild(delBtn);
}
ul.addEventListener("click",function (event){
    if(event.target.nodeName=="BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
        
    }
})


