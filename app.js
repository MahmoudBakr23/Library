function Book (title, author, pages) {
  this.title = title;
  this.author = author;
	this.pages = pages;
	this.status = "not read";
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
			<td><button class="status">${book.status}</button</td>
			<td><button class="delete">X</button></td>
		`
		booksContainer.appendChild(bookRow)
	})
}

function bookStatus(book) {
	if(book.classList.contains('status')) {
		book.innerHTML = "read!"
		book.classList.add('read')
	}
}

function deleteBook(book) {
	if(book.classList.contains('delete')) {
		book.parentElement.parentElement.remove()
	}
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

document.getElementById('list').addEventListener('click', (book) => {
	deleteBook(book.target)
})

document.getElementById('list').addEventListener('click', (book) => {
	bookStatus(book.target)
})