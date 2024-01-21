/*---EJERCICIO1---*/

// Función para devolver el menor de dos números
function menorDeDosNumeros() {
  let a = parseInt(prompt("Ingresa el primer número:"));
  let b = parseInt(prompt("Ingresa el segundo número:"));

  if (isNaN(a) || isNaN(b)) {
    return "Error: Ingresa dos números válidos";
  } else if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Función para devolver la fecha actual en formato "dd-mm-yyyy"
function fechaDelDia() {
  let fecha = new Date();
  let dia = ("0" + fecha.getDate()).slice(-2);
  let mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
  let anio = fecha.getFullYear();
  return dia + "-" + mes + "-" + anio;
}


/*---EJERCICIO2---*/
/*
function potencia(x, n) {
  if (n === 0) {
    throw new Error("La potencia no puede ser cero");
  } else {
    let resultado = 1;
    for (let i = 0; i < n; i++) {
      resultado *= x;
    }
    return resultado;
  }
}

function fechaHoy() {
  let fecha = new Date();
  let dia = ("0" + fecha.getDate()).slice(-2);
  let mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
  let anio = fecha.getFullYear();
  return dia + "-" + mes + "-" + anio;
}
*/