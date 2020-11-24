const library = [];

function Book(title, author, pages, status) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

function addBookToLibrary(book) {
	library.push(book);
}

function displayBooks() {
	const booksList = library;
	const booksTableRows = document.getElementById('books-table-rows');
	booksTableRows.innerHTML = '';

	if (booksList !== null) {
		booksList.forEach((book, index) => {
			const bookRow = document.createElement('tr');
			bookRow.innerHTML = `
				<td>${index + 1}.</td>
				<td>${book.title}</td>
				<td>${book.author}</td>
				<td>${book.pages}</td>
				<td><button data-book-status=${index}>${book.status}</button</td>
				<td><button class="delete" data-book-id=${index}>Delete Book</button></td>
			`;
			booksTableRows.appendChild(bookRow);
		});
	}
}

function changeBookStatus(index) {
	library[index].status = !library[index].status;
	displayBooks();
}

function deleteBook(index) {
	library.splice(index, 1);
	displayBooks();
}

const formButton = document.getElementById('form-button');
const bookForm = document.getElementById('book-form');

function eventListeners() {
	formButton.addEventListener('click', () => {
		bookForm.classList.remove('hidden');
		formButton.classList.add('hidden');
	});

	bookForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const title = document.getElementById('title').value;
		const author = document.getElementById('author').value;
		const pages = document.getElementById('pages').value;
		const status = document.querySelector('input[name=readBook]:checked').value;

		const newBook = new Book(title, author, pages, status);
		addBookToLibrary(newBook);
		displayBooks();
		bookForm.reset();
	});

	document.addEventListener('click', (event) => {
		const bookId = event.target.getAttribute('data-book-id');
		const bookStatusId = event.target.getAttribute('data-book-status');

		if (bookId !== null) {
			deleteBook(bookId);
		}
		if (bookStatusId !== null) {
			changeBookStatus(bookStatusId);
		}
	});
}

displayBooks();
eventListeners();
