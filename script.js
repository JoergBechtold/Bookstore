let myProfileName = 'jörg_Bechtold123';

let newPrice = 0;

let books = [
  {
    name: 'Die Geheimnisse des Ozeans',
    author: 'Clara Meer',
    bookImg: 'assets/img/Die_Geheimnisse_des_Ozeans.png',
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: 'Fantasy',
    comments: [
      {
        name: 'Leser123',
        comment: 'Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.',
      },
      {
        name: 'Bookworm84',
        comment: 'Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.',
      },
      {
        name: 'FantasyFanatic',
        comment: 'Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.',
      },
      {
        name: 'SciFiGuru',
        comment: 'Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.',
      },
      {
        name: 'NovelLover',
        comment: 'Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.',
      },
      {
        name: 'Leser123',
        comment: 'Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.',
      },
      {
        name: 'Leser123',
        comment: 'Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.',
      },
      {
        name: 'Leser123',
        comment: 'Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.',
      },
      {
        name: 'Leser123',
        comment: 'Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.',
      },
      {
        name: 'Leser123',
        comment: 'Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.',
      },
    ],
  },
  {
    name: 'Der vergessene Pfad',
    author: 'Maximilian Schwarz',
    bookImg: 'assets/img/Der_vergessene_Pfad.png',
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: 'Fantasy',
    comments: [],
  },
  {
    name: 'Die Farben des Himmels',
    author: 'Laura Blau',
    bookImg: 'assets/img/Die_Farben_des_Himmels.png',
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: 'Romantik',
    comments: [
      {
        name: 'LeserPeter',
        comment: 'Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.',
      },
      {
        name: 'BookLover21',
        comment: 'Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.',
      },
      {
        name: 'FantasyNerd',
        comment: 'Fantastische Welten und epische Abenteuer - genau mein Geschmack!',
      },
      {
        name: 'SciFiEnthusiast',
        comment: 'Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.',
      },
      {
        name: 'ReadingAddict',
        comment: 'Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.',
      },
    ],
  },
  {
    name: 'Das Rätsel der Zeit',
    author: 'Alexander Weiss',
    bookImg: 'assets/img/Das_Rätsel_der_Zeit.jpg',
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: 'Science-Fiction',
    comments: [
      {
        name: 'BuchKenner',
        comment: 'Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.',
      },
      {
        name: 'LeseWurm',
        comment: 'Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.',
      },
    ],
  },
  {
    name: 'Der letzte Wächter',
    author: 'Sabine Grün',
    bookImg: 'assets/img/Der_Letzte_Wächter.jpg',
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: 'Fantasy',
    comments: [],
  },
  {
    name: 'Im Schatten des Mondes',
    author: 'Philipp Silber',
    bookImg: 'assets/img/Im_Schatten_des_Mondes.jpg',
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: 'Science-Fiction',
    comments: [
      {
        name: 'BücherLiebhaber',
        comment: 'Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.',
      },
      {
        name: 'Leseratte',
        comment: 'Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.',
      },
    ],
  },
  {
    name: 'Jenseits der Sterne',
    author: 'Oliver Schwarz',
    bookImg: 'assets/img/Jenseits_der_Sterne.jpg',
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: 'Science-Fiction',
    comments: [
      {
        name: 'Leser123',
        comment: 'Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.',
      },
    ],
  },
  {
    name: 'Das verborgene Königreich',
    author: 'Elena Gold',
    bookImg: 'assets/img/Das_verborgene_Königreich.jpg',
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: 'Fantasy',
    comments: [
      {
        name: 'Bookworm92',
        comment: 'Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.',
      },
    ],
  },
  {
    name: 'Liebe in Zeiten des Krieges',
    author: 'Emilia Rot',
    bookImg: 'assets/img/Liebe_in_Zeiten_des_Krieges.jpg',
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: 'Romantik',
    comments: [
      {
        name: 'Bibliophile23',
        comment: 'Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.',
      },
      {
        name: 'StorySeeker',
        comment: 'Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.',
      },
      {
        name: 'SciFiExplorer',
        comment: 'Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.',
      },
    ],
  },
];

function generateAllBooks() {
  let bestsellerBookSectionRef = document.getElementById('bestseller-book-section');
  bestsellerBookSectionRef.innerHTML = '';

  for (let i = 0; i < books.length; i++) {
    book = books[i];
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

/* number of Like Plus */
function numberoOfLikesPlus(i) {
  books[i].likes++;
}

/* number of Likes Minus */
function numberofLikesMinus(i) {
  books[i].likes--;
}
