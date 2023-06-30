var antiguedad;
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
    antiguedad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));

    document.getElementById("resultadoPermanencia").innerHTML = "La antiguedad es: " + antiguedad + " años";

}

function modificarValor() {
    valor = prompt("Ingrese un valor:");

    document.getElementById("resultadoValor").innerHTML = valor;
}

function calcularPrestaciones() {
    // var antiguedad = document.getElementById("resultadoAntiguedad").value;
    // var salario = document.getElementById("resultadoValor").value;

    var prestaciones = (antiguedad * valor) / 12;

    document.getElementById("resultadoPrestaciones").innerHTML = "Prestaciones: $" + prestaciones.toFixed(2) ;
  }