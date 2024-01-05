const formulario = document.getElementById("formulario-stockit");
const selects = document.querySelectorAll("#formulario-stockit select");

function validarFormulario() {
    let esValido = true;

    for (const select of selects) {
        if (select.value === "") {
            select.classList.add("select-error");
            esValido = false;
        } else {
            select.classList.remove("select-error");
        }

        select.addEventListener("change", () => {
            if (select.value !== "") {
                select.classList.remove("select-error");
            }
        });
    }

    if (!esValido) {
        alert("Por favor, seleccione opciones válidas.");
    }

    return esValido;
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validarFormulario()) {
        formulario.submit();

        window.location.href = "../pages/formpago.html";
    }
});