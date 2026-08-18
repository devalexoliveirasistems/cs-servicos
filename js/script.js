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
    "Olá! Vim pelo site da CS Serviços e gostaria de saber mais sobre os serviços.";


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

/* =========================================================
   FORMULÁRIO DE LEADS
========================================================= */

const leadForm = document.getElementById("leadForm");

const leadsApiUrl =
    "https://script.google.com/macros/s/AKfycbxT8MiuKKEnmOxCHiuhE_tt_rNB43Ssa0Q6gC9f0z2RDvSdoSJ043yNQrvVpdbCjyOsOg/exec";

if (leadForm) {

    leadForm.addEventListener("submit", async event => {

        event.preventDefault();

        const dados = {
            nome: document.getElementById("nome").value.trim(),
            whatsapp: document.getElementById("whatsapp").value.trim(),
            servico: document.getElementById("servico").value,
            origem: "Site",
            observacao: document.getElementById("observacao").value.trim()
        };

        try {

            const resposta = await fetch(leadsApiUrl, {
                method: "POST",
                body: JSON.stringify(dados)
            });

            const resultado = await resposta.json();

            if (resultado.sucesso) {

    const mensagemWhatsApp =
        `Olá! Acabei de solicitar atendimento pelo site da CS Serviços. Meu nome é ${dados.nome} e tenho interesse em ${dados.servico}.`;

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagemWhatsApp)}`;

    leadForm.innerHTML = `
        <div class="lead-success">
            <span class="lead-success__icon">✓</span>

            <h3>
                Solicitação enviada!
            </h3>

            <p>
                Seus dados foram registrados com sucesso.
            </p>

            <p>
                Estamos te redirecionando para o
                <strong>WhatsApp da CS Serviços...</strong>
            </p>
        </div>
    `;

    setTimeout(() => {

    window.location.href = whatsappUrl;

}, 1500);

}

        } catch (erro) {

            console.error("Erro ao enviar lead:", erro);

            alert(
                "Não foi possível enviar sua solicitação. " +
                "Tente novamente."
            );

        }

    });

}
