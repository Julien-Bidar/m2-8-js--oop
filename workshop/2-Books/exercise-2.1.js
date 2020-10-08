// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor (title, genre, author, isRead=false){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead
    }
}

let book1 = new Book("Harry Potter", "Adventure", "J.K. Rowling", true)
let book2 = new Book('White Fang', 'Adventure', 'Jack London')
let book3 = new Book("The Jungle Book", "Novel", "Rudyard Kipling", false)
let book4 = new Book("Le tour du monde en 80 jours", "Novel", "Jules Vernes", true)
let book5 = new Book("Never Cry Wolf", "Novel", "Farley Mowat", true)
console.log(book1, book2, book3, book4, book5);
