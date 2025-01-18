/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype sono:
NUMBER (qualsiasi valore numerico: 0, 1.5, 8, 10, 12.3); 
STRING (qualsiasi parola o numero scritto all'interno di due singoli o doppi apici); 
BOOLEAN (valore di tipo vero o falso); 
NULL (ha un valore, ma è vuoto); 
UNDEFINED (la variabile e il suo nome sono stati scritti ma non il suo valore). 
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto è una variabile che può contenere più valori, anche di diverso tipo, all'interno di due parentesi graffe.
I valori devono essere preceduti da una parola chiave.
Ogni parola chiave, con il suo valore, deve essere separata da una virgola. */

let myProfile = {
  firstName: "Andrea",
  lastName: "Facco",
  hobbies: ["Photography", "Playing guitar", "Cooking", "Hiking"],
};

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let sum = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Andrea";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sub = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

const name1 = "john";
const name2 = "John";

console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
