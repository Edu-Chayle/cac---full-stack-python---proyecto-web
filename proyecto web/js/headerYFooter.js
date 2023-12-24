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
<div class="band"></div>
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

document.addEventListener("change", function(event) {
    if (event.target.matches("#input-menu")) {
        const arrows = document.querySelector(".fas");
        const band = document.querySelector(".band");
        const main = document.querySelector("main");
        const footer = document.querySelector("footer");

        if (event.target.checked) {
            arrows.classList.add("active");
            band.style.top = "126px";
            main.style.top = "126px";
            footer.style.top = "126px";
        } else {
            arrows.classList.remove("active");
            band.style.top = "0";
            main.style.top = "0";
            footer.style.top = "0";
        }
    }
});