//book constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//author constructor
function Author (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.books = [];

}

//method that adds Book to books
Author.prototype.addBook = function(book){
    this.books.push(book);
}

// authors 
let author1 = new Author("Douglas", "Crockford");
let author2 = new Author("Jon", "Duckett");
let author3 = new Author("David", "Flanagan");

//their books
let book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008);
let book2 = new Book("JavaScript and JQuery: Interactive Front-End Web Development", "Jon Duckett", 2013);
let book3 = new Book("JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language", "David Flanagan", 2020);

// add books to authors
author1.addBook(book1);
author2.addBook(book2);
author3.addBook(book3);

//authors and their books
function displayAuthorsAndBooks(author){
    console.log(`Author: ${author.firstName} ${author.lastName}`);
    console.log("Books:");
    author.books.forEach(function(book, index) {
        console.log(`${index + 1}. ${book.title} (${book.year})`);
    });
    console.log("\n");
}

// Display each author and their books
displayAuthorsAndBooks(author1);
displayAuthorsAndBooks(author2);
displayAuthorsAndBooks(author3);   
