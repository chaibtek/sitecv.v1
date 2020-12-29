class UsersApp {
	constructor() {
		this.table = null; // HTMLTableElement
		this.users = null; // Array<Object>
		// -1 = tri ASC, +1 = tri DESC.
		this.sortOrderFamilyName = -1;
		this.sortOrderGivenName = -1;
	}
	buildTableHead() {
		this.table = document.createElement('table');
		let row = this.table.insertRow();
		let cellFamilyName = row.insertCell();
		cellFamilyName.textContent = "Family Name";
		cellFamilyName.id = "familyName";
		let cellGivenName = row.insertCell();
		cellGivenName.textContent = "Given Name";
		cellGivenName.id = "givenName";
		out.appendChild(this.table);
	}
	load() {
		const URL = 'https://adok.org/form/bibliotech/users.php';
		return fetch(URL)
			.then(response => response.ok ? response.json() : Promise.reject())
			.then(users => this.users = users);
	}
	buildRows() {
		this.users.forEach(user => {
			let row = this.table.insertRow();
			row.insertCell().textContent = user.familyName;
			row.insertCell().textContent = user.givenName;
		});
	}
	removeRows() {
		this.table.querySelectorAll('tr:not(:first-child)').forEach(row => row.remove());
	}
	sortFamilyName() {
		this.users.sort((user1, user2) => user1.familyName < user2.familyName ? this.sortOrderFamilyName : -this.sortOrderFamilyName);
		this.sortOrderFamilyName = - this.sortOrderFamilyName;
		this.sortOrderGivenName = -1;
	}
	sortGivenName() {
		this.users.sort((user1, user2) => user1.givenName < user2.givenName ? this.sortOrderGivenName : -this.sortOrderGivenName);
		this.sortOrderGivenName = - this.sortOrderGivenName;
		this.sortOrderFamilyName = -1;
	}
}
