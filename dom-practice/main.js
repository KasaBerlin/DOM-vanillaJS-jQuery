// 1. Select the section with an id of container without using querySelector.

let containerid = document.getElementById("container");

// console.log(containerid);

// 2. Select the section with an id of container using querySelector.

let containerquery = document.querySelector("section");
// console.log(containerquery);

// 3. Select all of the list items with a class of "second".

let second = document.querySelectorAll("#container .second");
// console.log(second);

// 4. Select a list item with a class of third,
// but only the list item inside of the ol tag.

let olThird = document.querySelectorAll("ol .third");
// console.log(olThird);

// 5. Give the section with an id of container the text "Hello!".

containerid.innerHTML = "Hello!" + containerid.innerHTML;

// 6. Add the class main to the div with a class of footer.

let footer = document.querySelector(".footer"); //  node list wit query
footer.className += " main"; //or
// document.querySelector("#footer").classList.add("main");

// 7) Remove the class main on the div with a class of footer.

footer.classList.remove("main");
// console.log(document.body);
// set Timeout Function if you want to see the "main" class step

// const func = () => {
//   footer.classList.remove("main");
//   console.log(document.body);
// };
// setTimeout(func, 200);

// 8. Create a new li element.

let newLi = document.createElement("li");
// console.log(newLi);

// 9. Give the li the text "four".

newLi.textContent = "four";
// console.log(newLi);

// let newLiText = document.createTextNode("four");
// newLi.appendChild(newLiText);
// console.log(newLi);

// 10) Append the li to the ul element.

document.querySelector("ul").append(newLi);

// 11. Loop over all of the list inside the ol tag and give them a background color of "green".

let olli = document.querySelectorAll("ol li");
for (let i = 0; i < olli.length; i++) {
  olli[i].style.backgroundColor = "green";
}

// 12) Remove the div with a class of footer.

footer.remove();
console.log(document.body);

let li = document.getElementsByTagName("li");
console.log(li);
let lis = document.querySelectorAll("li");
console.log(lis);
