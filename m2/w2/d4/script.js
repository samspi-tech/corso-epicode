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

const prices = [95, 5, 2];
const shippingCost = 50;

// START
const users = [];
users.push(marco, paul, amy);

const ambassadors = [];

for (const user of users) {
    // Total Shipping Cost
    let checkout = 0;
    for (const price of prices) {
        checkout += price;
    }

    // Function: check if user gets discount or not
    const checkoutFn = () =>
        user.isAmbassador ? (checkout -= (checkout * 30) / 100) : checkout;

    // Total Checkout
    if (checkout >= 100) {
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
    } else {
        console.log(
            `${
                user.name
            } your checkout is ${checkoutFn()}€ + ${shippingCost}€ for shipping: total ${
                checkout + shippingCost
            }€. Spend another ${100 - checkout}€ to get FREE Shipping!`
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

const showOutcome = () => outcome.classList.remove('hidden');
const showUserProfile = () => userProfile.classList.remove('hidden');
const showRecentUser = () => recentUser.classList.remove('hidden');

const recentUserArr = [];

// Button verify
const verify = function () {
    let userName = firstName.value;
    let userLastName = lastName.value;
    let userCheckout = Number(checkout.value);
    firstName.value = '';
    lastName.value = '';
    checkout.value = '';

    for (const user of users) {
        // Function: check if user gets discount or not
        const userCheckoutFn = () =>
            user.isAmbassador
                ? (userCheckout -= Math.trunc(userCheckout * 0.3))
                : userCheckout;

        if (userName === user.name && userLastName === user.lastName) {
            // Total Checkout
            if (userCheckout > 100) {
                if (userCheckoutFn() > 100) {
                    showOutcome();
                    outcome.innerText = `${userName} your total is ${userCheckout}€ with FREE Shipping!`;
                } else {
                    showOutcome();
                    outcome.innerText = `${userName} your checkout is ${userCheckout}€ + ${shippingCost}€: total ${
                        userCheckout + shippingCost
                    }€. Spend another ${
                        100 - userCheckout
                    }€ to get FREE Shipping!`;
                }
            } else {
                showOutcome();
                outcome.innerText = `${userName} your checkout is ${userCheckoutFn()}€ + \n${shippingCost}€ for shipping => TOTAL: ${
                    userCheckout + shippingCost
                }€.\nSpend another ${
                    100 - userCheckout
                }€ to get FREE Shipping!`;
            }
        } else if (userCheckout > 100) {
            showOutcome();
            outcome.innerText = `${userName} your total is ${userCheckout}€ with FREE Shipping!`;
        } else {
            showOutcome();
            outcome.innerText = `${userName} your checkout is ${userCheckout}€ + \n${shippingCost}€ for shipping => TOTAL: ${
                userCheckout + shippingCost
            }€.\nSpend another ${100 - userCheckout}€ to get FREE Shipping!`;
        }
    }

    // Hide message on the right and give error message when missing or invalid input
    if (!userName || !userLastName || !userCheckout) {
        showOutcome();
        userProfile.classList.add('hidden');
        outcome.innerText = 'Invalid or missing input!';
    }

    // Show message on the right with user name and role
    if (ambassadors.includes(`${userName} ${userLastName}`) && userCheckout) {
        showUserProfile();
        userProfile.innerText = `Welcome back\nambassador\n${userName.toUpperCase()} ${userLastName.toUpperCase()},\nenjoy your 30% discount.`;
    } else if (
        !ambassadors.includes(`${userName} ${userLastName}`) &&
        userName &&
        userLastName &&
        userCheckout
    ) {
        showUserProfile();
        userProfile.innerText = `Welcome ${userName.toUpperCase()} ${userLastName.toUpperCase()},\nyou have no role.`;
    }

    // Show list of recent users on the left
    if (userName && userLastName && userCheckout) {
        showRecentUser();
        recentUserArr.push(
            `${userName} ${userLastName}: ${
                userCheckout > 100 ? userCheckout : userCheckout + shippingCost
            }€`
        );
        recentUser.innerText = `RECENT USERS:\n${recentUserArr.join('\n')}`;
    }
};

// Verify with pressing Enter Key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        verify();
    }
});
