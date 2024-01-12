const largeHeaderContent = `
<div class="header-container">
    <div class="header-logo">
        <a href="https://21kmpalermo-administracion.netlify.app"><img src="img/header-logo.png" alt="Logo 21 km Palermo"></a>
    </div>
    <nav class="nav">
        <ul class="link-list">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="pages/inscripcion.html">Inscripción</a></li>
            <li><a href="pages/contacto.html">Contacto</a></li>
        </ul>
    </nav>
</div>
<div class="band"></div>
`;

const smallHeaderContent = `
<div class="header-container">
    <div class="header-logo">
        <a href="https://21kmpalermo-administracion.netlify.app"><img src="img/header-logo.png" alt="Logo 21 km Palermo"></a>
    </div>
    <div class="header-arrows">
        <label for="input-menu"><i class="fas fa-angle-double-down"></i></label>
    </div>
    <input id="input-menu" class="input-menu" type="checkbox" name="menu">
    <nav class="nav-list">
        <ul class="link-list">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="pages/inscripcion.html">Inscripción</a></li>
            <li><a href="pages/contacto.html">Contacto</a></li>
        </ul>
    </nav>
</div>
<div class="band movable-element"></div>
`;

const linkListContent = `
<li><a href="../index.html">Inicio</a></li>
<li><a href="inscripcion.html">Inscripción</a></li>
<li><a href="contacto.html">Contacto</a></li>
`;

const footerContent = `
<div>
    <a href="https://www.facebook.com" target="_blank"><i class ="fa fa-facebook" aria-hidden="true"></i></a>
    <a href=" https://www.instagram.com" target="_blank "><i class ="fa fa-instagram" aria-hidden="true"></i></a>
    <a href="https://www.twitter.com" target="_blank"><i class ="fa fa-twitter" aria-hidden="true"></i></a>
</div>
<p>© copyright 2023</p>
<p>Developer by Team One</p>
`;

function esDispositivoMovil() {
    return window.innerWidth <= 414;
}

function updateHeader() {
    if (esDispositivoMovil()) {
        document.getElementById("header").innerHTML = smallHeaderContent;
    } else {
        document.getElementById("header").innerHTML = largeHeaderContent;
    }
}

function updateHeaderLinks() {
    const actualPage = window.location.pathname;
    const imagePath = document.querySelector(".header-logo img");
    const linkList = document.querySelector(".link-list");

    if (actualPage !== "/" && !actualPage.includes("index.html")) {
        imagePath.src = "../img/header-logo.png";
        linkList.innerHTML = linkListContent;
    }
}

function updateActivePage() {
    const actualPage = window.location.pathname;
    const links = document.querySelectorAll(".link-list a");

    links.forEach(link => {
        const linkPath = link.getAttribute("href").replace(".html", "");

        if ((actualPage === "/" || actualPage.includes("index.html")) && linkPath === "index") {
            link.classList.add("active-page");
        } else if (actualPage.includes(linkPath)) {
            link.classList.add("active-page");
        }
    });
}

function trasladarElementosAlActivarODesactivarCheckbox() {
    if (esDispositivoMovil()) {
        let elementScrollingDisabled = true;

        document.addEventListener("change", (event) => {
            if (event.target.matches("#input-menu")) {
                const arrows = document.querySelector(".fas");
                const movableElements = document.querySelectorAll(".movable-element");

                if (event.target.checked) {
                    arrows.classList.add("active-arrows");

                    movableElements.forEach(element => {
                        element.style.transform = "translateY(126px)";
                    });

                    elementScrollingDisabled = false;
                } else {
                    arrows.classList.remove("active-arrows");

                    movableElements.forEach(element => {
                        element.style.transform = "none";
                    });
                }
            }
        });

        document.addEventListener("click", (event) => {
            const header = document.querySelector(".header");
            const arrows = document.querySelector(".fas");
            const inputMenu = document.getElementById("input-menu");
            const movableElements = document.querySelectorAll(".movable-element");

            if (!header.contains(event.target)) {
                arrows.classList.remove("active-arrows");

                inputMenu.checked = false;

                movableElements.forEach(element => {
                    element.style.transform = "none";
                });

                elementScrollingDisabled = true;
            }
        });

        let startY = 0;
        let endY = 0;

        document.addEventListener("touchstart", (event) => {
            startY = event.touches[0].clientY;
        });

        document.addEventListener("touchend", (event) => {
            endY = event.changedTouches[0].clientY;

            const deltaY = startY - endY;

            if (deltaY > 10 && !elementScrollingDisabled) {
                const header = document.querySelector(".header");
                const arrows = document.querySelector(".fas");
                const inputMenu = document.getElementById("input-menu");
                const movableElements = document.querySelectorAll(".movable-element");

                if (!header.contains(event.target)) {
                    arrows.classList.remove("active-arrows");

                    inputMenu.checked = false;

                    movableElements.forEach((element) => {
                        element.style.transform = "none";
                    });

                    elementScrollingDisabled = true;
                }
            }
        });
    }
}

document.getElementById("footer").innerHTML = footerContent;

window.addEventListener("load", () => {
    updateHeader();
    updateHeaderLinks();
    updateActivePage();
    trasladarElementosAlActivarODesactivarCheckbox();
});

window.addEventListener("resize", () => {
    updateHeader();
    updateHeaderLinks();
    updateActivePage();
    trasladarElementosAlActivarODesactivarCheckbox();
});