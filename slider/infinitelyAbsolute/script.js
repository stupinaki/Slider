let imgNumber = 0;

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const imgs = document.querySelectorAll('._img');
const arrImg = Array.from(imgs);
const toImgBtn = document.querySelectorAll('.toImg');
const arrToImgBtn = Array.from(toImgBtn);

arrToImgBtn.forEach((toImgBtn, i) => toImgBtn.addEventListener('click', () => {
    imgNumber = i;
    return showCurrentImg(imgNumber);
}))

nextBtn.addEventListener('click', () => {
    imgNumber++       
    if(imgNumber >= arrImg.length) {
        imgNumber = 0;
    }  
    return showCurrentImg(imgNumber);
})


previousBtn.addEventListener('click', () => {
    imgNumber--
    if(imgNumber < 0){
        imgNumber = arrImg.length - 1;
    }   
    return showCurrentImg(imgNumber);
})

function showCurrentImg (imgNumber){
    for(let i = 0; i < arrImg.length; i++){
        if(i === imgNumber){
            arrImg[i].classList.remove('_invisible');
            arrToImgBtn[i].classList.add('_selected');
        }else{
            arrImg[i].classList.add('_invisible');
            arrToImgBtn[i].classList.remove('_selected');
        }
    }
}