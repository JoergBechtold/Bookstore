function generateAllBooks() {
  let bestsellerBookSectionRef = document.getElementById('bestseller-book-section');
  bestsellerBookSectionRef.innerHTML = '';

  for (let i = 0; i < books.length; i++) {
    newPrice = changeThePrice(i); //Function in scripts.js folder

    bestsellerBookSectionRef.innerHTML += templateGenerateAllBooks(i, newPrice); //Function in scripts.js folder
  }
}

function forLoobAllComments(i) {
  let commentsContainerRef = document.getElementById(`comments_container${i}`);
  commentsContainerRef.innerHTML = '';

  for (let j = 0; j < books[i].comments.length; j++) {
    let bookCommentUsername = books[i].comments[j].name;
    let bookComment = books[i].comments[j].comment;

    commentsContainerRef.innerHTML += tamplateGenerateHtmlComments(bookCommentUsername, bookComment); //Function in templates.js folder
  }
}

function valideInputNewPost(i) {
  let newPostInputRef = document.getElementById(`new_post_input${i}`);
  let btnNewPostRef = document.getElementById(`btn_new_post${i}`);
  if (newPostInputRef.value.length == 0) {
    btnNewPostRef.disabled = true;
  } else {
    btnNewPostRef.disabled = false;
  }
}

function newPost(i) {
  let newPostInputRef = document.getElementById(`new_post_input${i}`);
  books[i].comments.unshift({ name: myProfileName, comment: newPostInputRef.value });
  newPostInputRef.value = '';
  forLoobAllComments(i);

  saveJason();
  scrollToTop(i);
  valideInputNewPost(i);
}

function scrollToTop(i) {
  let commentsContainerRef = document.getElementById(`comments_container${i}`);

  return (commentsContainerRef.scrollTop = 0);
}

/* number of Like Plus */
function numberoOfLikesPlus(i) {
  books[i].likes++;
  saveJason();
}

/* number of Likes Minus */
function numberofLikesMinus(i) {
  books[i].likes--;
  saveJason();
}

/* Save in Localstorage */
function saveJason() {
  let jasonArrayAsText = JSON.stringify(books);
  localStorage.setItem('Bücher', jasonArrayAsText);
}

/* Load  from localstorage */
function loadJason() {
  let jasonArrayAsText = localStorage.getItem('Bücher');

  if (jasonArrayAsText) {
    books = JSON.parse(jasonArrayAsText);
  }
}

// like
function likeIt(i, newPrice) {
  books[i].liked = true;
  numberoOfLikesPlus(i);
  openFullScreenOverlay(i, newPrice);
  saveJason();
}

// dislike
function dislike(i, newPrice) {
  books[i].liked = false;
  numberofLikesMinus(i);
  openFullScreenOverlay(i, newPrice);
  saveJason();
}
