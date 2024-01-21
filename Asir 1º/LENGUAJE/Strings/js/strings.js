/*---EJ1---*/
/*var texto = prompt("Escribe la siguiente cadena: \nDisfruto del día");
var separation = texto.split("").join("-");

document.write(separation);
document.write("<br>")

/*---EJ2---*/

var texto = prompt("Escriba una cadena de texto");
var particion = Math.ceil(texto.length /2);
var contar = texto;
var part1 = texto.substring(0, particion);
var part2 = texto.substring(particion);

if(texto.length % 2 === 0){
  document.write(part1+ "-" +part2);
}

else
  document.write(part1.fontcolor("red") +part2);
