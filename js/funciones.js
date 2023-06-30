var Ingreso;
var valor;


function calculoEdad() {
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var fechaActual = new Date();
    var fechaNacimientoObjeto = new Date(fechaNacimiento);
    var diferenciaTiempo = fechaActual - fechaNacimientoObjeto;
    var edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));

    document.getElementById("resultadoEdad").innerHTML = "La edad es: " + edad + " años";

}


function calculoPermanencia() {
    var fechaIngreso = document.getElementById("FechaIngreso").value;
    var fechaActual = new Date();
    var fechaIngresoObjeto = new Date(fechaIngreso);
    var diferenciaTiempo = fechaActual - fechaIngresoObjeto;
    Ingreso = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));

    document.getElementById("resultadoPermanencia").innerHTML = "La antiguedad es: " + Ingreso + " años";

}