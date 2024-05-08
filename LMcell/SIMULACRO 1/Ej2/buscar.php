<?php
// Configuración de la conexión a la base de datos
$servidor = "localhost";
$usuario = "root";
$password = "";
$base_datos = "libros";

// Crear la conexión
$conexion = new mysqli($servidor, $usuario, $password, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión a MySQL: " . $conexion->connect_error);
}

$genero = $_GET['genero'];
$precio_max = $_GET['precio_max'];


$sql = "SELECT * FROM libros WHERE genero = '$genero'";

if(!empty($precio_max)){
    $sql .= "AND precio <= '$precio_max'";
}

$resultado = $conexion->query($sql);
echo "<a href='index.php'>Volver al inicio</a>";
if ($resultado->num_rows > 0) {
    echo "<h3>Resultados de la Búsqueda:</h3>";
    echo "<ul>";
    for ($i = 0; $i < $resultado->num_rows; $i++) {
        $fila = $resultado->fetch_assoc();
        echo "<li>" . $fila['titulo'] . " " . $fila['genero'] . " " . $fila['precio'] . "</li>";
    }
    echo "</ul>";
} else {
    echo "<h3>No se encontraron productos con ese filtrado</h3>";
}

// Cerrar la conexión
$conexion->close();
?>
