/**
 * Toggle for editor
 */
setInterval(() => {
  $('#editor b').toggle();
}, 500);

/**
 * Resize the editor to full screen or minimal based on scroll
 */
$(document).on('ready scroll', () => {
  if (window.scrollY > 10) {
    $('#editor').removeClass('full');
  } else {
    $('#editor').addClass('full');
  }
});

/**
 * Update current year in footer
 */
$(document).ready(() => {
  console.info('Nothing here except pure awesomeness...');
  $('#year').text(new Date().getFullYear());
});

/**
 * Scroll on arrow click
 */
$('.arrow').on('click', () => {
  $('html, body').animate({scrollTop: '50px'}, 250);
});
