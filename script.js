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
    navMenu.classList.toggle("active");



}
)