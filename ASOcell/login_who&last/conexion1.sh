#!/bin/bash

echo "Se va a mostrar la última conexión de los usuarios, y en caso de que uno siga conectado, se mostrará"

count=0


users=$(who | cut -d ' ' -f1)

for user in $users; do
    login=$(last -n 1 $user)
    
    if echo "$login" | grep -E 'still logged in'; then
        echo "El usuario $user sigue conectado"
    else
        last_login=$(echo "$login" | awk '{print $3,$4,$5,$6}')
        echo "Usuario $user - Última conexión: $last_login"
    fi
    
    count=$((count + 1))
done

echo "Contador de conexiones: $count"