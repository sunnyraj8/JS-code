// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
// [Use MDN for help]
//mouseout
let btn1= document.createElement("button");
btn1.innerText="Click me mouseout";
document.querySelector("body").appendChild(btn1);
btn1.addEventListener("mouseout",function (){
    btn1.style.color="white";
    btn1.style.backgroundColor="blue";
})
//keypress
let inp= document.querySelector("input");
inp.addEventListener("keypress", function (event){
    console.log(event.key)
})
//scroll
window.addEventListener("scroll", function() {
    console.log("The page was scrolled!");
    
});

//load
window.addEventListener("load", function() {
    console.log("Page fully loaded, including all images and styles.");
    
});

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

let btn2= document.createElement("button");
btn2.innerText="Click me change color";
document.querySelector("body").appendChild(btn2);
btn2.addEventListener("click",function (){
    btn2.style.color="green";
    btn2.style.backgroundColor="yellow";
})
// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let inp1=document.querySelector("#inp1");
let h2=document.querySelector("h2");
inp1.addEventListener("input",function (){
    let filteredName = inp1.value.replace(/[^a-zA-Z\s]/g, "");
    inp1.value = filteredName;
    h2.innerText=inp1.value;
    
})