const STRIVESCHOOL_BOOKS_API = 'https://striveschool-api.herokuapp.com/books';
const params = new URLSearchParams(location.search);
const id = params.get('id');

const bookContainer = document.getElementById('bookContainer');

const getBookDetails = async () => {
    try {
        const response = await fetch(`${STRIVESCHOOL_BOOKS_API}/${id}`);
        return await response.json();
    } catch (error) {
        throw new Error('Failed to fetch data!');
    }
};

const book = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, odit? Ullam, unde officiis nam aperiam pariatur cupiditate dicta eveniet quas ea quibusdam mollitia repudiandae distinctio eaque aliquam animi omnis labore. Voluptates dicta, hic nemo blanditiis saepe repudiandae cum perferendis nobis sapiente. Dignissimos iusto velit repudiandae ea maiores quasi nisi sit, adipisci id aliquam deserunt atque molestias inventore. Molestiae, accusamus iusto? Optio omnis delectus facilis nostrum fugit sed dolore minus vel pariatur et! Vero earum deleniti sit non officia saepe eum, accusantium nam ullam totam quo molestiae dolore cupiditate cum pariatur? Enim ratione officiis unde expedita velit quae libero, quo cupiditate minus tempore aut architecto obcaecati numquam facere perferendis fuga illum hic et odio doloremque officia. Deserunt ipsum adipisci molestiae doloribus? Provident suscipit dolores debitis aut libero, quos placeat incidunt quis officia quod est pariatur illum soluta expedita veniam ut maxime aspernatur quisquam necessitatibus numquam tenetur voluptatum fugit repellat autem! Quidem.',
};

const generateBookDetails = data => {
    const { category, img, price, title } = data;

    const colImage = document.createElement('div');
    colImage.setAttribute('class', 'col-md-4 d-flex align-items-center');

    const bookCover = document.createElement('img');
    bookCover.setAttribute('class', 'img-fluid rounded');
    bookCover.alt = title;
    bookCover.src = img;

    colImage.appendChild(bookCover);

    const colDescription = document.createElement('div');
    colDescription.setAttribute('class', 'col-md-8');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body d-flex flex-column h-100');

    const bookTitle = document.createElement('h1');
    bookTitle.setAttribute('class', 'book-title mb-lg-4');
    bookTitle.innerText = title;

    const bookDetails = document.createElement('div');
    bookDetails.setAttribute('class', 'd-flex align-items-center gap-4');

    const bookPrice = document.createElement('h4');
    bookPrice.setAttribute('class', 'book-price');
    bookPrice.innerText = `${price} €`;

    const bookCategory = document.createElement('h3');
    bookCategory.setAttribute('class', 'book-category');
    bookCategory.innerText = `Category: ${category.toUpperCase()}`;

    bookDetails.append(bookCategory, bookPrice);

    const bookDescription = document.createElement('p');
    bookDescription.setAttribute('class', 'book-text ellipsis mt-auto');
    bookDescription.innerText = book.text;

    const goBackButton = document.createElement('a');
    goBackButton.setAttribute('class', 'btn btn-warning me-3 mt-auto');
    goBackButton.innerHTML = 'See more books...';
    goBackButton.href = './index.html';

    cardBody.append(bookTitle, bookDetails, bookDescription, goBackButton);
    colDescription.append(cardBody);

    bookContainer.append(colImage, colDescription);
};

getBookDetails().then(result => generateBookDetails(result));
