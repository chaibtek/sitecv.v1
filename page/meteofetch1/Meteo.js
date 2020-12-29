class Meteo {
    constructor() {
        this.table = null; // on connait pas encore le tableau (tableau html )
        this.previsions = null; // method load va le remplir (tableau javascript) // Array <Object>

    }


    buildSelect() {
        let select = document.createElement('select');
        select.add(new Option('Choisissez...', 0, true, true)); // Ici 0 Est la Value Envoye au serveur
        select.add(new Option('Toulouse', 'TOULOUSE'));
        select.add(new Option('Paris', 'PARIS'));
        select.add(new Option('Lyon', 'LYON'));
        out.appendChild(select);
        return select; // penser a le retourner pour que le programme principal y ai accés
    }

    load(ville) {
        const URL = 'https://adok.org/form/meteo/meteo.php';
        let fd = new FormData();
        fd.append('ville', ville);
        let init = {
            method: 'post',
            body: fd

        }
        return fetch(URL, init)
            .then(response => { // on passe a then une fonction en lambda tjrs response
                if (!response.ok) // autre facon de faire .then(reponse => response.ok ? response.json() : Promise.reject())
                    return Promise.reject();
                return response.json();
            })
            .then(previsions => {
                this.previsions = previsions;
            });


    }
    buildTable() {
        const URL_BASE_IMG = 'https://adok.org/form/meteo/img/';
        this.table = document.createElement('table');
        let row1 = this.table.insertRow();

        // ForEach des dates.
        this.previsions.forEach((prevision, i) => {
            let date = new Date(Date.now() + 86400000 * (i + 1));
            row1.insertCell().textContent = date.toLocaleString('fr-Fr', { weekday: 'long', day: 'numeric' });
        
        });
        // ForEach des icones.
        let row2 = this.table.insertRow();
        this.previsions.forEach(prevision => {
           let img = new Image(100,100);
           img.src = `${URL_BASE_IMG}${prevision.ico}`;
           row2.insertCell().appendChild(img);
        });
        // ForEach des températures
        let row3 = this.table.insertRow();
        this.previsions.forEach(prevision => {
           row3.insertCell().textContent = `${prevision.min}°C / ${prevision.max}°C`;
        });

        out.appendChild(this.table); 
       
    }
    removeTable() {
        if(this.table)
        this.table.remove();
    }

}

