//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const nums = [125, 321, 32, 4, 102, 250];

/* con il metodo reduce()
posso fare un loop dell'array nums
per ottenere un solo risultato
alla fine del loop */
const maxNum = nums.reduce((acc, num) => {
  /* in questo caso l'accumulatore 
  diventerà il numero più grande nell'array nums
  ogni volta che la prima condizione è vera,
  e alla fine del loop verrà ritornato
  come risultato finale */
  if (acc > num) {
    return acc;
  } else {
    return num;
  }
  // numero di partenza dell'accumulatore
}, nums[0]);

/* con il metodo join() posso unire
gli elementi dell'array nums in una stringa */
console.log(`${maxNum} is the largest number between ${nums.join(", ")}.`);

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const num = 18;

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

let string = "";

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  }

  string += `${i} `;
}
console.log(string);

///// EXTRA: Tabellina del 3 \\\\\
for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  }

  console.log(i * 3);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
  i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num3 = 20;
const num4 = 12;

if (num3 === 8 || num4 === 8) {
  console.log("Number 8 is included in one of the two variables or both.");
} else if (num3 + num4 === 8) {
  console.log("Number 8 is the sum of the two variables.");
} else if (num3 - num4 === 8 || num4 - num3 === 8) {
  console.log("Number 8 is the sub of the two variables.");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 51;
const deliveryFee = 10;
const total = totalShoppingCart + deliveryFee;

const checkout = `Your payment: ${totalShoppingCart}€ + ${
  totalShoppingCart > 50
    ? "FREE delivery."
    : `${deliveryFee}€ for the delivery. (Total: ${total}€)`
}`;

console.log(checkout);

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

const discount = (totalShoppingCart * 20) / 100;

const checkoutBF = `Your payment ${totalShoppingCart}€ (with 20% discount): ${
  totalShoppingCart - discount
}€ + ${
  totalShoppingCart - discount > 50
    ? "FREE delivery."
    : `${deliveryFee}€ for the delivery. (Total: ${total - discount}€)`
}`;

console.log(checkoutBF);

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

const isMale = true;

const gender = isMale ? "male" : "female";
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
