const hamburger = document.getElementById("ham-menu-id");

const btnOpenMenu = document.getElementById("open-menu");

//evento apertura hamburger menu
btnOpenMenu.addEventListener("click",

    //funzione anonima
    function () {
        hamburger.style = "display: block";
    }

);

//evento chiusura hamburger menu
const btnCloseMenu = document.getElementById("close-menu");

//evento chiusura hamburger menu
btnCloseMenu.addEventListener("click",

    //funzione anonima
    function () {
        hamburger.style = "display: none";
    }

);