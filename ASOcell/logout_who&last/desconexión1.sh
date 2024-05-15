#!/bin/bash

echo "Se va a mostrar la última desconexión de los usuarios"

count=0

# Obtener la lista de usuarios actualmente conectados
users=$(who | cut -d ' ' -f1 | sort | uniq)

for user in $users; do
    # Obtener la última desconexión del usuario
    last_logout=$(last $user | grep 'down' | awk '{print $5, $6, $7, $8, $9}' | head -n 1)
    
    if [ -n "$last_logout" ]; then
        count=$((count + 1))
        echo "Usuario $user - Última desconexión: $last_logout"
    else
        echo "No se han encontrado resultados para el usuario $user"
    fi
done

echo "Conteo de últimas desconexiones: $count"
