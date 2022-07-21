//самый простой вариант, но не адаптивный и довольно хрупкий из-за жестко заданных размеров

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const buttonNext = document.querySelector('.slider-next');
const buttonPrev = document.querySelector('.slider-prev');

const dotTo1Img = document.querySelector('.dot1');
const dotTo2Img = document.querySelector('.dot2');
const dotTo3Img = document.querySelector('.dot3');
const dotTo4Img = document.querySelector('.dot4');

buttonNext.addEventListener('click', () => {
    offset = offset + 500;

    if (offset > 1500) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    return changedotButtons(offset);
});

buttonPrev.addEventListener('click', () => {
    offset = offset - 500;
    if (offset < 0) {
        offset = 1500;
    }
    sliderLine.style.left = -offset + 'px';
    return changedotButtons(offset);
});


function changedotButtons(offset){
    if(offset === 0){
        dotTo1Img.classList.add('selected')

        dotTo2Img.classList.remove('selected')
        dotTo3Img.classList.remove('selected')
        dotTo4Img.classList.remove('selected')
    }
    if(offset === 500){
        dotTo2Img.classList.add('selected')

        dotTo1Img.classList.remove('selected')
        dotTo3Img.classList.remove('selected')
        dotTo4Img.classList.remove('selected')
    }
    if(offset === 1000){
        dotTo3Img.classList.add('selected')

        dotTo1Img.classList.remove('selected')
        dotTo2Img.classList.remove('selected')
        dotTo4Img.classList.remove('selected')
    }
    if(offset === 1500){
        dotTo4Img.classList.add('selected')

        dotTo1Img.classList.remove('selected')
        dotTo2Img.classList.remove('selected')
        dotTo3Img.classList.remove('selected')
    }
}

dotTo1Img.addEventListener('click', () => {
    offset = 0;
    sliderLine.style.left = 0 + 'px';
    return changedotButtons(offset);
});
dotTo2Img.addEventListener('click', () => {
    offset = 500;
    sliderLine.style.left = -500 + 'px';
    return changedotButtons(offset);
});
dotTo3Img.addEventListener('click', () => {
    offset = 1000;
    sliderLine.style.left = -1000 + 'px';
    return changedotButtons(offset);
});
dotTo4Img.addEventListener('click', () => {
    offset = 1500;
    sliderLine.style.left = -1500 + 'px';
    return changedotButtons(offset);
});