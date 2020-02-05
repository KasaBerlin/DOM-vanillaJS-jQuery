// In JavaScript, change the body tag's style so it has a font-family of "Arial, sans-serif".

document.body.style.fontFamily="Arial, sans-serif";

// In JavaScript, replace each of the spans (nickname, favorites, hometown) with your own information.

let ulli=document.querySelectorAll("ul li");

ulli[0].innerHTML+=" Kasa";
ulli[1].innerHTML+=" art, psychology, politics";
ulli[2].innerHTML+=" Berlin";

// Iterate through each li and change the class to "list-item".

for(let i=0;i<ulli.length;i++){
ulli[i].classList.add("list-item");
}

// Add a style attribute that sets a rule for .list-item to make the color red.

let listItem=document.querySelectorAll(".list-item");
const colorList= listItem.forEach(item=> item.style.color="coral");

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

let img= document.createElement("img");
document.body.insertBefore(img,document.body.firstChild);
img.src="https://avatars1.githubusercontent.com/u/47952766?s=460&v=4";
img.style.width="20%";
img.style.boxShadow="10px 10px 15px coral";
img.style.borderRadius="10px";