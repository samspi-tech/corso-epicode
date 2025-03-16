'use strict';

const spinner = document.querySelector('.spinner');
const searchResults = document.getElementById('searchResults');
const modalPlaylistContainer = document.querySelector('.modal-body');

const queenContainer = document.getElementById('queenSection');
const metallicaContainer = document.getElementById('metallicaSection');
const rubyRushtonContainer = document.getElementById('rubyRushtonSection');

const MUSIC_ADDRESS =
    'https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica';

const addSpinner = () => {
    spinner.classList.add('d-flex');
    spinner.classList.remove('d-none');
    searchResults.removeAttribute('style');
};

const removeSpinner = () => {
    spinner.classList.add('d-none');
    spinner.classList.remove('d-flex');
    searchResults.setAttribute('style', 'display: none');
};

const getMusic = async artist => {
    addSpinner();

    try {
        const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
        );
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error('Something went wrong... 😓');
    } finally {
        removeSpinner();
    }
};

const showSection = section => {
    document.getElementById(section).classList.remove('d-none');
};

const songDuration = time => {
    const minutes = Math.trunc(time / 60);
    const seconds = String(Math.trunc(time % 60)).padStart(2, 0);

    return `${minutes}:${seconds}`;
};

const generateAlbumCover = element => {
    const img = document.createElement('img');
    img.src = element;

    return img;
};

const generateModalPlaylist = data => {
    const modalPlaylist = document.createElement('ul');
    modalPlaylist.setAttribute('class', 'list-group pb-5');

    const modalArtistName = document.createElement('h3');
    modalArtistName.setAttribute('class', 'font-weight-bold');
    modalArtistName.innerText = data[0].artist.name;

    modalPlaylist.appendChild(modalArtistName);

    data.forEach(element => {
        const modalItemList = document.createElement('li');
        modalItemList.setAttribute(
            'class',
            'list-group-item border rounded mb-1 p-0 pr-2 d-flex align-items-center'
        );

        const modalCover = generateAlbumCover(element.album.cover);
        modalCover.classList.add('rounded-left');
        modalCover.setAttribute('width', '125');

        const modalSongTitle = document.createElement('h5');
        modalSongTitle.setAttribute('class', 'text-success w-50 mb-0 pl-3');
        modalSongTitle.innerText = element.title_short;

        const modalSpan = document.createElement('modalSpan');
        modalSpan.setAttribute('class', 'd-inline-block text-black-50 ml-auto');
        modalSpan.innerText = songDuration(element.duration);

        modalItemList.append(modalCover, modalSongTitle, modalSpan);
        modalPlaylist.appendChild(modalItemList);
    });

    return modalPlaylistContainer.appendChild(modalPlaylist);
};

const generateAlbums = (appender, data) => {
    data.forEach(element => {
        const album = document.createElement('div');
        album.setAttribute('class', 'pb-4');

        const albumCover = generateAlbumCover(element.album.cover_big);
        albumCover.setAttribute('class', 'mb-1 rounded shadow-lg');

        const albumDescription = document.createElement('p');
        albumDescription.setAttribute('class', 'w-75');
        albumDescription.innerText = element.title_short;

        album.append(albumCover, albumDescription);
        return appender.appendChild(album);
    });
};

const appendFetchedData = (container, artist) => {
    getMusic(artist)
        .then(results => results.data)
        .then(data => {
            showSection(artist);
            generateModalPlaylist(data);
            generateAlbums(container, data);
        })
        .catch(error => {
            searchResults.removeAttribute('style');
            searchResults.innerHTML = `${error}`;
        });
};

appendFetchedData(queenContainer, 'queen');
appendFetchedData(metallicaContainer, 'metallica');
appendFetchedData(rubyRushtonContainer, 'rubyRushton');
