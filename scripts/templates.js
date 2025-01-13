//Template for generate All Books
function templateGenerateAllBooks(i, newPrice) {
  return /*html*/ `
         <div onclick="openFullScreenOverlay(${i}, '${newPrice}')" class="single-book-main-view">
            <span><u>${books[i].genre}</u></span>
            <img src="${books[i].bookImg}" alt="Bild vom Buch ${books[i].name}" />
            <span>${books[i].name}</span>
            
            <span style="font-weight: 100">${books[i].author}</span>
            <span>${newPrice}€</span>
          </div>
        `;
}

//  Template for Fullscreen Book content
function templateGenerateFullscreenContent(i, newPrice) {
  return /*html*/ `
  <div onclick="eventBubbling(event)" class="container-bookdetails">
          <div onclick="closeFullscreenOverlay()" class="close-icon-overlay">
            <img src="assets/icons/icon-close-50.png" />
          </div>
          <div class="content-bookdetails">
            <div class="img-bookdetails">
              <img class=" width-100" id="img_bookdetails" src="${books[i].bookImg}" alt="Bild vom Buch ${books[i].name}" />
            </div>
            <div  class="right-content-bookdetails">
              <div  class="">
                <h1 id="headline_bookdetails"><u>${books[i].name}</u></h1>
              </div>

              <div class="price-likes-bookdestails width-100">
                <div>
                <span>PREIS: ${newPrice}€</span>
                </div>
               
                <div class="likes-liked" >
                  <p>Gefällt ${books[i].likes}</p>
                  <div class="heart-box">
                    <img class="heart-black width-100" src="assets/icons/icon-herz-grau-50.png" alt="Bild vom schwarzen Like Herz">
                    <img class="heart-red width-100" src="assets/icons/icon-herz-rot-96.png" alt="Bild vom roten Like Herz">
                  </div>
                </div>
              </div >
            </div>
            
          </div>
          
  </div>


`;

  // <div class="comments-bookdetails"></div>;
}
