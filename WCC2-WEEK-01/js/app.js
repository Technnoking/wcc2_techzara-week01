// les variables

const drop = document.querySelector('.drop');
const liste = document.querySelectorAll('.none');
const arrow = document.querySelector('[alt="arrow"]');
const btnStrok = document.querySelector('.strok');
const arrowBtn = document.querySelector('.strok img');


// les fontions

const afficheCourses = function () {
    for(i=0; i < liste.length; i++){
        let view = liste[i];
        view.classList.toggle('affiche');
    }
    arrow.classList.toggle('active');
}

const decaleArrow = function () {
    this.classList.add('active');
}

const resetDecaleArrow = function () {
    this.classList.remove('active');
}


//  les listeners
drop.addEventListener('click', afficheCourses);
btnStrok.addEventListener('mouseover', decaleArrow);
btnStrok.addEventListener('mouseout', resetDecaleArrow);



/* On utilise la librairie gsap 
Animation au chargement */

const tl = gsap.timeline();

tl.from('.fadein-left', {
    duration: 0.8,
    x: -200,
    opacity: 0,
    stagger: 0.6,
    ease:"sine"
})

tl.from('.image-principale', {
    duration: 0.8,
    y:-300,
    opacity:0
})

gsap.from('.slogan', {
    duration:0.9,
    y:-400,
    opacity:0,
    delay:2.2
})

gsap.from('.fondu', {
    duration: 0.8,
    opacity:0,
    delay:2.5
})

gsap.from('.detail, .certified', {
    duration: 2,
    x:-100,
    opacity:0,
    delay:3,
    ease:"power4"
})