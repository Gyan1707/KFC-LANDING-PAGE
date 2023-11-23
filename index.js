const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let i = 0;

function ActiveSlide(n) {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

next.addEventListener('click', function () {
    if (i === slides.length - 1) {
        i = 0;
        ActiveSlide(i);
    } else {
        i++;
    }
    ActiveSlide(i);
});


// function for next btn
prev.addEventListener('click', function () {
    if (i == 0) {
        i = slides.length - 1;
    } else {
        i--;
    }
    ActiveSlide(i);
});
