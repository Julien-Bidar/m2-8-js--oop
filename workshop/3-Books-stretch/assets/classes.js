class Book {
    constructor (title, genre, author, isRead=false){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead
    }
}


class BookList {
    constructor(){
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null
    }
    startReading = (title) => {
    this.books.filter((book)=>{
        if(book.title === title){
        this.currentlyReading = book
        }
    })
    }

    finishReading = (title) => {
    this.books.filter((book) => {
        if(book.title === title){
        this.lastRead = book
        this.currentlyReading = null
        }
    })

    }
    add = (book) =>{
    this.books.push(book);
    if(this.currentlyReading === null)
    this.currentlyReading = book;
    }
    getNumUnread = () => {
    let numUnread = 0;
    this.books.forEach((book) =>{
        if(!book.isRead){
        numUnread++
        }
    })
    return numUnread
    }
    getNumRead = () => {
    let numRead = 0;
    this.books.forEach((book) =>{
        if(book.isRead){
        numRead++
        }
    })
    return numRead
    }
}