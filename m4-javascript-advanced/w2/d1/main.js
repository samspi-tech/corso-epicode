const PEXEL_API_KEY =
    'T4UrJH1FFZtUDJC7mQEozTRGVWf2DZpm7CrBMoZfxq8ti7gYHaHkhVno';

let initialPage = 1;
let isSearched = false;
let pageIndexNumber = 1;

const categories = ['animals', 'ocean', 'people', 'city', 'cars'];
const randomIndex = Math.floor(Math.random() * categories.length);
const randomWord = categories[randomIndex];

const inputSearch = document.getElementById('inputSearch');
const searchButton = document.querySelector('.search-btn');
const dropdownItem = document.querySelectorAll('.dropdown-item');
const dropdownMenuButton = document.querySelector('.dropdown-toggle');
const contentContainer = document.querySelector('.content-container');

const spinner = document.querySelector('.spinner');
const alert = document.querySelector('.alert-container');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pageIndex = document.querySelector('.page-index');

// SEARCHBAR: DROPDOWN MENU BUTTON
dropdownItem.forEach(item => {
    item.addEventListener('click', () => {
        dropdownMenuButton.innerText = item.innerText;

        const searchType = item.innerText === 'Photos' ? 'photos' : 'videos';
        inputSearch.placeholder = `Search for free ${searchType}`;
    });
});

const getUserInput = () => inputSearch.value;

const showSpinner = () => spinner.classList.remove('hidden');
const removeSpinner = () => spinner.classList.add('hidden');

const showAlert = errorText => {
    alert.classList.remove('hidden');
    alert.childNodes[1].innerHTML = errorText;
};

const removeAlert = () => alert.classList.add('hidden');

// GENERATE IMAGE CARD
const generateImageCard = data => {
    const imageCardContainer = document.createElement('div');
    imageCardContainer.setAttribute('class', 'col-12 col-md-6 col-lg-3');

    const card = document.createElement('div');
    card.setAttribute('class', 'card position-relative');

    const imageLink = document.createElement('a');
    imageLink.href = data.photographer_url;
    imageLink.target = '_blank';

    const image = document.createElement('img');
    image.setAttribute('class', 'card-img');
    image.href = data.photographer_url;
    image.src = data.src.portrait;
    image.alt = data.alt;

    imageLink.appendChild(image);

    const cardDescription = document.createElement('div');
    cardDescription.setAttribute('class', 'card-description');

    const authorName = document.createElement('a');
    authorName.setAttribute('class', 'author-name mb-0');
    authorName.innerText = data.photographer;
    authorName.href = data.photographer_url;
    authorName.target = '_blank';

    cardDescription.appendChild(authorName);
    card.append(imageLink, cardDescription);

    imageCardContainer.appendChild(card);
    contentContainer.appendChild(imageCardContainer);
};

// GENERATE VIDEO CARD
const generateVideoCard = data => {
    const videoContainer = document.createElement('div');
    videoContainer.setAttribute('class', 'col-12 col-md-6 col-xxl-4 rounded');

    const video = document.createElement('video');
    video.setAttribute('class', 'card-video');
    video.setAttribute('controls', '');

    const videoSource = document.createElement('source');
    videoSource.src = data.video_files[0].link;
    videoSource.type = data.video_files[0].file_type;

    video.appendChild(videoSource);

    videoContainer.appendChild(video);
    contentContainer.appendChild(videoContainer);
};

// GET RANDOM PHOTOS
const getInitialRandomPhotos = async page => {
    showSpinner();
    try {
        const response = await fetch(
            `https://api.pexels.com/v1/search/?page=${page}&query=${randomWord}&per_page=8`,
            {
                headers: {
                    Authorization: PEXEL_API_KEY,
                },
            }
        );
        return await response.json();
    } catch (error) {
        showAlert('Failed to fetch data!');
    } finally {
        removeSpinner();
    }
};

const getRandomPhotos = () =>
    getInitialRandomPhotos(initialPage)
        .then(response => {
            response.photos.forEach(photo => generateImageCard(photo));
            isSearched = true;
        })
        .catch(error => showAlert('Failed to fetch data!'));

getRandomPhotos();

// GET IMAGES OR VIDEOS FROM USER INPUT
const getContentFromUserInput = async (searchType, initialPage, searchTerm) => {
    showSpinner();
    try {
        const response = await fetch(
            `https://api.pexels.com/${searchType}/search/?page=${initialPage}&query=${searchTerm}&per_page=8`,
            {
                headers: {
                    Authorization: PEXEL_API_KEY,
                },
            }
        );
        return await response.json();
    } catch (error) {
        showAlert('Failed to fetch data!');
    } finally {
        removeSpinner();
    }
};

const errorMessage = () => {
    const isSearchTypeSelected =
        dropdownMenuButton.innerText !== 'Type of search';

    return isSearchTypeSelected
        ? removeAlert()
        : showAlert('Type of search not selected.');
};

const getPhotos = () =>
    getContentFromUserInput('v1', initialPage, getUserInput())
        .then(response =>
            response.photos.forEach(photo => generateImageCard(photo))
        )
        .catch(error => {
            showAlert('Input missing or not valid.');
        });

const getVideos = () =>
    getContentFromUserInput('videos', initialPage, getUserInput())
        .then(response =>
            response.videos.forEach(video => generateVideoCard(video))
        )
        .catch(error => {
            showAlert('Input missing or not valid.');
        });

const resetParameters = () => {
    initialPage = 1;
    isSearched = false;
    pageIndexNumber = 1;
    pageIndex.innerText = 1;
    contentContainer.innerHTML = '';
};

const displayResults = () => {
    errorMessage();
    resetParameters();
    const isSearchTypePhotos = dropdownMenuButton.innerText === 'Photos';
    const isSearchTypeVideos = dropdownMenuButton.innerText === 'Videos';

    if (isSearchTypePhotos) {
        getPhotos();
    } else if (isSearchTypeVideos) {
        getVideos();
    }
};

// BOTTOM BUTTONS
const getUserContent = () =>
    dropdownMenuButton.innerText === 'Photos' ? getPhotos() : getVideos();

const isIinitial = () => (isSearched ? getRandomPhotos() : getUserContent());

const prevPage = () => {
    contentContainer.innerHTML = '';

    if (initialPage > 1) {
        initialPage--;
        pageIndexNumber--;
        pageIndex.innerText = pageIndexNumber;
    }

    isIinitial();
};

const nextPage = () => {
    contentContainer.innerHTML = '';

    initialPage++;
    pageIndexNumber++;
    pageIndex.innerText = pageIndexNumber;

    isIinitial();
};

prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);

searchButton.addEventListener('click', displayResults);
document.addEventListener(
    'keydown',
    e => e.key === 'Enter' && displayResults()
);
