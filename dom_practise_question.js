let abc=document.createElement("p");
abc.innerText="Hey I'm red";
abc.style.color="red";
let body=document.querySelector("body");
body.appendChild(abc);
let h3=document.createElement("h3");
h3.innerText="I'm a blue h3!";
h3.style.color="blue";
body.append(h3);
let div=document.createElement("div");
div.style.border="2px solid black";
div.style.backgroundColor="pink"
body.append(div);
let h1=document.createElement("h1");
h1.innerText="I'm in a div";
div.appendChild(h1);
let p=document.createElement("p");
p.innerText="ME TOO!";
div.appendChild(p);