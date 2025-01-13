function openFullScreenOverlay(i) {
  let fullscreenOverlayRef = document.getElementById('fullscreen_overlay');
  document.body.classList.add('no-scroll');
  document.getElementById('fullscreen_overlay').style = '';
  fullscreenOverlayRef.innerHTML = '';
  fullscreenOverlayRef.innerHTML += templateGenerateFullscreenContent(i);
}

function closeFullscreenOverlay() {
  document.body.classList.remove('no-scroll');
  document.getElementById('fullscreen_overlay').style = 'display: none';
}
