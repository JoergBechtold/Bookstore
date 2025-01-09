//Template for generate All Books
function templateGenerateAllBooks(i) {
  return /*html*/ `
         <div onclick="console(${i})" class="single-book-main-view">
            <span><u>${books[i].genre}</u></span>
            <img src="${books[i].bookImg}" alt="Bild vom Buch ${books[i].name}" />
            <span>${books[i].name}</span>
            
            <span style="font-weight: 100">${books[i].author}</span>
            <span>${books[i].price}€</span>
          </div>
        `;
}
