// # jQuery Drop Down

// ## Create a drop down menu

// * Create a navbar that contains 5 list items. When the user clicks each list item, a drop down menu of three items should appear.
// In the mock up image provided, there are five movie names. When the user clicks one, a drop down menu appears with the names of the
// three main actors.

// * If another movie title is clicked, the previous one closes and the new one opens.

// **Hint**: You may want to create a class like 'shown' to make the dropdown list visible. When the link is clicked you may want to
// toggle this class to that specific menu item.

// * Once you are finished with writing the code in vanilla JS, convert your code to Jquery.

let li=document.querySelectorAll(".dropdown-content")

document.onclick=e=>{
Array.prototype.forEach.call(li,function(el,i,array){
    
    // hover color 
    li[i].onmouseout=e=>{
      e.target.style.backgroundColor = "transparent";
    }
    li[i].onmouseover=e=> {
      e.target.style.backgroundColor = "orangered";
    }

    // click event
    if (!e.target.matches(".dropbtn")) {
      li[i].classList.remove("show");
    } else if (li[i].classList.contains("show")){
      e.target.nextElementSibling.classList.toggle("show");
      li[i].classList.remove("show");
    } else if (e.target.matches('.dropbtn') && e.target.nextElementSibling.className != "show"){
      e.target.nextElementSibling.classList.toggle("show");
    } 
  })
  };
  
// jQuery

// $(document).ready(function() {
//   //remove class
//   // $(document).click(function(e) {
//   //   e.stopPropagation();
//   //     $("dropdown-content").removeClass("show");
//   //   }
//   // );

//   // click open
//   $(".dropdown").click(function() {
//     $(".dropdown-content", this).toggleClass("show");
//   });
//   // click close 
// //   $(document).click(function(){
// //     $(".dropdown-content").hide();
// // })

// // $(".dropbtn").siblings().click(function (e) {
// //   e.stopPropagation();
// // });

// //   $("dropdown-content").click(function(e) {
// //     e.stopPropagation();
// //   });

//   // hover li

//   $("li").hover(
//     function() {
//       $(this).css("background-color", "pink");
//     },
//     function() {
//       $(this).css("background-color", "transparent");
//     }
//   );


// });
