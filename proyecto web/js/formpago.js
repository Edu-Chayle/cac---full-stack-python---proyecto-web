window.addEventListener("load", agregareventoenviar)
// Variable local para verificar que no hay error
let error_total = false
function val_nom() {
    //Campo Nombre verificar si estan vacios
    let nom = document.getElementById("nom").value
    let alert_nom = document.getElementById("error_nom")

    if (nom.length < 0 || nom.trim() == "" || nom.length > 15) {
        alert_nom.style.visibility = "visible"
        error_total = true
    } else {
        alert_nom.style.visibility = "hidden"
        error_total = false
    }
}

function val_ape() {
    //Campo Apellido verificar si estan vacios
    let ape = document.getElementById("ape").value
    let alert_ape = document.getElementById("error_ape")

    if (ape.length < 0 || ape.trim() == "" || ape.length > 15) {
        alert_ape.style.visibility = "visible"
        error_total = true
    } else {
        alert_ape.style.visibility = "hidden"
        error_total = false
    }
}

function val_dni() {
    let dni = document.getElementById("dni").value
    let alert_dni = document.getElementById("error_dni")

    if (dni.length < 7 || dni.length > 7 || dni.trim() == "") {
        alert_dni.style.visibility = "visible"
        error_total = true
    } else {
        alert_dni.style.visibility = "hidden"
        error_total = false
    }
}

function val_num_tarj() {
    //Campo numero de la tarjeta y para su error

    let num = document.getElementById("num_tarjeta").value
    let error = document.getElementById("error_num")

    if (num.length <= 0 || num.length < 7 || num.length > 7) {
        error.style.visibility = "visible"
        error_total = true
    } else {
        error.style.visibility = "hidden"
        error_total = false
    }
}

function val_fec_desde() {
    //Campo desde la fecha de la tarjeta

    let desde_fecha = document.getElementById("desde_fecha").value
    let error_desde_fecha = document.getElementById("error_desde_fecha")

    if (desde_fecha.length < 7 || desde_fecha.length > 7) {
        error_desde_fecha.style.visibility = "visible"
        error_total = true
    } else {
        error_desde_fecha.style.visibility = "hidden"
        error_total = false
    }

}

function val_fec_hasta() {

    //Campo hasta la fecha de la tarjeta
    let hasta_fecha = document.getElementById("hasta_fecha").value
    let error_hasta_fecha = document.getElementById("error_hasta_fecha")

    if (hasta_fecha.length < 7 || hasta_fecha.length > 7) {
        error_hasta_fecha.style.visibility = "visible"
        error_total = true
    } else {
        error_hasta_fecha.style.visibility = "hidden"
        error_total = false
    }

}

function mostrartarjeta() {
    let tarjeta_back = document.getElementById("tback")
    //devuelve las clases que tiene y quita la clase css inicial y agrega una nueva
    tarjeta_back.classList.remove("tarjeta_backend_desactiva")
    tarjeta_back.classList.add("tarjeta_backend_activa")
    //Campo Ultimos tres numeros

    let ult_num = document.getElementById("ult_num").value
    let alert_ult_num = document.getElementById("error_ult_num")

    if (ult_num.length < 2 || ult_num.length > 2) {
        alert_ult_num.style.visibility = "visible"
        error_total = true
    } else {
        alert_ult_num.style.visibility = "hidden"
        error_total = false
    }
}



function val_input_radio() {
    //Tipo de tarjeta seleccionada
    // obtenemos todos los input radio del grupo que esten chequeados
    let tipo_tarjeta = document.querySelector('input[name="tarjeta"]:checked')
    let error_tipo = document.getElementById("error_tipo_tarjeta")
    if (!tipo_tarjeta) {
        error_tipo.style.visibility = "visible"
        error_total = true
    } else {
        error_tipo.style.visibility = "hidden"
        error_total = false
    }
}

function val_ult_num() {
    let ult_num = document.getElementById("ult_num").value
    let alert_ult_num = document.getElementById("error_ult_num")

    if (ult_num.length < 3 || ult_num.length > 3) {
        alert_ult_num.style.visibility = "visible"
        error_total = true
    } else {
        alert_ult_num.style.visibility = "hidden"
        error_total = false
    }
}

