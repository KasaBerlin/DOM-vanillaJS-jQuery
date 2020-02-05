// Globals

let input = document.querySelector('[type="text"]');
let add = document.querySelector('[type="submit"]');
let ul = document.querySelector("ul");

// add new li-item to ul

input.addEventListener("keypress", e => {
    if (e.keyCode === 13 && input.value != "") {
        ul.insertAdjacentHTML('afterbegin','<li>'+input.value+'</li>');
        document.querySelector("li").insertAdjacentHTML('beforeend','<button>'+'<i class="fas fa-recycle"></i>'+'</button>'); 
        input.value="";                
        e.preventDefault()
    } else if (e.keyCode === 13 && input.value===""){
        e.preventDefault();
    } 
});

add.addEventListener("click", e => {
    if (input.value != ""){
        ul.insertAdjacentHTML('afterbegin','<li>'+input.value+'</li>');
        document.querySelector("li").insertAdjacentHTML('beforeend','<button>'+'<i class="fas fa-recycle"></i>'+'</button>'); 
        input.value="";
        input.focus();
        e.preventDefault();
    } else if (input.value===""){
        e.preventDefault();
    }
});

// delete li-item

let lis=document.querySelectorAll("ul");

for (let i=0;i<lis.length;i++){
    lis[i].addEventListener("click",e=>{  
        if (e.target.nodeName === "I"){
            lis[i].children[i].remove();
    }
})
}

