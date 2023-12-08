const largeHeaderContent = `
<div class="logo-y-nav-i">
    <div class="header-logo-i">
        <a href="https://21kmpalermo-administracion.netlify.app"><img src="../img/header-logo.png" alt="Logo 21 km Palermo"></a>
    </div>
    <nav class="nav-i">
        <ul>
            <li><a href="../index.html">Inicio</a></li>
            <li><a href="inscripcion.html">Inscripción</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</div>
<div class="band-i"></div>
`;

const smallHeaderContent = `
<div class="logo-y-nav-i">
    <div class="header-logo-i">
        <a href="https://21kmpalermo-administracion.netlify.app"><img src="../img/header-logo.png" alt="Logo 21 km Palermo"></a>
    </div>
    <div class="header-arrows-i">
        <label for="input-menu"><i class="fas fa-angle-double-down"></i></label>
    </div>
    <input id="input-menu" class="input-menu-i" type="checkbox" name="menu">
    <nav class="nav-list-i">
        <ul>
            <li><a href="../index.html">Inicio</a></li>
            <li><a href="inscripcion.html">Inscripción</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</div>
<div class="band-i"></div>
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

function actualizarHeader() {
    if (window.innerWidth < 375) {
        document.getElementById("header").innerHTML = smallHeaderContent;
    } else {
        document.getElementById("header").innerHTML = largeHeaderContent;
    }
}

window.addEventListener("load", actualizarHeader);
window.addEventListener("resize", actualizarHeader);

document.getElementById("footer").innerHTML = footerContent;