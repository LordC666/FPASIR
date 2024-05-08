<!-- accedemos navegando a http://localhost/SIMULACRO%201/Ej2/index.php -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscar y Modificar Libros</title>
</head>
<body>
    <h2>Buscar Libros por Género y Precio Máximo</h2>
    <form action="buscar.php" method="GET">
        <!--Añadimos que el género sea obligatorio, mientras que el precio no-->
        Género: <input type="text" name="genero"required><br>
        Precio Máximo: <input type="number" name="precio_max"><br>
        <input type="submit" value="Buscar">
    </form>

    <h2>Modificar Precio de un Libro</h2>
    <form action="modificar.php" method="POST">
        <!--En este caso tiene sentido que poner el título del libro sea obligatorio-->
        Título del Libro: <input type="text" name="titulo" required><br>
        Nuevo Precio: <input type="number" name="nuevo_precio" required><br>
        <input type="submit" value="Modificar Precio">
    </form>
</body>
</html>
