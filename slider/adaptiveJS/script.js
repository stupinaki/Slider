const images = document.querySelectorAll('.img');
const sliderLine = document.querySelector('.slider-line');
const nextBtn = document.querySelector('.slider-next');
const prevBtn = document.querySelector('.slider-prev');
const transitions = document.querySelectorAll('.dot');

let imgIndex = 0;
let width;

init();
window.addEventListener('resize', init);

nextBtn.addEventListener('click', function () {
    imgIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    changeTransition()
    rollSlider();
});

prevBtn.addEventListener('click', function () {
    imgIndex--;
    if (imgIndex <= 0) {
        imgIndex = images.length - 1;
    }
    changeTransition();
    rollSlider();
});
transitions.forEach((transition, i) => transition.addEventListener('click', () => {
    imgIndex = i;
    changeTransition();
    rollSlider();
}))

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(img => {
        img.style.width = width + 'px';
        img.style.height = 'auto';
    });
    rollSlider();
}
function rollSlider() {
    sliderLine.style.transform = 'translateX(-' + imgIndex * width + 'px)';
}
function changeTransition(){
    for(let i = 0; i < transitions.length; i++){
        if(i === imgIndex){
            transitions[i].classList.add('selected');
        }else{
            transitions[i].classList.remove('selected');
        } 
    }
}