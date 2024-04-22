<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positive_Negative</title>
</head>
<body>
    <header>
        <h2>Positivo o Negativo</h2>
    </header>
    
    <p>Introduce un número y te diremos si es positivo, negativo o 0.</p>

    <form action="" method="GET">
        <label for="num">Introduzza un número</label>
        <input type="number" id="num" name="num" required>
        <input type="submit" value="Comprobar">
    </form>

    <p id="result"></p>
    
<?php

if (isset($_GET['num'])) {
    research();
}

function research() {
    $num = $_GET['num'];

    if ($num < 0){
        echo "El número es negativo...";
    } else if ($num > 0) {
        echo "El número es positivo...";
    } else {
        echo "El número es cero!!!";
    }

}

?>

</body>
</html>