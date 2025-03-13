// 1.
const checkForFifty = (num1, num2) => {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
};

console.log(checkForFifty(30, 20));

// 2.
const removeChar = (str, charPosition) => {
    return str.slice(0, charPosition) + str.slice(charPosition + 1);
};

console.log(removeChar('JavaScript', 9));

// 3.
const checkNumbersRange = (num1, num2) => {
    const areNumbersBetween40and60 =
        num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60;

    const areNumbersBetween70and100 =
        num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100;

    return areNumbersBetween40and60 || areNumbersBetween70and100;
};

console.log(checkNumbersRange(40, 100));

// 4.
const returnCityName = cityName => {
    return cityName.startsWith('Los') || cityName.startsWith('New')
        ? cityName
        : false;
};

console.log(returnCityName('Los Santos'));

// 5.
const calcSum = array => {
    return array.reduce((sum, num) => {
        return sum + num;
    }, 0);
};

console.log(calcSum([2, 4, 10]));

// 6.
const checkForOneAndThree = array => {
    return !array.includes(1) && !array.includes(3);
};

console.log(checkForOneAndThree([2, 4, 5]));

// 7.
const checkAngleType = degree => {
    switch (true) {
        case degree < 90:
            return 'Acuto';
        case degree > 90 && degree < 180:
            return 'Ottuso';
        case degree === 90:
            return 'Retto';
        case degree === 180:
            return 'Piatto';
    }
};

console.log(checkAngleType(180));

// 8.
const generateAcronym = str => {
    let acronym = '';
    const words = str.split(' ');

    words.forEach(word => {
        acronym += word.slice(0, 1);
    });

    return acronym;
};

console.log(generateAcronym('Fabbrica Italiana Automobili Torino'));
