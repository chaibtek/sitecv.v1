class DivApp {
    constructor(domElement) {
        this.domElement = domElement;
        this.datas = [];
        this.div = document.createElement('div');
    }
    
    load() {
        const URL = `https://adok.org/form/nasdaq/nasdaq.php`;
        return fetch(URL)
        .then(response => response.ok ? response.json() : Promise.reject('Problème de chargement'))
        .then(datas => this.datas = datas)
    }
    
    display() {
        this.div.classList.add('display');
        this.datas.forEach(data => {
            let divData = document.createElement('div');
            let pDate = document.createElement('p');
            pDate.textContent = data.corporate;
            divData.appendChild(pDate);
            let pCode = document.createElement('p');
            pCode.textContent = data.code;
            divData.appendChild(pCode);
            let pValue = document.createElement('p');
            pValue.textContent = `${data.value}€`;
            divData.appendChild(pValue);
            this.div.appendChild(divData);
        })
        this.domElement.appendChild(this.div);
    }
}
