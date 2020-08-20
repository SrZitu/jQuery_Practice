$(document).ready(function () {
  $("h1,h2").addClass("first-Style margin-50");
  $("button").removeClass("first-Style");

  $("p").text("ki khobor? bujhte passo?");
  /*adding img class*/
  $("img").addClass("img");
  $("a").attr("href");
  /*h3 clicking event*/
  $("h3").click(function () {
    $("h3").css("color", "blue");
  });
  /*button  clicking event and changing h1 color. Here when button is clicked h1 tag color is changed*/
  $("button").click(function () {
    $("h1").css("color", "blue");
  });
  /* selecting input event*/
  $("input").keypress(function (event) {
    $("h1").text(event.key);
  });

  $("h1").on("mouseover", function () {
    $("h1,h2").css("color", "purple");
  });

  $("h4").on("click", function () {
    $("h4").css("color", "purple");
  });
  $("h5").click(function () {
    $(this).hide();
  });
});
