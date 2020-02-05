// console.dir(document);
// console.log(document.domain);
// console.log(document.title);

// console.log((title = 123));
// console.log(document.dogtype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10].textContent="Whats up?");

// console.log(document.images);
// get element by ID

// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Fantastic 15";
// headerTitle.innerHTML = "<h3>Vacation is over</h3>";
// header.style.borderBottom = "dotted 10px blue";

// Get elements by class name

let items = document.getElementsByClassName("list-group-item");
console.log(items[2]);

// items[1].textContent = "Dunno what to say";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "coral";

// items.style.backgroundColor = "coral";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "gold";
// }

// get elements by tag name

// let li = document.getElementsByTagName("li");
// console.log(li[3]);
// li[1].style.backgroundColor = "sienna";

// Query Selector // use for only 1 item

// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 20px pink";

// let input = document.querySelector("input");
// input.value = "This is not item 5";

// let submit = document.querySelector('input[type = "submit"]');
// submit.textContent = "POST";

// let item = document.querySelector(".list-group-item");
// item.style.color = "red";

// let secondItem = document.querySelector(".list-group-item:nth-child(3)");
// secondItem.style.color = "blue";

// querySelectorAll

// let titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Almost lunchtime";

// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "coral";
//   even[i].style.backgroundColor = "pink";
// }

// Traversing(navigating up and down) the DOM

let itemList = document.querySelector("#items");

// parent elements

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "yellow";
// console.log(itemList.parentElement.parentElement);

// childNodes

// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].getElementsByClassName.backgroundColor = "chartreuse";
// console.log(
//   (itemList.children[2].getElementsByClassName.backgroundColor = "#f4f4f4")
// );

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Exhausted";

// lastElementChild
// console.log(itemList.lastElementChild);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);

// create Element

// create a div
let newDiv = document.createElement("div");

// add class
newDiv.className = "hello";

// add ID
newDiv.id = "hello1";

// add attr - setAttribute
newDiv.setAttribute("title", "Hello Div");
console.log(newDiv);

// create text node
let newDivText = document.createTextNode("Hello World");

// add text to div
newDiv.appendChild(newDivText);
let container = document.querySelector("header .container");

let h1 = document.querySelector("header h1");

console.log(newDiv);
newDiv.style.fontSize = "22px";
container.insertBefore(newDiv, h1);