function val_select() {
    let valor = document.getElementById("distancia").value
    let alert_select = document.getElementById("error_select")
    if (!valor) {
        alert_select.style.visibility = "visible"
        error_total = true
    } else {
        alert_select.style.visibility = "hidden"
        error_total = false
    }
    valor_total(valor)
}

function valor_total(val) {
    let total = document.getElementById("total")
    let precio_1 = "$5000"
    let precio_2 = "$10000"
    let precio_3 = "$20000"
    switch (val) {
        case "1":
            total.value = precio_1
            break
        case "2":
            total.value = precio_2
            break
        case "3":
            total.value = precio_3
            break;
        default:
            total.value = 0;
    }
}

//Funciones para resear campos
function ocultartarjback() {
    let tarjeta_back = document.getElementById("tback")
    //verifica si la clase esta activa si es true agrega la clase
    if (tarjeta_back.className == "tarjeta_backend_activa") {
        tarjeta_back.classList.toggle("tarjeta_backend_desactiva")
    }
}

function reset_input_radio() {
    let error_tipo = document.getElementById("error_tipo_tarjeta")
    if (error_tipo.style.visibility = "visible") {
        error_tipo.style.visibility = "hidden"
    }
}

function reset_num_tarj() {
    let error = document.getElementById("error_num")
    if (error.style.visibility = "visible") {
        error.style.visibility = "hidden"
    }
}

function reset_nom() {
    let alert_nom = document.getElementById("error_nom")
    if (alert_nom.style.visibility = "visible") {
        alert_nom.style.visibility = "hidden"
    }
}

function reset_ape() {
    let alert_ape = document.getElementById("error_ape")
    if (alert_ape.style.visibility = "visible") {
        alert_ape.style.visibility = "hidden"
    }
}

function reset_dni() {
    let alert_dni = document.getElementById("error_dni")
    if (alert_dni.style.visibility = "visible") {
        alert_dni.style.visibility = "hidden"
    }
}

function reset_ult_num() {
    let alert_ult_num = document.getElementById("error_ult_num")
    if (alert_ult_num.style.visibility = "visible") {
        alert_ult_num.style.visibility = "hidden"
    }
}

function reset_select() {
    let alert_select = document.getElementById("error_select")
    if(alert_select.style.visibility = "visible"){
        alert_select.style.visibility = "hidden"
    }    
}


function resetear() {
    //Ocultar tarjeta back
    ocultartarjback()
    //Campo radio del tipo de tarjetas
    reset_input_radio()
    //activar o desactivar la clase error numero de tarjeta
    reset_num_tarj()
    //Campo Nombre verificar si estan vacios
    reset_nom()
    //Campo Apellido 
    reset_ape()
    //Campo Dni    
    reset_dni()
    //Campo Ultimos tres numeros
    reset_ult_num()
    //Campo select
    reset_select()
}

function confirmacion() {
    let mensaje;
    let opcion = confirm("Confirmar Pago ?");


    if (opcion == true) {
        mensaje = "Pago Exitoso";
        redireccionar(mensaje)
    } else {
        mensaje = "Has clickado Cancelar";
    }

}

function redireccionar(msj) {
    let redireccion = confirm(msj + "  Ir a la página principal ?");
    if (redireccion == true) {
        location.href = "../index.html"
    }
}

function agregareventoenviar() {
    let enviar = document.getElementById("btnenviar")
    enviar.addEventListener("click", verificar)
}

function verificar(evento) {
    evento.preventDefault();
    //Campo radio del tipo de tarjetas
    val_input_radio()
    //Campo numero de la tarjeta y para su error
    val_num_tarj()
    //Campo desde la fecha de la tarjeta
    val_fec_desde()
    //Campo hasta la fecha de la tarjeta
    val_fec_hasta()
    //Campo Nombre verificar si estan vacios
    val_nom()
    //Campo Apellido verificar si estan vacios
    val_ape()
    //Campo Dni
    val_dni()
    //Campo Ultimos tres numeros
    val_ult_num()
    //Campo select
    val_select()
    //Verificar error total
    if (!error_total) {
        confirmacion()
    } else {
        console.log(error_total)
    }
}


