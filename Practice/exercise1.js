$(document).ready(function () {
  // $("div").css("background", "purple");
  var colr = {
    width: "200px",
  };
  $(".highlight").css(colr);
  $("#third").css("border", "1px solid orange");
  $("div:first-of-type ").css("color", "green");
  $("p").text();
  $("p").first().text("new setted paragraph");
  $("li").first().text("food lover");
  var pri = $("ul").html();
  console.log(pri);
  $("img")
    .last()
    .attr(
      "src",
      "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    );
  $(".button").click(function () {
    $("img").last().attr("width", "400px");
  });
  $("button  ")
    .first()
    .on("click", function () {
      $(".language li").last().toggleClass("Colr");
    });
  $("h1").removeClass("Colr");
  $("p").addClass("paraColor");
  console.log($("input").val());
});
/*======================================Events======================================================================*/
$(document).ready(function () {
  $(".clc").click(function () {
    var text = $(this).text();
    console.log("you clicked " + text);
  });
  $(".btn2").click(function () {
    var text = $(this).text();
    console.log("you clicked " + text);
  });
  $(".btn3").click(function () {
    var text = $(this).text();
    console.log("you clicked " + text);
  });
  $("h2").on("click", function () {
    $(this).css("color", "purple");
  });
  $("input").on("keypress", function () {
    console.log("key pressed");
  });
  $("button").on("mouseenter", function () {
    $(this).css("font-weight", "bold");
  });
  $("button").on("mouseleave", function () {
    $(this).css("font-weight", "normal");
  });
  $(" button")
    .last()
    .click(function () {
      $("p").last().fadeToggle("slow", "linear");
    });
});
