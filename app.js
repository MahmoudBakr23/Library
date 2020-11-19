const library = [];

function Book (title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 800)
let book2 = new Book("Twilight", "I Don't Remember", 500)

function addBookToLibrary(book) {
  library.push(book);
}

addBookToLibrary(book1)
addBookToLibrary(book2)

console.log(library)

const booksContainer = document.getElementById('books-container')

library.forEach(function(book) {
  let bookTitle = document.createElement('h4')
  bookTitle.innerText = book.title
  booksContainer.appendChild(bookTitle)

  let bookAuthor = document.createElement('h5')
  bookAuthor.innerText = `Author: ${book.author}`
  booksContainer.appendChild(bookAuthor)

  let bookPages = document.createElement('span')
  bookPages.innerText = `Number of Pages ${book.pages}`
  booksContainer.appendChild(bookPages)
})


