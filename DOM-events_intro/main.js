// events and event listeners (event handlers)

// window.addEventListener("mousedown", function(e) {
//   alert("WINDOW");
//   console.log(e);
// });

// the same with document // by mousepress/down a window opens

// Event.preventDefault()

// we use this method when we DO NOT want an
// HTML element to behave in its default manner

// let link = document.querySelector("a");
// // This is the method to access the first matched element

// link.addEventListener("click", function(e) {
//   console.log("Redirecting Stopped");
//   e.preventDefault();
// });

// closing a link e.g.

// Event.stopPropagation()
// Events flow upwards

// document.getElementById("button12").addEventListener("mousedown", function(e) {
//   alert("Button clicked");
//   if (e.button == 2) {
//     e.stopPropagation();
//   }
// });

// //  e.button === 2 means: right click; Propagation - to spread
// // Event listener on the paragraph element with its logic

// document.getElementById("demo").addEventListener("mousedown", function(e) {
//   alert("paragraph clicked");
// });

// with the Propagation its stops moving up the tree or to the parent

// remove an event listener from an element
// in order to remove an event listener from an
// element, we need to call the removeEventListener
// method with the event name and the function name

// let heading = document.querySelector("h1");

// function listener(e) {
//   if (event.type === "mouseenter") {
//     heading.style.color = "orangered";
//   } else if (e.type === "mouseleave") {
//     heading.style.color = "chartreuse";
//     heading.removeEventListener("mouseleave", listener);
//   }
//   console.log(e);
// }

// heading.addEventListener("mouseenter", listener);
// heading.addEventListener("mouseleave", listener);

// if you enter h1 it turns orangered, if you leave chartreuse,
// then it gets removed so it stays orangered

// DOMContentLoaded
// if you want to take some action once the HTML scripts have
// been loaded, you use DOMContentLoaded

// function onLoad(e) {
//   console.log(e);
//   alert("Page has loaded");
// }

// document.addEventListener("DOMContentLoaded", onLoad);

// pops up when the page has loaded (for video files e.g.)

// keyup
// let input = document.querySelector("input");

// function onKeyUpEvent(e) {
//   console.log(e);
//   alert(e.key + " was pressed.");
// }

// input.addEventListener("keyup", onKeyUpEvent);

// target.addEventListener(type, listener[, options]);
// (type= action you take eg. mouseclick, function gets executed)
// Das Objekt, welches eine Benachrichtigung erhält
// (ein Objekt, welches die Event Schnittstelle implementiert),
// wenn ein Event des angegebenen Typs auftritt.
// Es muss ein Objekt sein, welches die EventListener
// Schnittstelle implementiert, oder einfach eine JavaScript
// Funktion.

// shows you which key got pressed when in the input, keyup - when the you gets released

// Form Events
// submit

function logSubmit(e) {
  log.textContent = `Form Submitted! Time Stamp ${e.timeStamp}`;
  e.preventDefault(); // so the page doesn't refresh
  let formDa = new FormData(e.target);
  console.log(formDa.get);
}
// // e.timeStamp gets Data from the object
// target is like this in objects pro.
// // FormData is like date or maths ein schon fertiges Object im Hintergrund

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

// reset

function logReset(e) {
  resetLog.textContent = `Form reset! Time stamp: ${e.timeStamp}`;
}

const resetLog = document.getElementById("reset-log");
form.addEventListener("reset", logReset);

// only type attribute in button gets targeted with "reset" event, so you need the type attribute
