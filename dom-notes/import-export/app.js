import { days as daze, months as monfs } from "./array.js"; // "as" for use with lodash e.g.
import { greetings } from "./function.js";

const text = document.querySelector("h1");
const text2 = document.querySelector("h2");
const text3 = document.querySelector("marquee");

const today = daze[2];
const summer = monfs[2];
const hallo = greetings("Alain");

text.innerHTML = today;
text2.innerHTML = summer;
text3.innerHTML = hallo;
