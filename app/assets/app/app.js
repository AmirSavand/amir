/**
 * Toggle for editor
 */
setInterval(function () {
  $('#editor b').toggle();
}, 500);

/**
 * Resize the editor to full screen or minimal based on scroll
 */
$(document).on('ready scroll', function () {
  if (window.scrollY > 10) {
    $('#editor').removeClass('full');
  } else {
    $('#editor').addClass('full');
  }
});

/**
 * Update current year in footer
 */
$(document).ready(function () {
  console.info('Nothing here except pure awesomeness...');
  $('#year').text(new Date().getFullYear());
});

/**
 * Scroll on arrow click
 */
$('.arrow').on('click', function () {
  $('html, body').animate({scrollTop: '50px'}, 250);
});
