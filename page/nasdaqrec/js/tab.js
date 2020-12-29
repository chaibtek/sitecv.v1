"use strict";

let tabApp = new TabApp(out);

let details = [
    { detail: 'Corporate', id: 'corporate' },
    { detail: 'Code', id: 'code' },
    { detail: 'Value', id: 'value' }
]

tabApp.createTableHead(details);

tabApp.load()
    .then(() => tabApp.createTableRow())
    //.catch(() => console.error('Erreur de traitement des données'))

corporate.addEventListener('click', evt => {
    tabApp.sortCorporate();
    tabApp.removeRows();
    tabApp.displayIconSort(tabApp.sortTriCorporate,corporate);
    tabApp.createTableRow();
})

code.addEventListener('click', evt => {
    tabApp.sortCode();
    tabApp.removeRows();
    tabApp.displayIconSort(tabApp.sortTricode,code);
    tabApp.createTableRow();
})

value.addEventListener('click', evt => {
    tabApp.sortValue();
    tabApp.removeRows();
    tabApp.displayIconSort(tabApp.sortTriValue,value);
    tabApp.createTableRow();
})

