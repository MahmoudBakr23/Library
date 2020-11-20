function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = 'read';
}

const library = [];

function addBookToLibrary(book) {
	library.push(book);
}

function displayBooks() {
	const booksList = library;
	const booksContainer = document.getElementById('list');
	booksContainer.innerHTML = '';
	if (booksList !== null) {
		booksList.forEach((book, index) => {
			const bookRow = document.createElement('tr');
			bookRow.innerHTML = `
				<td>${book.title}</td>
				<td>${book.author}</td>
				<td>${book.pages}</td>
				<td><button class="${book.status ? 'unread' : 'read'}" data-status=${index}>${book.status ? 'Unread' : 'Read'}</button</td>
				<td><button class="delete" data-id=${index}>X</button></td>
			`;
			booksContainer.appendChild(bookRow);
		});
	}
}

function bookStatus(index) {
	library[index].status = !library[index].status;
	displayBooks();
}

function deleteBook(index) {
	library.splice(index, 1);
	displayBooks();
}

function eventListeners() {
	document.getElementById('add-book').addEventListener('submit', (book) => {
		book.preventDefault();

		const title = document.getElementById('title').value;
		const author = document.getElementById('author').value;
		const pages = document.getElementById('pages').value;

		const newBook = new Book(title, author, pages);
		addBookToLibrary(newBook);
		displayBooks();
		document.getElementById('add-book').reset();
	});

	document.getElementById('list').addEventListener('click', (book) => {
		const bookId = book.target.getAttribute('data-id');
		const bookStatusId = book.target.getAttribute('data-status');
		if (bookId !== null) {
			deleteBook(bookId);
		}
		if (bookStatusId !== null) {
			bookStatus(bookStatusId);
		}
	});
}

displayBooks();
eventListeners();