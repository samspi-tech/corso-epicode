/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

const crazySum = (num1, num2) =>
    num1 === num2 ? (num1 + num2) * 3 : num1 + num2;

console.log(crazySum(6, 6));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

const boundary = (num) =>
    (num >= 20 && num <= 100) || num === 400 ? true : false;

console.log(boundary(400));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

const reverseString = (str) => str.split('').reverse().join('');

let string = '';

function reverseString2(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }

    return string;
}

console.log(reverseString('Hello World!'));
console.log(reverseString2('Hello World!'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

let capitalStr = '';

function upperFirst(str) {
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        capitalStr +=
            arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length) + ' ';
    }

    return capitalStr;
}

console.log(upperFirst('hello world!'));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

const dice = Math.floor(Math.random() * 11);

function giveMeRandom(n) {
    return String(n).split();
}

console.log(giveMeRandom(dice));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const rectangle = [10, 5];

const area = (l1, l2) => l1 * l2;

console.log(area(...rectangle));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num) {
    const diff = num > 19 ? num - 19 : 19 - num;

    return diff > 19 ? diff * 3 : diff;
}

console.log(crazyDiff(100));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

const codify = (str) => (str.startsWith('code') ? str : `code ${str}`);

console.log(codify('Hello World'));
console.log(codify('code Hello World'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num) {
    if (num >= 0 && num === Math.floor(num)) {
        return console.log(num % 3 === 0 || num % 7 === 0 ? true : false);
    } else {
        return console.log('Not a positive integer!');
    }
}

check3and7(12);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

const cutString = (str) => str.slice(1, -1);

console.log(cutString('xHello Worldx'));
