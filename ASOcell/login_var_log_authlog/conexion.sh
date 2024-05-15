#!/bin/bash

echo "Se va a mostrar la última conexión de los usuarios y en caso de que se esté usando la sesión, también se mostrará"

count=0

users=$(cat /etc/passwd | cut -d ":" -f1)

for user in $users; do
    logIn=$(grep "session opened.*$user" /var/log/auth.log | tail -n 1 | awk '{print $1,$2}')
    if [ -n "$logIn" ]; then
        if who | grep -q "$user"; then
            echo "Usuario: $user está actualmente conectado"
        else 
            echo "Usuario: $user Última conexión: $logIn"
        fi
        count=$(($count + 1))
    fi 
done 

echo "Cuenta de conexiones: $count"
