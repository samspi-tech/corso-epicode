// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

// 7.
const title = document.getElementById('title');
const textareaChangeTitle = document.getElementById('change-title');
const btnChangeTitle = document.querySelector('.btn-change-title');

function changeTitleText() {
    const newTitle = textareaChangeTitle.value;
    newTitle === ''
        ? (title.innerText = title.innerText)
        : (title.innerText = newTitle);
}

btnChangeTitle.addEventListener('click', changeTitleText);

// 8.
const body = document.querySelector('body');
const btnChangeBodyTheme = document.querySelector('.btn-change-body-theme');

function darkMode() {
    body.style.background = '#00032c';
    body.style.color = '#c78100';
    btnChangeBodyTheme.innerText = 'Light Mode';
    btnChangeBodyTheme.style.background = '#fff';
    btnChangeBodyTheme.style.color = '#000';
}

function lightMode() {
    body.style.background = '#e8e8e8';
    body.style.color = '#000';
    btnChangeBodyTheme.innerText = 'Dark Mode';
    btnChangeBodyTheme.style.background = '#000';
    btnChangeBodyTheme.style.color = '#fff';
}

function changeBodyTheme() {
    btnChangeBodyTheme.innerText === 'Light Mode' ? lightMode() : darkMode();
}

btnChangeBodyTheme.addEventListener('click', changeBodyTheme);

// 9.
const shopAddress = document.querySelector('.shop-address');
const textareaChangeAddress = document.getElementById('change-address');
const btnChangeAddress = document.querySelector('.btn-change-shop-address');

function changeAddressText() {
    const newAddress = textareaChangeAddress.value;
    newAddress === ''
        ? (shopAddress.innerText = shopAddress.innerText)
        : (shopAddress.innerText = newAddress);
}

btnChangeAddress.addEventListener('click', changeAddressText);

// 10.
const getEachElementAnchor = document.querySelectorAll('a');
const btnAddNewClass = document.querySelector('.btn-add-new-class');

function addNewClassToAnchor() {
    // for (const anchor of getEachElementAnchor) {
    //     anchor.setAttribute('class', 'amazon-link');
    // }

    getEachElementAnchor.forEach((anchor) =>
        anchor.classList.add('amazon-link')
    );
}

btnAddNewClass.addEventListener('click', addNewClassToAnchor);

// 11.
const getEachElementImg = document.querySelectorAll('img');
const btnHideShowImgs = document.querySelector('.btn-hide-show-imgs');

function hideShowImgs() {
    getEachElementImg.forEach((img) => img.classList.toggle('hidden'));
}

btnHideShowImgs.addEventListener('click', hideShowImgs);

// 12.
const productPrices = document.querySelectorAll('.product-price');
const btnChangePriceColor = document.querySelector('.btn-change-price-color');
const colors = ['blue', 'black', 'red', 'yellow', 'green'];

let i = 0;

function changePriceColor() {
    let color = colors[i++];
    if (i === colors.length) {
        i = 0;
    }

    productPrices.forEach((price) => {
        price.style.color = color;
    });
}

btnChangePriceColor.addEventListener('click', changePriceColor);
