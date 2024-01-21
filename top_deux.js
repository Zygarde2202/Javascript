let button = document.getElementById('dark')
let fond = document.querySelector('.main-content')
let footer = document.querySelector('footer')
let lien = document.querySelectorAll('.pages')
let listeAnime = document.querySelectorAll('.anime')

listeAnime.forEach((anime) => {
    anime.classList.add('dm-anime')
})

fond.classList.add('dm')
function darkMode() {
    if(fond.classList.contains('dm')){
        fond.classList.remove('dm')
        footer.classList.remove('footer')
        lien.forEach((pages) => {
            pages.classList.remove('pages')
        })
        listeAnime.forEach((anime) => {
            anime.classList.remove('dm-anime')
        })
        button.innerHTML = "dark mode"
        fond.classList.add('lm')
        footer.classList.add('lm-footer')
        lien.forEach((pages) => {
            pages.classList.add('lm-pages')
        })
        listeAnime.forEach((anime) => {
            anime.classList.add('lm-anime')
        })
    } else {
        fond.classList.remove('lm')
        footer.classList.remove('lm-footer')
        lien.forEach((pages) => {
            pages.classList.remove('lm-pages')
        })
        listeAnime.forEach((anime) => {
            anime.classList.remove('lm-anime')
        })

        button.innerHTML = "light mode"
        fond.classList.add('dm')
        footer.classList.add('footer')
        lien.forEach((pages) => {
            pages.classList.add('pages')
        })
        listeAnime.forEach((anime) => {
            anime.classList.add('dm-anime')
        })

    }
}
/*----------------------------*/
function openAnime(evt, animeName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(animeName).style.display = "block";
    evt.currentTarget.className += " active";
  }
