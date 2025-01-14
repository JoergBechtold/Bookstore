function openFullScreenOverlay(i, newPrice) {
  let fullscreenOverlayRef = document.getElementById('fullscreen_overlay');
  fullscreenOverlayRef.innerHTML = '';
  document.body.classList.add('no-scroll');
  document.getElementById('fullscreen_overlay').style = '';

  fullscreenOverlayRef.innerHTML += templateGenerateFullscreenContent(i, newPrice);
  forLoobAllComments(i);
}

function closeFullscreenOverlay() {
  document.body.classList.remove('no-scroll');
  document.getElementById('fullscreen_overlay').style = 'display: none';
}
