var i = 0;
var txt = "Hello there, I'm Chris. Nice to meet you!"; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greeting").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
