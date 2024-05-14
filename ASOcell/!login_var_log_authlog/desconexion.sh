#!/bin/bash

# Mostrar mensaje inicial
echo "Se va a mostrar la última vez que se han conectado los usuarios:"

# Obtener la lista de usuarios del sistema
users=$(cat /etc/passwd | cut -d ":" -f1)

# Inicializar contador de cierres de conexión
count=0

# Recorrer la lista de usuarios
for user in $users; do
    # Buscar la última desconexión del usuario en auth.log
    last_login=$(grep -E "session closed.*$user" /var/log/auth.log | tail -n 1 | awk '{print $1,$2}')
    if [ -n "$last_login" ]; then
        # Mostrar la última desconexión del usuario
        echo "Usuario: $user Última desconexión: $last_login"
        count=$((count + 1))
    fi
done

# Mostrar el número total de cierres de conexión
echo "Número total de cierres de conexión: $count"
