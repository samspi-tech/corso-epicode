const STRIVESCHOOL_BOOKS_API = 'https://striveschool-api.herokuapp.com/books';

const spinner = document.querySelector('.spinner');
const cartBadge = document.querySelector('.icon-badge');
const alertContainer = document.querySelector('.alert');
const cartModal = document.querySelector('.cart-modal');
const cartMessage = document.getElementById('cartMessage');
const searchButton = document.querySelector('.search-btn');
const closeCartModal = document.getElementById('closeCart');
const searchInput = document.querySelector('.search-input');
const emptyCartButton = document.getElementById('emptyCart');
const cartButton = document.querySelector('.show-cart-modal');
const booksSection = document.getElementById('booksContainer');
const cartContainer = document.querySelector('.cart-books-container');
const reloadSectionButton = document.querySelector('.reload-section');

const hideElement = element => element.classList.add('d-none');
const showElement = element => element.classList.remove('d-none');

const cartItems = JSON.parse(localStorage.getItem('cart')) ?? [];
cartBadge.innerHTML = cartItems.length;

const alertMessage = message => {
    showElement(alertContainer);
    alertContainer.innerText = message;
};

// DISPLAY CART LIST INSIDE MODAL
const checkCartContent = items => {
    const isCartEmpty = items.length === 0;
    if (isCartEmpty) {
        emptyCartButton.setAttribute('disabled', '');
        cartMessage.innerHTML = 'Your cart is empty.';
    } else {
        const isPlural = items.length > 1 ? 'books' : 'book';
        cartMessage.innerHTML = `You have ${items.length} ${isPlural} in your cart:`;

        cartContainer.innerHTML = '';
        emptyCartButton.removeAttribute('disabled');

        items.forEach(item => {
            const book = generateCartList(item);
            cartContainer.appendChild(book);
        });
    }
};

const showModal = () => {
    cartModal.showModal();

    const cartItems = JSON.parse(localStorage.getItem('cart')) ?? [];
    checkCartContent(cartItems);
};

const closeModal = () => cartModal.close();

cartButton.addEventListener('click', showModal);
closeCartModal.addEventListener('click', closeModal);

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

const getUserInput = () => {
    const userInput = searchInput.value.trim().toLowerCase();
    const isInputValid = userInput.length > 3;

    if (isInputValid) {
        hideElement(alertContainer);
        return userInput;
    } else {
        alertMessage('Input not valid. Needs at least 4 letters.');
    }
};

// GENERATE BOOK CARD
const generateButton = (style, icon) => {
    const button = document.createElement('button');
    button.setAttribute('class', `btn ${style}`);
    button.innerHTML = `<i class="bi ${icon}"></i>`;

    return button;
};

const addBorderToCard = (data, card) => {
    const cart = JSON.parse(localStorage.getItem('cart')) ?? [];

    cart.forEach(book => {
        if (book.title === data.title) {
            card.classList.add('book-border');
        }
    });
};

const addBookToLocalStorage = data => {
    cartBadge.innerHTML++;

    const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
    const newProduct = [...cart, data];
    localStorage.setItem('cart', JSON.stringify(newProduct));
};

