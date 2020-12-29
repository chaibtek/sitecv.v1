"use strict";
let booksApp = new BooksApp();
booksApp.load()
	.then(() => booksApp.buildDivs())
	.catch(() => console.error("Problème serveur"));
