/* =========================================================
   CS SERVIÇOS
   JAVASCRIPT
========================================================= */


/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   WHATSAPP
========================================================= */

/*
    TROQUE PELO NÚMERO DA CS SERVIÇOS.

    IMPORTANTE:
    Coloque o número no formato internacional,
    sem espaços, sem parênteses e sem o sinal +.

    Exemplo:
    5534999999999
*/

const whatsappNumber = "5534991856228";

const whatsappMessage =
    "Olá! Gostaria de saber mais sobre os serviços da CS Serviços.";


function openWhatsApp() {

    const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

}


/* Botão principal */

const whatsappButton =
    document.getElementById("whatsappButton");

if (whatsappButton) {

    whatsappButton.addEventListener("click", event => {

        event.preventDefault();

        openWhatsApp();

    });

}


/* WhatsApp no rodapé */

const footerWhatsapp =
    document.getElementById("footerWhatsapp");

if (footerWhatsapp) {

    footerWhatsapp.addEventListener("click", event => {

        event.preventDefault();

        openWhatsApp();

    });

}


/* =========================================================
   ANO AUTOMÁTICO
========================================================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   HEADER AO ROLAR
========================================================= */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(11, 31, 58, 0.08)";

    } else {

        header.style.boxShadow =
            "none";

    }

});