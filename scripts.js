//book constructor
function Book(title, author, year) {
this.title = title;
this.author = author;
this.year = year;
}

//author constructor
function Author (name, last, books){
    this.name = name;
    this.last = last;
    this.books = books;

}

//method that adds Book to books
Author.prototype.addBook = function(book){
    this.books,push(book);
}

// authors 
let author1 = new Author("Douglas Crockford");
let author2 = new Author("Jon Duckett");
let author3 = new Author("David Flanagan");

//their books
let book1 = new Book("JavaScript: The Good Parts", 2008);
let book2 = new Book("JavaScript and JQuery: Interactive Front-End Web Development", 2013);
let book3 = new Book("JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language", 2020);

// add books to authors
author1.addBook(book1);
author2.addBook(book2);
author3.addBook(book3);

//authors and their books
console.log("Library");
console.log(${author1.name}'s books: author1.books);