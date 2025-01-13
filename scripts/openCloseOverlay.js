function openFullScreenOverlay() {
  document.body.classList.add('no-scroll');
  document.getElementById('fullscreen_overlay').style = '';
}

function closeFullscreenOverlay() {
  document.body.classList.remove('no-scroll');
  document.getElementById('fullscreen_overlay').style = 'display: none';
}
