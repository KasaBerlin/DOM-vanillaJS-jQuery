let sectionClick = document.querySelector("section.click");
let img=document.querySelector("img")
let reverse=false;

sectionClick.addEventListener("click", function(e) {
 reverse=!reverse;
  // e.target is the clicked element
  if (reverse) {
    img.style="opacity:0.7; border:5px double darkcyan; filter:invert(80%)"
  } else if (!reverse){
    img.style = "opacity:1.0; filter:invert(0%); border:none"}
});

let circle=document.querySelector(".circle");

document.addEventListener("mousemove",function(e){
circle.style.left=e.pageX+20+"px";
circle.style.top=e.pageY+20+"px";
})
//  screenX = entire screen; clientX=window; pageX=page;

let keys=document.querySelector(".keys");

document.addEventListener("keypress",function(e){ 
 if (e.code[3] == keys.children[0].innerText){
    keys.children[0].style.backgroundColor="violet"; 
} else if (e.code[3] == keys.children[1].innerText){
  keys.children[1].style.backgroundColor="violet"; }
  else if 
  (e.code[3] == keys.children[2].innerText){
    keys.children[2].style.backgroundColor="violet"; }
    else if
    (e.code[3] == keys.children[3].innerText){
    keys.children[3].style.backgroundColor="violet"; }
});

// Dennis solution

// window.addEventListener("keydown", function() {
//   let key = event.keyCode;
//   switch (key) {
//     case 87 /*W*/:
//       console.log("W is pressed");
//       document.querySelector(
//         ".keys button:nth-of-type(1)"
//       ).style.backgroundColor = "orange";
//       break;
//     case 65 /*A*/:
//       console.log("A is pressed");
//       document.querySelector(
//         ".keys button:nth-of-type(2)"
//       ).style.backgroundColor = "orange";
//       break;
//     case 83 /*S*/:
//       console.log("S is pressed");
//       document.querySelector(
//         ".keys button:nth-of-type(3)"
//       ).style.backgroundColor = "orange";
//       break;
//     case 68 /*D*/:
//       console.log("D is pressed");
//       document.querySelector(
//         ".keys button:nth-of-type(4)"
//       ).style.backgroundColor = "orange";
//       break;
//   }
// });
