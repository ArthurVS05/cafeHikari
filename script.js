/*menu burger

creer un menu burger:

par default : bar de navigation 7vh qui prend 100% 
avec à chaque extrémité le logo et l'icone burger

ouvrir un menu quan dl'utilisateur click sur 
l'icon burger

quand le menu est ouvert : l'icone burger disparait et le croix apparait a sa place
(rajouter également un élément comprenant le logo qui viendra se placer avant )

les liens de navigations s'afichent au milieu de la page(centrer les liens de navigation), le bandeau nav prend alors 100% de la taille de l'écran (hauteur et largeur)
(rajouter également un élément comprenant le logo qui viendra se placer avant )

quand on clique sur la croix , le bandeau de navigation reviens dans sa position initial


creer une classe en css pour avoir notre rendu (applicable sur nav et une autre classe pour centrer nos element)
cette classe sera ajouter en js avec l'évènement click sur l'icone burger 

*/

const burger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle("active");
    document.body.classList.toggle("active");
}
);

document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('active');
    });
});

// slider photo A
// source Internet 
// https://nouvelle-techno.fr/articles/creer-un-diaporama-en-html-css-js

const sliderA = ["img/nagoya_iwakuni.jpg", "img/tokyo_tana.jpg", "img/mont-fuji-japon.jpg"];

const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");
const select_sliderA = document.querySelector("#sliderA");

let compteur = 0;

buttonLeft.addEventListener("click", slideLeft);
buttonRight.addEventListener("click", slideRight);

// Défiler le diapo vers la gauche
function slideLeft() {
    // On décrémente le compteur
    compteur--;
    // Si on dépasse le début du diapo, on arrive à la fin
    if (compteur < 0) {
        compteur = sliderA.length - 1;
    }
    select_sliderA.src = sliderA[compteur];

};

function slideRight() {
    // On incrémente le compteur
    compteur++;
    // Si on arrive à la fin du diapo, on reprend au début
    if (compteur == sliderA.length) {
        compteur = 0;
    }
    select_sliderA.src = sliderA[compteur];

};

// slider photo B

const sliderB = ["img/tokyo_tana.jpg", "img/nagoya_iwakuni.jpg", "img/mont-fuji-japon.jpg"];

const buttonLeftB = document.querySelector(".buttonLeftB");
const buttonRightB = document.querySelector(".buttonRightB");
const select_sliderB = document.querySelector("#sliderB");

let compteurB = 0;

buttonLeftB.addEventListener("click", slideLeftB);
buttonRightB.addEventListener("click", slideRightB);

// Défiler le diapo vers la gauche
function slideLeftB() {
    // On décrémente le compteur
    compteurB--;
    // Si on dépasse le début du diapo, on arrive à la fin
    if (compteurB < 0) {
        compteurB = sliderB.length - 1;
    }
    select_sliderB.src = sliderB[compteurB];

};

function slideRightB() {
    // On incrémente le compteur
    compteurB++;
    // Si on arrive à la fin du diapo, on reprend au début
    if (compteurB == sliderB.length) {
        compteurB = 0;
    }
    select_sliderB.src = sliderB[compteurB];

};



