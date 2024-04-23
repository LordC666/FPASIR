function weekday() {
    
    let num = document.getElementById('options').value;

    if (num == 1){
        document.getElementById('result').innerHTML = 'Es Lunes';
    } else if (num == 2){
        document.getElementById('result').innerHTML = 'Es Martes';
    } else if (num == 3){
        document.getElementById('result').innerHTML = 'Es Miércoles';
    } else if (num == 4){
        document.getElementById('result').innerHTML = 'Es Jueves';
    } else if (num == 5){
        document.getElementById('result').innerHTML = 'Es Viernes';
    } else if (num == 6){
        document.getElementById('result').innerHTML = 'Es Sábado';
    } else if (num == 7){
        document.getElementById('result').innerHTML = 'Es Domingo';
    } else {
        document.getElementById('result').innerHTML = 'No has escojido ninguna opción';
    }
}