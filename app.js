function Book(title, author, pages, status) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

const library = [];

function addBookToLibrary(book) {
	library.push(book);
}

function displayBooks() {
	const booksList = library;
	const booksTable = document.getElementById('books-table');
	booksTable.innerHTML = `
													<thead>
														<td style="color: #fff; background-color: #333;">Book ID</td>
														<td style="color: #fff; background-color: #333;">Title</td>
														<td style="color: #fff; background-color: #333;">Author</td>
														<td style="color: #fff; background-color: #333;">No.Pages</td>
														<td style="color: #fff; background-color: #333;">Read?</td>
														<td style="color: #fff; background-color: #333;">Delete</td>
													</thead>
													<tbody id="books-table-rows">
													</tbody>
													`;

	const booksTableRows = document.getElementById('books-table-rows');
	if (booksList !== null) {
		booksList.forEach((book, index) => {
			const bookRow = document.createElement('tr');
			bookRow.innerHTML = `
				<td>${index + 1}.</td>
				<td>${book.title}</td>
				<td>${book.author}</td>
				<td>${book.pages}</td>
				<td><button data-book-status=${index}>${book.status}</button</td>
				<td><button class="delete" data-book-id=${index}>X</button></td>
			`;
			booksTableRows.appendChild(bookRow);
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

const showFormButton = document.getElementById('show-form-button');
const addBookForm = document.getElementById('add-book-form');
function eventListeners() {
	showFormButton.addEventListener('click', () => {
		addBookForm.classList.remove('hidden');
		showFormButton.classList.add('hidden');
	});

	addBookForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const title = document.getElementById('title').value;
		const author = document.getElementById('author').value;
		const pages = document.getElementById('pages').value;
		const status = document.querySelector('input[name=readBook]:checked').value;

		const newBook = new Book(title, author, pages, status);
		addBookToLibrary(newBook);
		displayBooks();
		document.getElementById('add-book-form').reset();
	});

	document.addEventListener('click', (event) => {
		const bookId = event.target.getAttribute('data-book-id');
		const bookStatusId = event.target.getAttribute('data-book-status');
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
