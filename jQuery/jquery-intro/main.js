// JS - document.getElementById("demo").innerHTML="Hello, World!";
// JQ - $("#demo").html("Hello, World");
// $ = blinc
// $("selector").method();

// similar to window.onLoad
// $(document).ready(function() {
//   $("#demo").html("whatever");
// });

// Here is a list of the most commonly used selectors

// $("*") - wildcard/ all Selector= selects every element on the page
// $("p") - Tag: selects every instance of the <p> tag
// $(".example") - Class: selects every element that has the example class applied to it
// $("#example") - ID: selects a single instance of the unique example ID
// $("[type='text']") - attribute selector
// $("p: first-of-type") - Pseudo-element: selects the first <p>

$(document).ready(function() {
  $("#trigger").click(function() {
    $("#demo").html("Salut!");
  });
});

// the most commonly used event methods

// click() - executes on a single mouse click
// hover() - executes when the mouse is hovered over an element. mouseover() and mouseleave() apply
// only to the mouse entering or leaving an element, respectively
// submit() - " when a form is submitted
// keydown() - key down :)

$(document).ready(function() {
  $("#greeting").on("mouseenter mouseleave", function(e) {
    if (e.type === "mouseenter") {
      $("#greeting").css("color", "chartreuse");
    } else {
      // else mouseleave
      $("#greeting").css("color", "orange");
    }
  });
});
