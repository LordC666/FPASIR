function califications() {
    let num1 = Number(document.getElementById('num').value);
    let nota = "";

    if (num1 >= 0 && num1 < 5) {
        nota = "Suspenso";
    } else if ( num1 === 5) {
        nota = "Aprobado";
    } else if (num1 === 6) {
        nota = "Bien";
    } else if ( num1 > 6 && num1 < 9){
        nota = "Notable";
    } else if ( num1 >= 9 && num1 < 11){
        nota = "Sobresaliente";
    } else {
        nota = " nota no válida";
    }

    document.getElementById('result').innerHTML = "La nota es un " + num1 + " luego es un " + nota;
}