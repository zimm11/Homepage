$(document).ready(function(){
  $("#menu").click(function(){
    if ($("#menu").text == "Menu ☰"){
      $("#menu").text("x");
    } else {
      $("#menu").text("Menu ☰");
    }
    $("ul").toggle("slow");
  });
});


$(document).ready(function(){
  $("#hide").click(function(){
    $("#container").hide(500);
  });
  $("#hide").click(function(){
    $("#about-me").show(500);
  });
});


$(document).ready(function(){
  $("#image").click(function(){
    $("#container").hide(500);
  });
  $("#image").click(function(){
    $("#about-me").show(500);
  });
});


$(document).ready(function(){
  $("#show").click(function(){
    $("#about-me").hide(500);
  });
  $("#show").click(function(){
    $("#container").show(500);
  });
});
