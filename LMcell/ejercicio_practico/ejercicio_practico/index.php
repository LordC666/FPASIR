<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Comida</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <!--Añadimos el documento que contiene la consulta php y lo referenciamos en el formulario
    para que al darle a submit envíe los elementos a dicho documento-->
    <form action="buscar.php" method="POST">
        <label for="tipo">Tipo de Plato:</label>
        <!--Añadimos el elemento required para que sea obligatorio seleccionarlo-->
        <select name="tipo" required>
            <option value="Entrada">Entrada</option>
            <option value="Plato principal">Plato principal</option>
            <option value="Postre">Postre</option>
        </select>
        <br>

        <label for="precio">Precio máximo:</label>
        <input type="number" name="precio" step="0.01">
        <br>

        <label for="calorias">Calorías mínimas:</label>
        <input type="number" name="calorias">
        <br>
        <label for="disponible">Disponible:</label>
        <!--Añadimos el elemento required para que sea obligatorio seleccionarlo-->
        <select name="disponible" required>
            <option value=1>Sí</option>
            <option value=2>No</option>
        </select>
        <br>

        <input type="submit" value="Buscar Comida">
        <!--Añadimos un botón que "reinicie" la selección de elementos en el formulario-->
        <input type="reset" value="Borrar Selección">
    </form>
</body>
</html>
