let imgAll=document.querySelectorAll("img");
let button=document.querySelector("button");
let imgLinks=[
   "images/dice-1.svg",
   "images/dice-2.svg",
   "images/dice-3.svg",
   "images/dice-4.svg",
   "images/dice-5.svg",
   "images/dice-6.svg"
]

button.addEventListener("click", e=>{

intervalHandle=setInterval(function(e){ 

imgAll[0].src=imgLinks[Math.floor(Math.random()*6)];
imgAll[1].src=imgLinks[Math.floor(Math.random()*6)];}, 50);

setTimeout(function(){
clearInterval(intervalHandle)
},2000);
})
