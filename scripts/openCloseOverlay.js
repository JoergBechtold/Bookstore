function openFullScreenOverlay(i) {
  document.body.classList.add('no-scroll');
  document.getElementById('fullscreen_overlay').style = '';
  document.getElementById('headline_bookdetails').innerHTML = books[i].name;
  document.getElementById('img_bookdetails').alt = `Bild vom Buch ${books[i].name}`;
  document.getElementById('img_bookdetails').src = books[i].bookImg;
}

function closeFullscreenOverlay() {
  document.body.classList.remove('no-scroll');
  document.getElementById('fullscreen_overlay').style = 'display: none';
}
