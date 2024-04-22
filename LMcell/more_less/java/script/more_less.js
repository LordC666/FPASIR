function comparation() {
    
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    if ( num1 > num2 ) {
        document.getElementById('result').innerHTML = "El número " + num1 + " es mayor que " + num2;
    } else if ( num1 < num2 ) {
        document.getElementById('result').innerHTML = "El número " + num1 + " es menor que " + num2;
    } else {
        document.getElementById('result').innerHTML = "Los números son iguales";
    }
}