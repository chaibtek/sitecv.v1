"use strict";


let meteo = new Meteo();
let select = meteo.buildSelect(); // voir le return dans meteo buildselect
select.addEventListener('change', evt => {
    meteo.removeTable(); // supprime le tableau html
   if (select.value === '0') // 0 en chaine de caractere tres important mettre les cotes
     return;
       meteo.load(select.value)
       .then(() => meteo.buildTable())
       .catch(() => error.log("Probleme serveur"));

    });

