$(document).ready(function(){
  $("button").click(function(){
    if ($("button").text == "Menu ☰"){
      $("button").text("x");
    } else {
      $("button").text("Menu ☰");
    }
    $("ul").toggle("slow");
  });
});