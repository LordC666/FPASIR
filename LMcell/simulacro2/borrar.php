<?php
// Configuración de la conexión a la base de datos
$servidor = "localhost";
$usuario = "root";
$password = "";
$base_datos = "libreria";

// Crear la conexión
$conexion = new mysqli($servidor, $usuario, $password, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión a MySQL: " . $conexion->connect_error);
}
//Recojemos el valor de la variable por el método GET del formulario
$title = $_GET['titulo'];

//Hacemos una consulta para ver que existe el título del libro que hemos introducido
//El resultado se almacenará en la variable "$sql_verificar"
$sql_verificar = "SELECT * FROM libros WHERE titulo = '$title'";
$resultado_verificar = $conexion->query($sql_verificar);

// Si no sale ningún resultado saltará un mensaje el cual indica que dicho libro no existe
if ($resultado_verificar->num_rows === 0) {

    echo "¡El libro \"$title\" puede que no exista en la BBDD!";
    echo "<a href='index.php'>Volver al inicio</a>";

// Si existe, elimina dicho libro de la base de datos 
} else { 
$sql_modificar = "DELETE FROM libros WHERE titulo = '$title'";

// Tras esto, salta un mensaje que te dice que se ha realizado con éxito
if ($conexion->query($sql_modificar) === TRUE) {
    echo "¡El libro \"$title\" ha sido borrado correctamente!";
    echo "<a href='index.php'>Volver al inicio</a>";
} else {
    echo "Error al borrar el libro: " . $conexion->error;
    echo "<a href='index.php'>Volver al inicio</a>";
}
}


$conexion->close();
?>
