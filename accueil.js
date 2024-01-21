let button = document.getElementById('dark')
let fond = document.querySelector('.main-content')
let footer = document.querySelector('footer')
let lien = document.querySelectorAll('.pages')

fond.classList.add('dm')
function darkMode() {
    if(fond.classList.contains('dm')){
        button.innerHTML = "dark mode"
        fond.classList.remove('dm')
        footer.classList.remove('footer')
        lien.forEach((element) => {
            element.classList.remove('pages')
        })
        fond.classList.add('lm')
        footer.classList.add('lm-footer')
        lien.forEach((element) => {
            element.classList.add('lm-pages')
        })
    } else {
        button.innerHTML = "light mode"
        fond.classList.remove('lm')
        footer.classList.remove('lm-footer')
        lien.forEach((element) => {
            element.classList.remove('lm-pages')
        })
        fond.classList.add('dm')
        footer.classList.add('footer')
        lien.forEach((element) => {
            element.classList.add('pages')
        })

    }
}

/*------------------------------*/
document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper(".mon-slider", {
        navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
        },
        pagination: {
        el : ".swiper-pagination"
        },
        autoplay : {
            delay : 4000
        }
    })
})
