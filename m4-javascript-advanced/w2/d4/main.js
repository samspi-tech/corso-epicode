const STRIVESCHOOL_BOOKS_API = 'https://striveschool-api.herokuapp.com/books';

let cartList = [];

const alert = document.querySelector('.alert');
const spinner = document.querySelector('.spinner');
const cartBadge = document.querySelector('.badge');
const cartModal = document.querySelector('.cart-modal');
const searchButton = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const cartButton = document.querySelector('.show-cart-modal');
const booksSection = document.querySelector('.books-container');
const emptyCartButton = document.querySelector('.empty-cart-btn');
const closeCartModal = document.querySelector('.close-cart-modal');
const insideCartBooksCount = document.querySelector('.books-count');
const reloadSectionButton = document.querySelector('.reload-section');
const shoppingCartContainer = document.querySelector('.cart-books-container');

const hideElement = element => element.classList.add('hidden');
const showElement = element => element.classList.remove('hidden');

const alertMessage = message => {
    showElement(alert);
    alert.innerText = message;
};

const getUserInput = () => {
    const userInput = searchInput.value.toLowerCase();
    const isInputValid = userInput.length > 3;

    if (isInputValid) {
        hideElement(alert);
        return userInput;
    } else {
        alertMessage('Input not valid. Needs at least 4 letters.');
    }
};

const closeModal = () => cartModal.close();
const showModal = () => cartModal.showModal();
cartButton.addEventListener('click', showModal);
closeCartModal.addEventListener('click', closeModal);

// GENERATE BOOK CARD
const generateBookCard = (appender, data) => {
    const {
        title: book_title,
        img: book_image,
        price: book_price,
        asin: book_id,
    } = data;

    const bookCardContainer = document.createElement('div');
    bookCardContainer.setAttribute('class', 'col-12 col-md-6 col-lg-4');

    const bookCard = document.createElement('div');
    bookCard.setAttribute('class', 'card');

    const bookImage = document.createElement('img');
    bookImage.setAttribute('class', 'card-img');
    bookImage.alt = 'Book cover';
    bookImage.src = book_image;

    const bookCardBody = document.createElement('div');
    bookCardBody.setAttribute('class', 'card-body');

    const bookTitle = document.createElement('h5');
    bookTitle.setAttribute('class', 'card-title ellipsis');
    bookTitle.innerText = book_title;

    const bookPrice = document.createElement('p');
    bookPrice.setAttribute('class', 'card-text');
    bookPrice.innerText = `€${book_price}`;

    const addToCartBtn = document.createElement('button');
    addToCartBtn.setAttribute('class', 'btn btn-warning cart-btn');
    addToCartBtn.innerHTML = `<ion-icon data-asin="${book_id}" name="cart-outline"></ion-icon>`;

    bookCardBody.append(bookTitle, bookPrice, addToCartBtn);
    bookCard.append(bookImage, bookCardBody);
    bookCardContainer.appendChild(bookCard);

    appender.appendChild(bookCardContainer);
};

// GET BOOKS
const getBooks = async () => {
    showElement(spinner);
    try {
        const response = await fetch(STRIVESCHOOL_BOOKS_API);
        return response.json();
    } catch (error) {
        alertMessage('Failed to fetch data.');
    } finally {
        hideElement(spinner);
    }
};

// ADD BOOK TO CART
const isPossibleToAddBook = data => {
    shoppingCartContainer.innerHTML = '';
    const isBookInsideCart = cartList.includes(data);

    if (!isBookInsideCart) {
        cartList.push(data);
        cartList.forEach(book => {
            generateBookCard(shoppingCartContainer, book);
        });
    }
};

const addBookToCart = data => {
    document.addEventListener('click', e => {
        const isBookButton = e.target.matches('ion-icon');

        if (isBookButton) {
            const cartButton = e.target;
            const bookCard = cartButton.closest('.card');
            const isAsinMatched =
                data.asin === cartButton.getAttribute('data-asin');

            if (isAsinMatched) {
                isPossibleToAddBook(data);
                cartBadge.innerText = cartList.length;
                bookCard.classList.add('cart-book-border');
                insideCartBooksCount.innerText = cartList.length;
            }
        }
    });
};

// REMOVE BOOKS FROM CART
document.addEventListener('click', e => {
    const isRemoveButton = e.target.matches('div.card');

    if (isRemoveButton) {
        const removeButton = e.target;
        const cartBook = removeButton.closest('.card');

        if (cartBook) {
            cartList.pop();
            cartBook.remove();
            cartBadge.innerText = cartList.length;
            insideCartBooksCount.innerText = cartList.length;
        }
    }
});

emptyCartButton.addEventListener('click', () => {
    cartList = [];
    cartBadge.innerText = 0;
    shoppingCartContainer.innerHTML = '';
    insideCartBooksCount.innerText = 0;
});

// INITIAL PAGE
const showInitialBooks = () => {
    hideElement(alert);
    searchInput.value = '';
    booksSection.innerHTML = '';
    hideElement(reloadSectionButton);

    getBooks()
        .then(results =>
            results.forEach(result => {
                generateBookCard(booksSection, result);
                addBookToCart(result);
            })
        )
        .catch(error => alertMessage('Failed to fetch data.'));
};

showInitialBooks();

reloadSectionButton.addEventListener('click', showInitialBooks);

// SEARCH BOOKS BY TITLE
const searchBooksByTitle = () => {
    getBooks()
        .then(results =>
            results.filter(result =>
                result.title.toLowerCase().includes(getUserInput())
            )
        )
        .then(books => {
            const isBookFound = books.length > 0;
            const isInputWrong = searchInput.value.length < 4;

            switch (true) {
                case isBookFound:
                    booksSection.innerHTML = '';
                    showElement(reloadSectionButton);
                    return books.forEach(book =>
                        generateBookCard(booksSection, book)
                    );
                case isInputWrong:
                    return alertMessage(
                        `Input missing or not valid.\nNeeds at least 4 letters.`
                    );
                default:
                    alertMessage('0 books found.');
            }
        })
        .catch(error => alertMessage('Failed to fetch data.'));
};

searchButton.addEventListener('click', searchBooksByTitle);
document.addEventListener(
    'keydown',
    e => e.key === 'Enter' && searchBooksByTitle()
);