const generateBookCard = data => {
    const { title: bookTitle, img: bookImage, price: bookPrice, asin } = data;

    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'col-12 col-md-6 col-lg-4');

    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('data-asin', asin);

    const cardImage = document.createElement('img');
    cardImage.setAttribute('class', 'card-img');
    cardImage.src = bookImage;
    cardImage.alt = bookTitle;

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title ellipsis');
    cardTitle.innerText = bookTitle;

    const cardPrice = document.createElement('p');
    cardPrice.setAttribute('class', 'card-text');
    cardPrice.innerText = `€${bookPrice}`;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.setAttribute('class', 'd-flex gap-3');

    const cardButtonAdd = generateButton('btn-warning', 'bi-cart');
    cardButtonAdd.addEventListener('click', () => {
        addBookToLocalStorage(data);
        addBorderToCard(data, card);
    });

    const cardButtonSkip = generateButton('btn-info', 'bi-hand-thumbs-down');
    cardButtonSkip.addEventListener('click', () => {
        cardContainer.remove();
        showElement(reloadSectionButton);
    });

    const cardButtonDetails = document.createElement('a');
    cardButtonDetails.setAttribute('class', 'btn btn-light');
    cardButtonDetails.innerHTML = '<i class="bi bi-eye details-icon"></i>';
    cardButtonDetails.href = `./details.html?id=${asin}`;

    buttonsContainer.append(cardButtonAdd, cardButtonSkip, cardButtonDetails);

    cardBody.append(cardTitle, cardPrice, buttonsContainer);
    card.append(cardImage, cardBody);
    cardContainer.appendChild(card);

    booksSection.appendChild(cardContainer);
};

// GENERATE CART LIST
const removeItemFromCart = (cart, bookTitle) => {
    cartBadge.innerHTML--;

    const filteredItems = cart.filter(book => book.title !== bookTitle);
    localStorage.setItem('cart', JSON.stringify(filteredItems));
    checkCartContent(filteredItems);
};

const selectAllCards = () => document.querySelectorAll('.card');

const removeBookBorder = button => {
    const cards = selectAllCards();

    cards.forEach(card => {
        const cardAsin = card.getAttribute('data-asin');
        const cartBookAsin = button.getAttribute('data-cart-asin');

        if (cardAsin === cartBookAsin) {
            card.classList.remove('book-border');
        }
    });
};

const removeAllBookBorders = () => {
    const cards = selectAllCards();
    cards.forEach(card => card.classList.remove('book-border'));
};

const cartButtonRemoveItem = data => {
    const button = document.createElement('button');
    button.setAttribute('class', 'btn btn-danger');
    button.setAttribute('data-cart-asin', data.asin);
    button.innerHTML = '<i class="bi bi-trash3"></i>';

    button.addEventListener('click', () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) ?? [];
        removeItemFromCart(cartItems, data.title);
        button.closest('.cart-book').remove();
        removeBookBorder(button);
    });

    return button;
};

const generateCartList = data => {
    const bookContainer = document.createElement('div');
    bookContainer.setAttribute('class', 'cart-book border');

    const image = document.createElement('img');
    image.setAttribute('class', 'cart-book-img');
    image.alt = data.title;
    image.src = data.img;

    const descriptionContainer = document.createElement('div');
    descriptionContainer.setAttribute('class', 'cart-book-description');

    const title = document.createElement('h4');
    title.setAttribute('class', 'book-title ellipsis mb-0');
    title.innerText = data.title;

    const price = document.createElement('p');
    price.setAttribute('class', 'book-price mb-0');
    price.innerText = `${data.price} €`;

    const button = cartButtonRemoveItem(data);

    descriptionContainer.append(title, price, button);
    bookContainer.append(image, descriptionContainer);

    return bookContainer;
};

const emptyCart = () => {
    removeAllBookBorders();
    cartBadge.innerHTML = 0;
    cartContainer.innerHTML = '';
    localStorage.removeItem('cart');
    cartMessage.innerHTML = 'Your cart is empty.';
    emptyCartButton.setAttribute('disabled', '');
};

emptyCartButton.addEventListener('click', emptyCart);

// INITIAL PAGE
const initialPage = () => {
    searchInput.value = '';
    booksSection.innerHTML = '';
    hideElement(alertContainer);
    hideElement(reloadSectionButton);

    getBooks()
        .then(results => results.forEach(result => generateBookCard(result)))
        .catch(error => alertMessage('Failed to fetch data.'));
};

initialPage();

reloadSectionButton.addEventListener('click', initialPage);

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
                    return books.forEach(book => generateBookCard(book));
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
