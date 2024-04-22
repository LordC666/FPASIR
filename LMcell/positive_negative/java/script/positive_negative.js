function research() {
    let num = Number(document.getElementById('num').value);

    if (num < 0){
        document.getElementById('result').innerHTML = "El número es negativo...";
    } else if (num > 0) {
        document.getElementById('result').innerHTML = "El número es positivo...";
    } else {
        document.getElementById('result').innerHTML = "El número es cero!!!";
    }
}