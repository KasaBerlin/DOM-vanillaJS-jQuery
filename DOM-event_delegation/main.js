// Event Delegation
/// Event Delegation allows you to avoid adding
// event listeners to specific nodes. Instead the event
// listener is added to one parent

// document.getElementById("parent-list").addEventListener("click", function(e) {
//   // e.target is the clicked element
//   if (e.target.tagName  == "LI") {
//     // nodeName
//     // list item found - Output
//     console.log("List item", e.target.id.replace("post-", ""), "was clicked!");
//   }
// });

// ------------------------------------------------------------------------------------------------
// In XHTML (or any other XML format), text_field's value would read "div". 
// However, in HTML, text_field's value would read "DIV", because nodeName and tagName 
// return in upper case on HTML elements in DOMs flagged as HTML documents. Read more details 
// on nodeName case sensitivity in different browsers.

// Note that the Element.tagName property could have been used instead, 
// since nodeName has the same value as tagName for an element. Bear in mind, 
// however, that nodeName will return "#text" for text nodes while tagName will return undefined.
// ------------------------------------------------------------------------------------------------


// Get the parent DIV and add a click listener

// document.getElementById("myDiv").addEventListener("click", function(e) {
//   if (e.target.matches("a.classA")) {
//     console.log("Anchor element clicked!");
//   }
// });


// document.addEventListener(
//   "focus",
//   function(e) {
//     console.log(e.target.nodeName);
//   },
//   true
// );

// USE CAPTURE (true or false - for non-bubbling events-like focus)
