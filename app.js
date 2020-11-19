let library = []

function Book (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

let book1 = new Book ('title', 'author', 200)

function addBookToLibrary (book) {
    library.push(book)
}

addBookToLibrary(book1)

