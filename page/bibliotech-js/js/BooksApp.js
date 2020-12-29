class BooksApp {
	constructor() {
		this.books = null; // Array<Object>
	}
	load() {
		const URL = 'https://adok.org/form/bibliotech/books.php';
		return fetch(URL)
			.then(response => response.ok ? response.json() : Promise.reject())
			.then(books => this.books = books);
	}
	buildDivs() {
		const URL_BASE_IMG = 'https://adok.org/form/bibliotech/img/';
		this.books.forEach(book => {
			let div = document.createElement('div');
			let img = new Image(300, 300);
			img.src = `${URL_BASE_IMG}book_${book.id}.jpg`;
			div.appendChild(img);
			let title = document.createElement('p');
			title.textContent = book.title;
			div.appendChild(title);
			out.appendChild(div);
		});
	}
}
