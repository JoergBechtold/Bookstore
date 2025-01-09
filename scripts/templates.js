//Template for generate All Books
function templateGenerateAllBooks(i, newPrice) {
  return /*html*/ `
         <div onclick="${i}.classList.toggle('fullscreen-bookdetails')" class="single-book-main-view">
            <span><u>${books[i].genre}</u></span>
            <img src="${books[i].bookImg}" alt="Bild vom Buch ${books[i].name}" />
            <span>${books[i].name}</span>
            
            <span style="font-weight: 100">${books[i].author}</span>
            <span>${newPrice}€</span>
          </div>
        `;
}
