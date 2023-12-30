const largeHeaderContent = `
<div class="header-container">
    <div class="header-logo">
        <a href="https://21kmpalermo-administracion.netlify.app"><img src="../img/header-logo.png" alt="Logo 21 km Palermo"></a>
    </div>
    <nav class="nav">
        <ul>
            <li><a href="../index.html">Inicio</a></li>
            <li><a href="inscripcion.html">Inscripción</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</div>
<div class="band"></div>
`;

const smallHeaderContent = `
<div class="header-container">
    <div class="header-logo">
        <a href="https://21kmpalermo-administracion.netlify.app"><img src="../img/header-logo.png" alt="Logo 21 km Palermo"></a>
    </div>
    <div class="header-arrows">
        <label for="input-menu"><i class="fas fa-angle-double-down"></i></label>
    </div>
    <input id="input-menu" class="input-menu" type="checkbox" name="menu">
    <nav class="nav-list">
        <ul>
            <li><a href="../index.html">Inicio</a></li>
            <li><a href="inscripcion.html">Inscripción</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</div>
<div class="band movable-element"></div>
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

function updateHeader() {
    if (window.innerWidth <= 414) {
        document.getElementById("header").innerHTML = smallHeaderContent;
    } else {
        document.getElementById("header").innerHTML = largeHeaderContent;
    }
}

window.addEventListener("load", updateHeader);
window.addEventListener("resize", updateHeader);

document.getElementById("footer").innerHTML = footerContent;

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