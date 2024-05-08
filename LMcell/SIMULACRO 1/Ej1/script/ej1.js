//Creamos la función "impares()"
function impares(){
    //Creamos la variable "num" cuyo valor optenemos del html por el id
    let numb = Number(document.getElementById('num').value);
    //Creamos la variable lista en la cual se almacenará la cadena de números impares
    let list = '';
    let i;
    //Hacemos un bucle el cual se tiene que cumplir que:
    //1 i sea igual a la variable numb
    //2 i mayor o igual a 1
    //3 El valor de i valla disminuyendo
    for (i = numb; i >= 1; i--) {
        //Si la variable i es impar, se añade el valor a la lista mas un espacio
        //En caso contrario, el valor se descarta y no se mete
        if ( i % 2 !==0) {
            list += i + ' ';
        }

    }
    //Cuando el bucle for se rompa, la lista matendrá todos los valores y se meterán en un texto
    //el cual se introducirá en el HTML en el párrafo cuya Id sea 'result'.
    document.getElementById('result').innerHTML = " La lista pedida es: " + list;

}
