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

$titulo = $_POST['titulo'];
$nuevo_precio = $_POST['nuevo_precio'];


$sql_verificar = "SELECT * FROM libros WHERE titulo = '$titulo'";
$resultado_verificar = $conexion->query($sql_verificar);

if ($resultado_verificar->num_rows === 0) {
    echo "El libro '$titulo' no existe en la base de datos.";
    echo "<a href='index.php'>Volver al inicio</a>";
} else { 
    $sql_modificar = "UPDATE libros SET precio = '$nuevo_precio' WHERE titulo = '$titulo'";
    $resultado_modificar = $conexion->query($sql_modificar);
    
    if ($resultado_modificar === TRUE) { 
        echo "Has cambiado el precio del libro '$titulo'";
        echo "<a href='index.php'>Volver al inicio</a>";
    } else {
        echo "Error al cambiar el precio del libro: " . $conexion->error;
    }
}
// Cerrar la conexión
$conexion->close();
?>
