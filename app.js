let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",()=>{
    let ele = document.createElement("li");
    let delBtn = document.createElement("button");
    ele.innerHTML = `${inp.value}`;
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    ul.appendChild(ele);
    ele.appendChild(delBtn);
    inp.value="";
})
ul.addEventListener("click", function(event){
    console.log(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let parent = event.target.parentElement;
        parent.remove();
        console.log("deleted");
    }
});
