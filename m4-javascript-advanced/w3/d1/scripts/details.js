const STRIVESCHOOL_BOOKS_API = 'https://striveschool-api.herokuapp.com/books';
const params = new URLSearchParams(location.search);
const id = params.get('id');

const spinner = document.getElementById('spinner');
const bookContainer = document.getElementById('bookContainer');
const alertContainer = document.getElementById('alertContainer');

const toggleSpinner = () => spinner.classList.toggle('d-none');

const errorMessage = () => {
    const message = document.createElement('a');
    message.setAttribute('class', 'error-message');
    message.href = './index.html';
    message.innerText = 'Something went wrong, click this text to go back.';

    return message;
};

const showAlertMessage = () => {
    const message = errorMessage();
    alertContainer.appendChild(message);
    alertContainer.classList.remove('d-none');
};

const getBook = async () => {
    toggleSpinner();
    try {
        const response = await fetch(`${STRIVESCHOOL_BOOKS_API}/${id}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    } finally {
        toggleSpinner();
    }
};

const book = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, odit? Ullam, unde officiis nam aperiam pariatur cupiditate dicta eveniet quas ea quibusdam mollitia repudiandae distinctio eaque aliquam animi omnis labore. Voluptates dicta, hic nemo blanditiis saepe repudiandae cum perferendis nobis sapiente. Dignissimos iusto velit repudiandae ea maiores quasi nisi sit, adipisci id aliquam deserunt atque molestias inventore. Molestiae, accusamus iusto? Optio omnis delectus facilis nostrum fugit sed dolore minus vel pariatur et! Vero earum deleniti sit non officia saepe eum, accusantium nam ullam totam quo molestiae dolore cupiditate cum pariatur? Enim ratione officiis unde expedita velit quae libero, quo cupiditate minus tempore aut architecto obcaecati numquam facere perferendis fuga illum hic et odio doloremque officia. Deserunt ipsum adipisci molestiae doloribus? Provident suscipit dolores debitis aut libero, quos placeat incidunt quis officia quod est pariatur illum soluta expedita veniam ut maxime aspernatur quisquam necessitatibus numquam tenetur voluptatum fugit repellat autem! Quidem.',
};

const generateBookCover = (title, img) => {
    const col = document.createElement('div');
    col.setAttribute('class', 'col-md-4 d-flex align-items-center');

    const bookCover = document.createElement('img');
    bookCover.setAttribute('class', 'img-fluid rounded');
    bookCover.alt = title;
    bookCover.src = img;

    col.appendChild(bookCover);

    return col;
};

const generateBookDetails = (category, price) => {
    const detailsContainer = document.createElement('div');
    detailsContainer.setAttribute('class', 'd-flex align-items-center gap-4');

    const bookPrice = document.createElement('h4');
    bookPrice.setAttribute('class', 'book-price');
    bookPrice.innerText = `${price} €`;

    const bookCategory = document.createElement('h3');
    bookCategory.setAttribute('class', 'book-category');
    bookCategory.innerText = `Category: ${category.toUpperCase()}`;

    detailsContainer.append(bookCategory, bookPrice);

    return detailsContainer;
};

const generateBook = data => {
    const { category, img, price, title } = data;

    const bookCover = generateBookCover(title, img);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.setAttribute('class', 'col-md-8');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body d-flex flex-column h-100');

    const bookTitle = document.createElement('h1');
    bookTitle.setAttribute('class', 'book-title mb-lg-4');
    bookTitle.innerText = title;

    const bookDetails = generateBookDetails(category, price);

    const bookShortSum = document.createElement('p');
    bookShortSum.setAttribute('class', 'book-text ellipsis mt-auto');
    bookShortSum.innerText = book.text;

    const goBackButton = document.createElement('a');
    goBackButton.setAttribute('class', 'btn btn-warning me-3 mt-auto');
    goBackButton.innerHTML = 'See more books...';
    goBackButton.href = './index.html';

    cardBody.append(bookTitle, bookDetails, bookShortSum, goBackButton);
    descriptionContainer.append(cardBody);

    bookContainer.append(bookCover, descriptionContainer);
};

getBook()
    .then(result => generateBook(result))
    .catch(err => showAlertMessage());
