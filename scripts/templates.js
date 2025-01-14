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
              <img class=" img-bookdetails" id="img_bookdetails" src="${books[i].bookImg}" alt="Bild vom Buch ${books[i].name}" />
            <div  class="right-content-bookdetails">
              <div  class="">
                <h1 id="headline_bookdetails"><u>${books[i].name}</u></h1>
              </div>

              <div class="price-likes width-100">
                <div>
                 <span>PREIS: ${newPrice}€</span>
                </div>
               
                <div class="likes-liked" >
                  <div>
                   <p>Gefällt&nbsp&nbsp${books[i].likes}</p>
                  </div>
                  <div class="heart-box">
                    <!-- generate red / gray heart -->
                   ${getLikedImgTemlate(i, newPrice)}
                  </div>
                </div>
              </div >

              <div class="bookdetails-table">
                <table>
                  <tr>
                    <th>AUTOR</th>
                    <td>:&nbsp&nbsp${books[i].author}</td>
                  </tr>
                  <tr>
                    <th>ERSCHEINUNGSJAHR</th>
                    <td>:&nbsp&nbsp${books[i].publishedYear}</td>
                  </tr>
                  <tr>
                    <th>GENRE</th>
                    <td>:&nbsp&nbsp${books[i].genre}</td>
                  </tr>
                </table>
               </div>

               <div class="comments-bookdetails width-100">
                 <h2>KOMMENTARE:</h2>
                  <div class="comments-container" id="comments_container${i}">
                     <!-- comments generate in templates.js folder -->
                  </div>

                  <div class="input-field-new-comment" id="input_field_ner_comment">
                    <div>
                      <form>
                      <textarea rows="10" cols=""></textarea><button></button>
                      </form>
                    </div>
                  </div>
                </div>     
        </div>   
  </div>


`;
}

function tamplateGenerateHtmlComments(bookCommentUsername, bookComment) {
  return /*html*/ `
  <div class="d-flex margin-top">
      <div id="comment_username" class="comment-username">
       <span>[${bookCommentUsername}]</span>
      </div>
      <div id="comment_usertext" class="comment-usertext">
       <span>${bookComment}</span>
      </div>
  </div>
`;
}

// template for like/dislike heart
function getLikedImgTemlate(i, newPrice) {
  if (books[i].liked == true) {
    return `<img onclick="dislike(${i}, '${newPrice}')" id="heart_icon_like_red${i}" class="heart-red width-100" src="assets/icons/icon-herz-rot-96.png" alt="Bild vom roten Like Herz" />`;
  } else {
    return `<img onclick="likeIt(${i}, '${newPrice}')" id="heart_icon_like${i}" class="heart-black width-100" src="assets/icons/icon-herz-grau-50.png" alt="Bild vom schwarzen Like Herz" />`;
  }
}

function likeIt(i, newPrice) {
  books[i].liked = true;
  numberoOfLikesPlus(i);
  openFullScreenOverlay(i, newPrice);
}

function dislike(i, newPrice) {
  books[i].liked = false;
  numberofLikesMinus(i);
  openFullScreenOverlay(i, newPrice);
}
