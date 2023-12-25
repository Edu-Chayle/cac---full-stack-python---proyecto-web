function dispositivoOrientacionHorizontal(height, width) {
    return height < width;
}

function ajustarAlturaImagen() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const imageContainer = document.querySelector(".img-container-c");

    const headerAndFooterHeight = width > 767 ? 150 : 108;

    if (dispositivoOrientacionHorizontal(height, width)) {
        if (width >= 717 && height > 500) {
            imageContainer.style.height = `calc(100vh - ${headerAndFooterHeight}px)`;
        } else {
            imageContainer.style.height = "140vh";
        }
    } else {
        imageContainer.style.height = `calc(100vh - ${headerAndFooterHeight}px)`;
    }
}

window.addEventListener("load", ajustarAlturaImagen);
window.addEventListener("resize", ajustarAlturaImagen);