/* 1. Crea una funzione che controlli due numeri interi.
Ritorna "true" se uno dei due numeri è 50 o se la somma dei due è 50. */
const checkForFifty = (num1, num2) => {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
};

console.log(checkForFifty(30, 20));

/* 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa.
Passa la stringa e la posizione come parametri e ritorna la stringa modificata. */
const removeChar = (str, charPosition) => {
    return str.slice(0, charPosition) + str.slice(charPosition + 1);
};

console.log(removeChar('JavaScript', 9));

/* 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false". */
const checkNumbersRange = (num1, num2) => {
    const areNumbersBetween40and60 =
        num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60;

    const areNumbersBetween70and100 =
        num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100;

    return areNumbersBetween40and60 || areNumbersBetween70and100;
};

console.log(checkNumbersRange(40, 100));

/* 4. Crea una funzione che accetti un nome di città come parametro
e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni "false". */
const returnCityName = cityName => {
    return cityName.startsWith('Los') || cityName.startsWith('New')
        ? cityName
        : false;
};

console.log(returnCityName('Los Santos'));

/* 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
L'array deve essere passato come parametro. */
const calcSum = array => {
    return array.reduce((sum, num) => {
        return sum + num;
    }, 0);
};

console.log(calcSum([2, 4, 10]));

/* 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3.
Se NON li contiene, ritorna "true", altrimenti ritorna "false". */
const checkForOneAndThree = array => {
    return !array.includes(1) && !array.includes(3);
};

console.log(checkForOneAndThree([2, 4, 5]));

/* 7. Crea una funzione per trovare il tipo di angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° => ritorna "acuto"
Angolo ottuso: tra i 90° e i 180° => ritorna "ottuso"
Angolo retto: 90° => ritorna "retto"
Angolo piatto: 180° => ritorna "piatto" */
const checkAngleType = degree => {
    switch (true) {
        case degree < 90:
            return 'Acute';
        case degree === 90:
            return 'Right';
        case degree > 90 && degree < 180:
            return 'Obtuse';
        case degree === 180:
            return 'Straight';
        case degree > 180 && degree < 360:
            return 'Reflex';
        case degree === 360:
            return 'Full';
    }
};

console.log(checkAngleType(300));

/* 8. Crea una funzione che crei un acronimo a partire da una frase. */
const generateAcronym = str => {
    let acronym = '';
    const words = str.split(' ');

    words.forEach(word => {
        acronym += word.slice(0, 1);
    });

    return acronym;
};

console.log(generateAcronym('Depression Originating Out-of Mondays'));
