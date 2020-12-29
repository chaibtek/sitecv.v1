"use strict";

let divApp = new DivApp(out);

divApp.load()
    .then(() => divApp.display())
    //.catch(() => console.error('Erreur dans le traitement des données'))