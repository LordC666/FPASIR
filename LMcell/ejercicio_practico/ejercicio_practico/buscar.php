<?php

$conexion = new mysqli("localhost", "root", "", "restaurante");


if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}
//Recojemos los varoles de las variables del documento index y los almacenamos.
$tipo = $_POST['tipo'];
$precio = $_POST['precio'];
$calorias = $_POST['calorias'];
$disponible = $_POST['disponible'];


$sql = "SELECT * FROM comida WHERE tipo_plato = '$tipo' AND disponible = '$disponible' ";


if (!empty($precio)){
    $sql .= "AND precio <= '$precio'";
}

if (!empty($calorias)){
    $sql .= "AND calorias >= '$calorias'";
}

$resultado = $conexion->query($sql);

if ($resultado === false) {
    die("Error al ejecutar la consulta: " . $conexion->error);
}


if ($resultado->num_rows > 0) {
    echo "<h2>Comida Disponible</h2>";
    echo "<ul>";
    while ($row = $resultado->fetch_assoc()) {
       echo "<li> Nombre: " . $row['nombre_plato'] . "</li>";
       echo "<li> Tipo: " . $row['tipo_plato'] . "</li>";
       echo "<li> Calorías: " . $row['calorias'] . "</li>";
       echo "<li> Disponible: " . $row['disponible'] . "</li>";
       echo "<br>";
    }
    echo "</ul>";
    echo "<br>";
    echo "<a href='index.php'>Volver a la página de inicio</a>";
} else {
    echo "No se encontraron resultados.";
    echo "<br>";
    echo "<a href='index.php'>Volver a la página de inicio</a>";
}



$conexion->close();
?>
