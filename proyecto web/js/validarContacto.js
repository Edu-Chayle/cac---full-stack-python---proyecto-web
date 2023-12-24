const formulario = document.getElementById("formulario-contacto");
const inputs = document.querySelectorAll("#formulario-contacto input");
const textarea = document.getElementById("textarea-mensaje");

const expresiones = {
    nombreYApellido: /^[a-zA-Z\u00C0-\u00FF\s]{1,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}

const mensajesDeAyuda = {
    nombreYApellido: "Ingrese su nombre y apellido",
    email: "Ingrese su email",
    mensaje: "Escriba su consulta aquí"
};

function validarFormulario() {
    let esValido = true;
    const contenidoTextarea = textarea.value.trim();

    for (const input of inputs) {
        const contenidoInput = input.value.trim();
        
        function validarDato(expresion) {
            if (!expresion.test(contenidoInput)) {
                input.classList.add("input-error");
                input.setAttribute("placeholder", mensajesDeAyuda[input.name]);
                esValido = false;
            } else {
                input.classList.remove("input-error");
                input.removeAttribute("placeholder");
            }
        }

        if (input.name === "nombreYApellido") {
            validarDato(expresiones.nombreYApellido);
        }

        if (input.name === "email") {
            validarDato(expresiones.email);   
        }

        input.addEventListener("input", () => {
            const contenidoInput = input.value.trim();

            if (contenidoInput !== "") {
                input.classList.remove("input-error");
            } else {
                input.classList.add("input-error");
            }
        });
    }

    if (contenidoTextarea === "") {
        textarea.classList.add("input-error");
        textarea.setAttribute("placeholder", mensajesDeAyuda[textarea.name]);
        esValido = false;
    } else {
        textarea.classList.remove("input-error");
        textarea.removeAttribute("placeholder");
    }

    textarea.addEventListener("input", () => {
        if (textarea.value !== "") {
            textarea.classList.remove("input-error");
            textarea.removeAttribute("placeholder");
        } else {
            textarea.classList.add("input-error");
            textarea.setAttribute("placeholder", mensajesDeAyuda[textarea.name]);
        }
    })

    if (!esValido) {
        alert("Por favor, complete todos los campos obligatorios con valores válidos.");
    }

    return esValido;
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (validarFormulario()) {
        formulario.submit();
    }
});