function Book (title, author, pages) {
  this.title = title;
  this.author = author;
	this.pages = pages;
	this.status = false;
}

function addBookToLibrary(book) {
	const library = [];
	library.push(book);
	library.forEach(function(book) {
		const booksContainer = document.getElementById('list')
		const bookRow = document.createElement('tr')
		bookRow.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.pages}</td>
			<td>${book.status}</td>
		`
		booksContainer.appendChild(bookRow)
	})
}

let book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 800)
let book2 = new Book("Twilight", "I Don't Remember", 500)
addBookToLibrary(book1)
addBookToLibrary(book2)

document.getElementById('add-book').addEventListener('submit', (book) => {
	book.preventDefault()

	const title = document.getElementById('title').value
	const author = document.getElementById('author').value
	const pages = document.getElementById('pages').value

	const newBook = new Book(title, author, pages)
	addBookToLibrary(newBook)
	console.log(library)
})