const shelf = [
    {
        name:'Harry Potter and the Philosopher s Stone',
        author: 'joanne rowling',
        genre: 'fantasy',
        year:1997,
    },
    {
        name:'Dune',
        author: 'Frank Herbert',
        genre: 'fantasy',
        year:1920,
    },
    {
        name: 'At the Mountains of Madness',
        author:'Howard Phillips Lovecraf',
        genre:'horror',
        year:1936,
    },
    {
        name: 'Dark Places',
        author:'Gillian Flynn',
        genre:'horror',
        year:2009,
    },
    {
        name: 'Sanctum',
        author:'Madeleine Roux',
        genre:'horror',
        year:2016,
    },
    {
        name: 'The Legend of Sleepy Hollow',
        author:'Washington Irving',
        genre:'horror',
        year:1820,
    },
    {
        name: 'Exorcist',
        author:'William Blatty',
        genre:'horror',
        year:1971,
    },
    {
        name: 'Harry Potter and the Prisoner of Azkaban',
        author:'joanne rowling',
        genre:'fantasy',
        year:1999,
    },
    {
        name: 'Harry Potter and the Goblet of Fire',
        author:'joanne rowling',
        genre:'fantasy',
        year:2000,
    },
    {
        name: 'the catcher in the rye',
        author:'david salinger',
        genre:'Romance novel',
        year:1951,
    },
    {
        name: 'death on the nile',
        author:'agatha christie',
        genre:'detective',
        year:2020,
    }
]   
let genres = {'fantasy': 0, 'horror': 0, 'Romance novel': 0, 'detective': 0};
let popularGenre='fantasy';
let popGenResult = [];
let BooksXXI =[];
let BooksXX =[];

shelf.forEach((book) => { 
    ++genres[book.genre];
    if (genres[popularGenre] < genres[book.genre]) {
        popularGenre = book.genre;
    }
});
shelf.forEach((book) => { 
    if (book.genre === popularGenre) {
        popGenResult.push(book.name.toUpperCase());
    }
    if (book.year > 1900 && book.year < 2000) {
        BooksXX.push(book.name)
    }
    if (book.year > 2000){
        BooksXXI.push(book.name)
    };
});
console.log(popGenResult);
console.log(BooksXX);
console.log(BooksXXI);




