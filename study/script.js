
let btnadd = document.getElementById("button-add");
console.log(btnadd);

let inputlist = document.getElementById("input-list");
console.log(inputlist);

let newtask = document.getElementById("list");


function addnewtask()
{
    console.log(inputlist.value);
    let listi= document.createElementt("li");
    listi.innerHTML = inputlist.value ;
    listi.appendChild(inputlist);
    listi.value = "";
    
}

btnadd.addEventListener("Click", addnewtask);

