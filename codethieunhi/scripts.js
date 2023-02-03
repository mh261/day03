let btninput = document.getElementById("input-n");
let btnadd = document.getElementById("button-add");
let addresult = document.getElementById("result");

function resultx(){
    let resultitem = f(btninput.value);
    addresult.innerHTML = resultitem;
}

// function f(n) {
//     if(n ==1 )
//     {
//         return 1;
//     }
//     if(n ==2 )
//     {
//         return 5;
//     }

//     return f(n-1) + f(n-2);
// }

function f(n)
{
    if(n == 1 )
    {
        return 1;
    }
    

}

btnadd.addEventListener("click", resultx);



