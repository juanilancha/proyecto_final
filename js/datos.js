//Primero que nada tome los datos del usuario y los guarde dentro de un localStorage
//Luego utilize el manejo del dom para mostrar y ocultar los elementos a medido que el usuario vaya interactuando
//Y por ultimo cree un objeto con los datos de la casa del usuario y los parsee a un json mediante JSON.stringify
var nombreDeUsuario
var contrasenia
function inicioDeSesion() {
    nombreDeUsuario = document.getElementById("usuario").value;
    contrasenia = document.getElementById("contrasenia").value;

    localStorage.setItem("usuario",nombreDeUsuario);
    localStorage.setItem("contrasenia",contrasenia);
    localStorage.usuario;
    localStorage.contrasenia;

    cerrarFormulario()
    mostrarExplicacion()
    
}
function mostrarExplicacion(){
    document.getElementById("explicacion").style.display="block"
}

function cerrarFormulario() {
    document.getElementById("formularioDeInicio").style.display = "none"
}






function casa(localidad,barrio,nombreDePersona,direccionDeCasa) {
    this.localidad = localidad;
    this.barrio = barrio;
    this.persona = nombreDePersona;
    this.casa = direccionDeCasa;
}

//ejemplo de casas, lo que nose es como hacer que los parametros de un objeto los establezca el usuario, para despues hacer un json con esos datos
var casa1 = new casa("casanova","sanjose","juani","xxxx");
var casa2 = new casa("laferrere","donjuan","martin","xxxx2");
var casa3 = new casa("moron","texalar","lucia","xxxx3")

JSON.stringify(casa1);
JSON.stringify(casa2);
JSON.stringify(casa3);