$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("#fadeclick").click(function() {
    $("#fadein").fadeIn();
  });
});
