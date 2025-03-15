/* 1.  Partendo da una stringa (passata come parametro),
ritorna il carattere più usato nella stringa stessa. */
const mostFrequentChar = str => {
    let maxChar = '';
    let charsFrequency = {};
    const characters = str
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' ']/g, '')
        .split('');

    characters.forEach(char => {
        charsFrequency[char]
            ? charsFrequency[char]++
            : (charsFrequency[char] = 1);

        if (maxChar === '' || charsFrequency[char] > charsFrequency[maxChar]) {
            maxChar = char;
        }
    });

    return maxChar;
};

console.log(mostFrequentChar('Hello World'));

/* 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra.
Ignora punteggiatura e spazi e ricordati di rendere la stringa tutta in minuscolo.
Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`. */
const sortCharacters = str => {
    return str
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' ']/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
};

const checkForAnagram = (str1, str2) => {
    return sortCharacters(str1) === sortCharacters(str2);
};

console.log(checkForAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort'));

/* 3.  Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri),
ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data. */
const findAnagrams = (array, str) => {
    const anagrams = [];

    array.forEach(anagram => {
        sortCharacters(anagram) === sortCharacters(str) &&
            anagrams.push(anagram);
    });

    return anagrams.length > 0
        ? anagrams
        : `Sorry, ${str} is not an anagram of this words: ${array.join(', ')}.`;
};

console.log(
    findAnagrams(
        ['Santa; shy, less cruel', 'Satan: cruel, less shy', 'The Morse Code'],
        'She Sells Sanctuary'
    )
);

/* 4. Partendo da una stringa passata come parametro,
ritorna `true` se la stringa è palindroma o `false` se non lo è. */
const reverseStr = str => {
    return str.split('').reverse().join('');
};

const checkForPalidrome = str => {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' ']/g, '').toLowerCase();

    return str == reverseStr(str);
};

console.log(checkForPalidrome('saippuakivikauppias'));

/* 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre,
ma in ordine contrario. Es. 189 ⇒ 981 */
const reverseNumber = num => {
    return Number(String(num).split('').reverse().join(''));
};

console.log(reverseNumber(73));

/* 6. Scrivi una funzione che accetti un numero positivo X come parametro. 
La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini. */
const printSteps = num => {
    let steps = [];

    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            steps.push('#'.repeat(i));
        }
    }

    return steps.join('\n');
};

console.log(printSteps(3));

/* 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. 
Es. “Ciao” ****⇒ “oaiC” */
console.log(reverseStr('?waS I taC a ti saW'));

/* 8. Crea una funzione che accetti un array e un numero Y come parametro. 
Dividi l’array in sotto-array aventi lunghezza Y. 
Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]] 
    array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]] */
const divideArray = (array, num) => {
    const finalArray = [];
    const originalArray = array.slice();

    originalArray.forEach(item => {
        array.length > 0 && finalArray.push(array.splice(0, num));
    });

    return finalArray;
};

console.log(divideArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

/* 9. Scrivi una funzione che accetti un numero positivo X come parametro. 
La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati. */
const printPyramid = num => {
    let blocks = [];

    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            blocks.push(' '.repeat(num - i) + '#'.repeat(2 * i - 1));
        }
    }

    return blocks.join('\n');
};

console.log(printPyramid(3));

/* 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN: */
const spiralMatrix = num => {
    const results = [];

    for (let i = 0; i < num; i++) {
        results.push([]);
    }

    let counter = 1;
    let startRow = 0;
    let startColumn = 0;
    let endRow = num - 1;
    let endColumn = num - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right Column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Start Column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return results;
};

console.log(spiralMatrix(4));
