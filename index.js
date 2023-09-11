let imageTracker = document.querySelector('.slider__tracker-img')
let textTracker = document.querySelector('.slider__tracker-txt')
let imageWidth = document.querySelector('.slider__image').offsetWidth
let textWidth = document.querySelector('.slider__text').offsetWidth
let sliderBox = document.querySelectorAll('.controller__box')
let sliderDots = document.querySelectorAll('.controller__dot')
sliderBox.forEach((dot,index) => {

    dot.addEventListener('click', ()=>{
        changeActiveDot(index)
        imageTracker.style.transform = `translateX(-${imageWidth*index}px)`
        textTracker.style.transform = `translateX(-${textWidth*index}px)`

    })
})

function changeActiveDot(index){

    sliderDots.forEach((dot) => {
        dot.classList.remove('active-dot')
    })
    sliderDots[index].classList.add('active-dot')

}