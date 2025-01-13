'use strict';
// Carrello e sconti particolari
/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: 'Marco',
    lastName: 'Rossi',
    isAmbassador: true,
};

const paul = {
    name: 'Paul',
    lastName: 'Flynn',
    isAmbassador: false,
};

const amy = {
    name: 'Amy',
    lastName: 'Reed',
    isAmbassador: false,
};

const prices = [50, 24, 3];
const shippingCost = 50;

// START
const users = [];
users.push(marco, paul, amy);

const ambassadors = [];

for (const user of users) {
    // Total checkout from prices
    let checkout = 0;
    for (const price of prices) {
        checkout += price;
    }

    // Fn: check if user gets discount or not
    const checkoutFn = () =>
        user.isAmbassador ? (checkout -= (checkout * 30) / 100) : checkout;

    // Checkout
    if (checkoutFn() >= 100) {
        console.log(
            `${user.name} your total is ${checkout}€ with FREE Shipping!`
        );
    } else {
        console.log(
            `${
                user.name
            } your checkout is ${checkout}€ + ${shippingCost}€: total ${
                checkout + shippingCost
            }€. Spend another ${
                100 - Math.trunc(checkout)
            }€ to get FREE Shipping!`
        );
    }

    // Check if user is an ambassador or not
    console.log(
        `User ${user.name} ${user.lastName} is ${
            user.isAmbassador ? 'an ambassador' : 'not an ambassador'
        }.`
    );

    // Push user in new array only if ambassador is true
    user.isAmbassador && ambassadors.push(`${user.name} ${user.lastName}`);
}

// EXTRA
let firstName = document.getElementById('userName');
let lastName = document.getElementById('userLastName');
let checkout = document.getElementById('userCheckout');

let outcome = document.getElementById('outcome');
let userProfile = document.getElementById('user-profile');
let recentUser = document.getElementById('recent-user');

const showOutcome = function (str) {
    outcome.classList.remove('hidden');
    outcome.innerText = str;
};
const showUserProfile = function (str) {
    userProfile.classList.remove('hidden');
    userProfile.innerText = str;
};
const showRecentUser = function (str) {
    recentUser.classList.remove('hidden');
    recentUser.innerText = str;
};

let recentUserArr = [];

// Button verify
const verify = function () {
    let userName = firstName.value;
    let userLastName = lastName.value;
    let userCheckout = Number(checkout.value);
    firstName.value = '';
    lastName.value = '';
    checkout.value = '';

    // Fn: check if user is ambassador
    const isAmbassador = () =>
        ambassadors.includes(`${userName} ${userLastName}`);

    // Fn: check if user gets discount or not
    const userCheckoutFn = () =>
        isAmbassador()
            ? (userCheckout -= Math.trunc(userCheckout * 0.3))
            : userCheckout;

    // Fn: check for valid input
    const isInputFilled = () => userName && userLastName && userCheckout;

    // Total Checkout
    if (userCheckoutFn() >= 100) {
        showOutcome(
            `${userName} your total is ${userCheckout}€ with FREE Shipping!`
        );
    } else {
        showOutcome(
            `${userName} your checkout is ${userCheckout}€ + ${shippingCost}€: total ${
                userCheckout + shippingCost
            }€. Spend another ${100 - userCheckout}€ to get FREE Shipping!`
        );
    }

    // Hide message on the right and give error message when missing or invalid input
    if (!userName || !userLastName || !userCheckout) {
        userProfile.classList.add('hidden');
        showOutcome('Invalid or missing input!');
    }

    // Check inputs and show message on the right with user name and role
    if (isAmbassador() && isInputFilled()) {
        showUserProfile(
            `Welcome back\nambassador\n${userName.toUpperCase()} ${userLastName.toUpperCase()},\nenjoy your 30% discount.`
        );
    } else if (!isAmbassador() && isInputFilled()) {
        showUserProfile(
            `Welcome ${userName.toUpperCase()} ${userLastName.toUpperCase()},\nyou have no role.`
        );
    }

    // Show list of recent users on the left
    if (isInputFilled()) {
        recentUserArr.push(
            `${userName} ${userLastName}: ${
                userCheckout >= 100 ? userCheckout : userCheckout + shippingCost
            }€`
        );
        showRecentUser(`RECENT USERS:\n${recentUserArr.join('\n')}`);
    }
};

// Verify pressing Enter Key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        verify();
    }
});
