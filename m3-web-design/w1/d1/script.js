// 1
const heroTitle = document.querySelector('.jumbotron h1');
// 2
const navChildren = document.querySelectorAll('.nav span');
// 3
const keepReading = document.querySelector('.jumbotron p:last-child a');
// 4
const firstBlogPost = document.querySelector('.blog-post');
// 5
const breakFirstBlogPost = document.querySelector('.blog-post hr');
breakFirstBlogPost.style.borderColor = 'red';
// 6
const evenNavChildren = document.querySelectorAll(
    '.nav span:nth-of-type(even)'
);
// 7
const archiveList = document.querySelectorAll(
    '.blog-sidebar div:nth-of-type(2) li'
);
// 8
const secondBlogPostAuthor = document.querySelector(
    '.blog-post:nth-of-type(2) .blog-post-meta a'
);
// 9
const thirdBlogPostSecondListItem = document.querySelector(
    '.blog-post:nth-of-type(3) li:nth-of-type(2)'
);
// 10
const backToTop = document.querySelector('.blog-footer ~ a');
// 11
const btnNew = document.querySelector('.blog-pagination a:last-child');
// 12
const footerSecondLink = document.querySelector('.blog-footer p a:last-child');

// EXTRA
// 1
const twitterLink = document.querySelector(
    '.blog-sidebar div:nth-of-type(3) li:nth-of-type(2)'
);

twitterLink.remove();

// 2
const jumbotron = document.querySelector('.jumbotron');

keepReading.addEventListener('click', () => {
    jumbotron.remove();
});

// 3
const authors = document.querySelectorAll('.blog-post .blog-post-meta a');

const alertAuthorName = authors.forEach(author => {
    author.addEventListener('mouseover', () => {
        alert(author.textContent);
    });
});
