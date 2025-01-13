//Template for generate All Books
function templateGenerateAllBooks(i, newPrice) {
  return /*html*/ `
         <div onclick="openFullScreenOverlay(${i})" class="single-book-main-view">
            <span><u>${books[i].genre}</u></span>
            <img src="${books[i].bookImg}" alt="Bild vom Buch ${books[i].name}" />
            <span>${books[i].name}</span>
            
            <span style="font-weight: 100">${books[i].author}</span>
            <span>${newPrice}€</span>
          </div>
        `;
}

//  Template for Fullscreen Book content
function templateGenerateFullscreenContent(i) {
  return /*html*/ `
  <div onclick="eventBubbling(event)" class="container-bookdetails">
          <div onclick="closeFullscreenOverlay()" class="close-icon-overlay">
            <img src="assets/icons/icon-close-50.png" />
          </div>
          <div class="blablabla">
            <!--Change img in javascript-->
            <div class="">
              <img class="img-bookdetails" id="img_bookdetails" src="${books[i].bookImg}" alt="Bild vom Buch ${books[i].name}" />
            </div>
            <div>
              <!--Change headline h1 in javascript-->
              <div style="flex-direction: column" class="">
                <h1 id="headline_bookdetails">${books[i].name}</h1>
              </div>

              <div class="content-bookdestails"></div>

              <div class="comments-bookdetails"></div>
            </div>
          </div>
        </div>


`;
}
