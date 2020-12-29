class TabApp {
    constructor(domElement) {
        this.domElement = domElement;
        this.datas = [];
        this.table = document.createElement('table');
        this.sortTriCorporate = -1;
        this.sortTricode = -1;
        this.sortTriValue = -1;
    }
    
    load() {
        const URL = `https://adok.org/form/nasdaq/nasdaq.php`;
        return fetch(URL)
            .then(response => response.ok ? response.json() : Promise.reject('Problème de chargement'))
            .then(datas => this.datas = datas)
    }

    createTableHead(args) {
        let row = this.table.insertRow();
        args.forEach(arg => {
            let cell = row.insertCell();
            cell.textContent = arg.detail;
            cell.id = arg.id;
        })
        this.domElement.appendChild(this.table);
    }

    createTableRow() {
        this.datas.forEach((data, i) => {
            let row = this.table.insertRow();
            let cell1 = row.insertCell();
            cell1.textContent = data.corporate;
            let cell2 = row.insertCell();
            cell2.textContent = data.code;
            let cell3 = row.insertCell();
            cell3.textContent = `${data.value} €`;
        })
        this.domElement.appendChild(this.table);
        document.querySelectorAll('td').forEach(el => el.classList.add('grey'));
        return this.table;
    }

    removeRows() {
        this.table.querySelectorAll('tr:not(:first-child)').forEach(row => row.remove());
    }

    sortCorporate() {
        this.datas.sort((data1, data2) => data1.corporate < data2.corporate ? this.sortTriCorporate : -this.sortTriCorporate);
        this.sortTriCorporate = -this.sortTriCorporate;
        this.sortTricode = -1;
        this.sortTriValue = -1;
    }

    sortCode() {
        this.sortTricode = -this.sortTricode;
        this.datas.sort((data1, data2) => data1.code < data2.code ? this.sortTricode : -this.sortTricode);
        this.sortTriCorporate = -1;
        this.sortTriValue = -1;
    }

    sortValue() {
        this.sortTriValue = -this.sortTriValue;
        this.datas.sort((data1, data2) => data1.value < data2.value ? this.sortTriValue : -this.sortTriValue);
        this.sortTriCorporate = -1;
        this.sortTricode = -1;
    }


    displayIconSort(sort,cell) {
        if (document.getElementById('arrow') !== null)
            document.getElementById('arrow').remove();
        let imgArrow = new Image(16, 16);
        if (sort === 1) {
            imgArrow.src = `img/up-arrow.png`;
            imgArrow.id = 'arrow';
        }
        if (sort === -1) {
            imgArrow.src = `img/down-arrow.png`;
            imgArrow.id = 'arrow';
        }
        cell.appendChild(imgArrow);
    }
}


/*

const URL_IMG = `http://openweathermap.org/img/wn/10d@2x.png`;

*/