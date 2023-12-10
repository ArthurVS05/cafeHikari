// menu burger

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
const sliderA = ["img/nagoya_iwakuni.jpg", "img/tokyo_tana.jpg", "img/mont-fuji-japon.jpg"];

const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");
const select_sliderA = document.querySelector("#sliderA");

let compteur = 0;

buttonLeft.addEventListener("click", slideLeft);
buttonRight.addEventListener("click", slideRight);

function slideLeft() {
    compteur--;
    if (compteur < 0) {
        compteur = sliderA.length - 1;
    }
    select_sliderA.src = sliderA[compteur];

};

function slideRight() {
    compteur++;
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

function slideLeftB() {
    compteurB--;
    if (compteurB < 0) {
        compteurB = sliderB.length - 1;
    }
    select_sliderB.src = sliderB[compteurB];

};

function slideRightB() {
    compteurB++;
    if (compteurB == sliderB.length) {
        compteurB = 0;
    }
    select_sliderB.src = sliderB[compteurB];

};



