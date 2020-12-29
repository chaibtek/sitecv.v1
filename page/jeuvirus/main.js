"use strict";
const NB_ROWS = 10;
const NB_COLUMNS = 30;
const NB_VICTIMS = 20;
const IMG_DIM = 50;
const IMG_VIRUS = 'img/virus.png';
const IMG_VICTIM = 'img/victim.png';
// Retenir l'epoch de début.
let epochDebut = Date.now();
// Créer le tableau HTML de NB_COLUMNS x NB_ROWS cases.
let table = document.createElement('table');
for (let i = 0; i < NB_ROWS; i++) {
	table.insertRow();
	for (let j = 0; j < NB_COLUMNS; j++) {
		table.rows[i].insertCell();
	}
}
// Générer aléatoirement l'emplacement initial du virus.
let r = Math.floor(Math.random() * NB_ROWS);
let c = Math.floor(Math.random() * NB_COLUMNS);
// Placer le virus à son emplacement initial.
let virus = new Image(IMG_DIM, IMG_DIM);
virus.src = IMG_VIRUS;
table.rows[r].cells[c].appendChild(virus);
// Générer NB_VICTIMS victimes placées aléatoirement dans NB_VICTIMS emplacements différents.
let victims = [];
while (victims.length < NB_VICTIMS) {
	let x = Math.floor(Math.random() * NB_ROWS);
	let y = Math.floor(Math.random() * NB_COLUMNS);
	if (x === r && y === c)
		continue; // Victime au même emplacement que le virus !
	if (victims.filter(victim => victim.r === x && victim.c === y).length === 0) {
		victims.push({ r: x, c: y });
		let victim = new Image(IMG_DIM, IMG_DIM);
		victim.src = IMG_VICTIM;
		table.rows[x].cells[y].appendChild(victim);
	}
}
// Utiliser une expression de fonction pour la lambda de l'écouteur.
// Pour pouvoir ensuite supprimer l'écouteur.
 let listener = evt => {
	switch (evt.key) {
		case "ArrowUp":
			if (r > 0) {
				r--;

			}
			break;
		case "ArrowRight":
			if (c < NB_COLUMNS - 1) {
				c++;

			}
			break;
		case "ArrowDown":
			if (r < NB_ROWS - 1) {
				r++;

			}
			break;
		case "ArrowLeft":
			if (c > 0) {
				c--;

			}
	}
	// Le cas échéant , supprimer la victime à l'emplacement du virus.
	victims = victims.filter(victim => victim.r !== r || victim.c !== c);
	// Liquider le contenu de la cellule aux coordonnées du virus.
	table.rows[r].cells[c].innerHTML = '';
	// Placer le virus à son emplacement 
	table.rows[r].cells[c].appendChild(virus);
	// Afficher la victoire.
	if (victims.length === 0) {
		let epochFin = Date.now();
		let bravo = document.createElement('div');
		bravo.id = 'bravo';
		bravo.textContent = `Bravo, vous avez mis ${((epochFin - epochDebut) / 1000).toFixed(2) } secondes !`;
		out.appendChild(bravo);
	    window.removeEventListener('keydown', listener, false);
	}
};
// Ecouter les déplacements du virus.
window.addEventListener('keydown',listener,false);

// Afficher l'ensemble.
out.appendChild(table);
