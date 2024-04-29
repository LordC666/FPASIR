function even_odd() {
    let num1 = Number(document.getElementById('num').value);
    let paridad = "";
    let i;

    for (i = 2 ;i <= num1; i+=2){
        if (i === num1) {
            paridad = "PAR";
            break;
        } else if (i + 1 === num1){
            paridad = "IMPAR";
            break;
        } 

    }

    document.getElementById('result').innerHTML = "El número " + num1 + " es " + paridad;

}