
let count=0;
let content=document.getElementById("count");
function increment() {
    count=count+1;
    content.innerText=count;
    console.log(count);
}
let previous=document.getElementById("saved-clc");
function save() {
    previous.textContent+=count+" - "
    count=0;
    content.textContent=count;
}