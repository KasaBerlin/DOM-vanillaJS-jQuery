console.log(document.dir);
// Create a webpage with an h1 of "My Book List".

let body = document.querySelector("body");
body.innerHTML="<h1>My Book List</h1>";

// Iterate through the array of books.
// For each book, create a p element with the book
// title and author and append it to the page.
// Use a ul and li to display the books.

const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  }
];


for (let i=0;i<books.length;i++){
  let p = document.createElement("p");
  body.append(p);
  let ul = document.createElement("ul");
  p.append(ul);
  let title = document.createElement("li");
  ul.append(title);
  let author=document.createElement("li");
  ul.append(author);
  title.innerHTML=`Title: ${books[i].title} by `;
  author.innerHTML=`Author: ${books[i].author}`;
  let img = document.createElement("img");
  ul.append(img); 
  
  // Change the style of the book depending on whether you have read it or not.
  books[i].alreadyRead === true? 
  ul.lastChild.style.border="2px double silver": 
  ul.lastChild.style.filter="blur(4px)";
}

// Add an img to each book that links to a URL of the book cover.
let allImg=body.querySelectorAll("img");

allImg[0].src="https://images-na.ssl-images-amazon.com/images/I/719KFS67JBL._SX309_BO1,204,203,200_.gif";
allImg[1].src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg";

for (let i=0; i<allImg.length;i++){
allImg[i].height="300";
allImg[i].vspace="20";
allImg[i].alt=books[i].title;
}






