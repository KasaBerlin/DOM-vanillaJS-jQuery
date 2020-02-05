// #  Insert mouseenter and mouseleave

// **Complete with jQuery**

// * Create a button that contains some text.

$("body").prepend("<button></button>");

$("button").text("Just put the mouse over me!");

$("button").css({
  "background-color": "#4CAF50",
  border: "none",
  color: "white",
  padding: "15px 32px",
  "text-align": "center",
  "text-decoration": "none",
  display: "block",
  "font-size": "16px",
  margin: "0 auto",
  "margin-top": "50vh"
});

// * When the user enters the mouse, the text of the button changes to 'Welcome! Stay here forever!'
$(document).ready(function() {
  $("button").on("mouseenter mouseleave", function(e) {
    if (e.type === "mouseenter") {
      $("button").text("Welcome! Stay forever!");
    } else {
      $("button").text("Don't leave me this way!");
    }
  });
});

// * When the user's mouse leaves, change the text again to 'Dont go please!'.
// **See images for reference**
