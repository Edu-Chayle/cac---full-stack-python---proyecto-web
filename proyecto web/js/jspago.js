window.addEventListener("load", agregareventoenviar)
let tarjeta_back = document.getElementById("tback")
//let tarjeta_front = document.getElementById("tfrontend")



function mostrartarjeta() {
    //devuelve las clases que tiene y quita la clase css inicial y agrega una nueva
    console.log(tarjeta_back.classList.remove("tarjeta_backend_desactiva"))
    tarjeta_back.classList.add("tarjeta_backend_activa")
}

function resetear() {
    //verifica si la clase esta activa si es true agrega la clase
    if (tarjeta_back.className == "tarjeta_backend_activa") {
        tarjeta_back.classList.toggle("tarjeta_backend_desactiva")
    }

    //Campo radio del tipo de tarjetas
    let error_tipo_tarjeta = document.getElementById("error_tipo_tarjeta")
    if (error_tipo_tarjeta.style.visibility == "visible") {
        error_tipo_tarjeta.style.visibility = "hidden"
    }

    //activar o desactivar la clase error numero de tarjeta
    let alert_num = document.getElementById("error_num")
    if (alert_num.style.visibility == "visible") {
        alert_num.style.visibility = "hidden"
    }

    //Campo desde la fecha de la tarjeta

    let alert_desde_fecha = document.getElementById("error_desde_fecha")
    if (alert_desde_fecha.style.visibility == "visible") {
        alert_desde_fecha.style.visibility = "hidden"
    }


    //Campo hasta la fecha de la tarjeta

    let alert_hasta_fecha = document.getElementById("error_hasta_fecha")
    if (alert_hasta_fecha.style.visibility == "visible") {
        alert_hasta_fecha.style.visibility = "hidden"
    }


    //Campo Nombre verificar si estan vacios

    let alert_nom = document.getElementById("error_nom");
    if (alert_nom.style.visibility == "visible") {
        alert_nom.style.visibility = "hidden"
    }

    //Campo Apellido 

    let alert_ape = document.getElementById("error_ape");
    if (alert_ape.style.visibility == "visible") {
        alert_ape.style.visibility = "hidden"
    }


    //Campo Dni
    let alert_dni = document.getElementById("error_dni");
    if (alert_dni.style.visibility == "visible") {
        alert_dni.style.visibility = "hidden"
    }

    //Campo Ultimos tres numeros

    let alert_ult_num = document.getElementById("error_ult_num");
    if (alert_ult_num.style.visibility == "visible") {
        alert_ult_num.style.visibility = "hidden"
    }
}

function agregareventoenviar() {
    let enviar = document.getElementById("btnenviar")
    enviar.addEventListener("click", verificar)
}

function verificar(evento) {

    evento.preventDefault();

    //Tipo de tarjeta seleccionada
    // obtenemos todos los input radio del grupo horario que esten chequeados
    let tipo_tarjeta = document.querySelector('input[name="tarjeta"]:checked')
    let error_tipo = document.getElementById("error_tipo_tarjeta")
    if (!tipo_tarjeta) {
        error_tipo.style.visibility = "visible"
    } else {
        error_tipo.style.visibility = "hidden"
    }

    //Campo numero de la tarjeta y para su error

    let num = document.getElementById("num_tarjeta")
    let error = document.getElementById("error_num")

    if (num.value.length <= 0 || num.value.length < 8) {
        error.style.visibility = "visible"
    } else {
        error.style.visibility = "hidden"
    }

    //Campo desde la fecha de la tarjeta

    let desde_fecha = document.getElementById("desde_fecha")
    let error_desde_fecha = document.getElementById("error_desde_fecha")

    if (desde_fecha.value.length < 7 || desde_fecha.value.length > 7) {
        error_desde_fecha.style.visibility = "visible"
    } else {
        error_desde_fecha.style.visibility = "hidden"
    }


    //Campo hasta la fecha de la tarjeta

    let hasta_fecha = document.getElementById("hasta_fecha")
    let error_hasta_fecha = document.getElementById("error_hasta_fecha")

    if (hasta_fecha.value.length < 7 || hasta_fecha.value.length > 7) {
        error_hasta_fecha.style.visibility = "visible"
    } else {
        error_hasta_fecha.style.visibility = "hidden"
    }


    //Campo Nombre verificar si estan vacios

    let nom = document.getElementById("nom");
    let alert_nom = document.getElementById("error_nom");


    if (nom.value.length <= 0 && nom.textContent.trim() == "") {
        alert_nom.style.visibility = "visible"
    } else {
        alert_nom.style.visibility = "hidden"
    }

    //Campo Apellido verificar si estan vacios

    let ape = document.getElementById("ape");
    let alert_ape = document.getElementById("error_ape");

    if (ape.value.length <= 0 && ape.textContent.trim() == "") {
        alert_ape.style.visibility = "visible"
    } else {
        alert_ape.style.visibility = "hidden"
    }

    //Campo Dni
    let dni = document.getElementById("dni");
    let alert_dni = document.getElementById("error_dni");

    if (dni.value.length <= 0 || dni.value.length < 8 || dni.value.length > 8) {
        alert_dni.style.visibility = "visible"
    } else {
        alert_dni.style.visibility = "hidden"
    }

    //Campo Ultimos tres numeros

    let ult_num = document.getElementById("ult_num");
    let alert_ult_num = document.getElementById("error_ult_num");

    if (ult_num.value.length < 3 || ult_num.value.length > 3) {
        alert_ult_num.style.visibility = "visible"
    } else {
        alert_ult_num.style.visibility = "hidden"
    }

}


