const shelfBooks = [
    {
        name:'Harry Potter and the Philosopher s Stone',
        author: 'joanne rowling',
        genre: 'fantasy',
        year:1997,
    },
    {
        name:'дюна',
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
const BookGenre = shelfBooks.filter(book => (book.genre == "horror")).map((book)=> {return book.name.toUpperCase()});
console.log(BookGenre); 
const BookXX = shelfBooks.filter(book => (book.year > 1900 && book.year < 2000)).map(book=> {return book.name;});
console.log(BookXX);
const BookXXI = shelfBooks.filter(book => (book.year > 2000 )).map(book=> {return book.name;});
console.log(BookXXI);

