<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More_Less</title>
</head>
<body>
    <header>
        <h2>Mayor o menor</h2>
    </header>
    <p>Introduce un caracter y te diremos si es mayor o menor al siguiente o si es igual</p>
    <form action="more_less.php" method="GET">
        <label for="num1">Primer Carácter</label>
        <input type="number" id="num1" name="num1" required>
        <label for="num2">Segundo Carácter</label>
        <input type="number" id="num2" name="num2" required>
        <input type="submit" value="Comparar">
    </form>        
    
    <p id="result"></p>

<?php

if (isset($_GET['num1']) && isset($_GET['num2'])) {
    comparation();
}

function comparation() {
    $num1 = $_GET['num1'] ;
    $num2 = $_GET['num2'] ;

    if ( $num1 > $num2 ) {
        echo "El número " . $num1 . " es mayor que " . $num2;
    } else if ( $num1 < $num2 ) {
        echo "El número " . $num1 . " es menor que " . $num2;
    } else {
        echo "Los números son iguales";
    }
}

?>


</body>
</html>