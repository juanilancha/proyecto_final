//El proyecto trata acerca de una alarma vecinal, en la cual el usuario ingresa sus datos, que son almacenados en un js(datos.js), y mediante que el usuario va eligiendo sus necesidades van saltando diferentes opciones.
//Cuando al usuario se le pide que elija una opcion y escriba su mensaje de la alarma, este se va a ver reflejado en un foro que lo estoy desarrolando.


document.getElementById("explicacion").style.display = "none"
document.getElementById("alarma").style.display = "none"
document.getElementById("contenedorDeOpciones").style.display = "none";
document.getElementById("opcionAlarma").style.display = "none";
document.getElementById("opcionUrgencia").style.display = "none";
document.getElementById("opcion911").style.display = "none"

function mostrarAlarma(){
    document.getElementById("alarma").style.display = "block";
    document.getElementById("explicacion").style.display = "none"
}

function mostrarOpciones(){
    document.getElementById("contenedorDeOpciones").style.display = "block"
}

function mostrarOpcionAlarma(){
    document.getElementById("opcionAlarma").style.display = "block"
}

function mostrarOpcionUrgencia(){
    document.getElementById("opcionUrgencia").style.display = "block"
}

function mostrarOpcion911(){
    document.getElementById("opcion911").style.display = "block"
}


