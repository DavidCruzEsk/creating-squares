const button = document.querySelector('.container__button');
const boxes = document.querySelectorAll('.container__box');
const container = document.querySelector('.container');

boxes.forEach(box => {
    button.addEventListener('click', function() {
        box.style.display = 'block';
    });
});