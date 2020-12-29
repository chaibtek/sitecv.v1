"use strict";
let usersApp = new UsersApp();
usersApp.buildTableHead();
usersApp.load()
	.then(() => usersApp.buildRows())
	.catch(() => console.error("Problème serveur"));
familyName.addEventListener('click', evt => {
	usersApp.sortFamilyName();
	usersApp.removeRows();
	usersApp.buildRows();
});
givenName.addEventListener('click', evt => {
	usersApp.sortGivenName();
	usersApp.removeRows();
	usersApp.buildRows();
});
