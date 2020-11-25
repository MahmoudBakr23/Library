const myLibrary = (function () {
	const library = [];

	const booksTableRows = document.getElementById('books-table-rows');
	const formButton = document.getElementById('form-button');
	const bookForm = document.getElementById('book-form');

	class Book {
		constructor(title, author, pages, status) {
			this.title = title;
			this.author = author;
			this.pages = pages;
			this.status = status;
		}

		changeStatus() {
			if (this.status === 'Read Already') {
				this.status = 'Not Yet Read';
			} else {
				this.status = 'Read Already';
			}
		}
	}

	function showForm() {
		bookForm.classList.remove('hidden');
		formButton.classList.add('hidden');
	}

	function addBookToLibrary(book) {
		library.push(book);
	}

	function displayBooks() {
		const booksList = library;
		booksTableRows.innerHTML = '';

		if (booksList !== null) {
			booksList.forEach((book, index) => {
				const bookRow = document.createElement('tr');
				bookRow.innerHTML = `
					<td>${index + 1}.</td>
					<td>${book.title}</td>
					<td>${book.author}</td>
					<td>${book.pages}</td>
					<td><span class="status">${book.status}</span><button class="status-change-button" data-book-status=${index}>Change</button</td>
					<td><button class="delete" data-book-id=${index}>Delete Book</button></td>
				`;
				booksTableRows.appendChild(bookRow);
			});
		}
	}

	function changeBookStatus(index) {
		library[index].changeStatus();
		displayBooks();
	}

	function deleteBook(index) {
		library.splice(index, 1);
		displayBooks();
	}

	formButton.addEventListener('click', showForm);
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

	function addNewBook(title, author, pages, status) {
		const newBook = new Book(title, author, pages, status);
		addBookToLibrary(newBook);
		displayBooks();
	}

	return { addNewBook, changeBookStatus, deleteBook };
}());
