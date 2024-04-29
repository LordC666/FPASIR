function multiplication() {
    
    let tab = [ " " ];

    let i;

    for (i = 0; i <= 50; i+=5){
        tab += i + ", ";
    }

    document.getElementById('result').innerHTML = "La tabla del 5 es... " + tab;
}
