/**
 * @desc Toggle for editor
 */
setInterval(function () {
  $("#editor b").toggle();
}, 500);

/**
 * @desc Resize the editor to full screen or minimal based on scroll
 */
$(document).on("ready scroll", function (event) {
  if ($(window).scrollTop() > 10) {
    $("#editor").removeClass("full");
  } else {
    $("#editor").addClass("full");
  }
});

/**
 * Update current year in footer
 */
$(document).on("ready", function() {
  $("cd").text(new Date().getFullYear());
});
