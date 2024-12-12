const images = document.querySelector('.carrossel-imagens');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let index = 0;


function moveNext() {
    index = (index + 1) % images.children.length;
    images.style.transform = `translateX(-${index * 100}%)`;
}


function movePrev() {
    index = (index - 1 + images.children.length) % images.children.length;
    images.style.transform = `translateX(-${index * 100}%)`;
}


nextButton.addEventListener('click', moveNext);
prevButton.addEventListener('click', movePrev);


window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveNext();
    }
    if (event.key === 'ArrowLeft') {
    }
});