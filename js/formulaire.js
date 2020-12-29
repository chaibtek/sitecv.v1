"use strict";
function valider() {
	// Valider les données.
	let prenom = document.form1.prenom.value;
	if (estVide(prenom, "Le prénom")) return false;
	if (!estAlpha(prenom, "Le prénom")) return false;
	let email = document.form1.email.value;
    if (estVide(email, "Votre email")) return false;
    if (fakeMail(email, "Votre email")) return false;
	let message = document.form1.message.value;
	if (estVide(message, "message")) return false;
	return true;
}
//------------------------------
function estVide(inputValue, label) {
	if (inputValue === '') {
		alert(`${label} est obligatoire.`);
		return true;
	}
	return false;
}
//------------------------------
function estAlpha(inputValue, label) {
	for (let i = 0; i < inputValue.length; i++) {
		if (!isNaN(inputValue[i])) {
			alert(`${label} ne doit pas comprendre de nombres.`);
			return false;
		}
	}
	return true;
}
//------------------------------
function fakeMail(inputValue, label) {
	if (inputValue.indexOf('@') == -1) {
		alert(`${label} n'est pas valide`);
		return true;
	}
	return false;
}
