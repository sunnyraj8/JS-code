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