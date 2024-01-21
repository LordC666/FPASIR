/*let num1=parseInt(prompt("Introduzca su nota"));

if (num1>=5){
 document.write(`Has aprobado`)
 alert(`Has aprobado`)
} else {
	document.write(`Has reprobado`)
	alert(`Has reprobado`)
}
*/
/*
var x;
  x=0;
  while (x<=10)
  {
    document.write(x);
    document.write('<br>');
    x=x+2;
  }
*/
/*
var num1=parseInt(prompt("numero1"));
var num2=parseInt(prompt("numero2"));

if (num1 < num2){
	document.write(`${num1} es menor que ${num2}`)
}else if (num1 > num2){
	document.write(`${num2} es menor que ${num1}`)

}else {
    document.write(`${num1} es igual que ${num2}`)
} 
*/
/*
var num1=parseInt(prompt("Rango Inf"));
var num2=parseInt(prompt("Rango Sup"));

if (num1 > num2){
	document.write(`‘Error, el inferior es mayor que el 
superior.`)
}else if (num1 > num2){
	document.write(`${num2} es menor que ${num1}`)

}else {
    document.write(`${num1} es igual que ${num2}`)
} 
*/

let cadena=`vamos a jugar con l@s cadenas de texto`;

document.write(`Mi cadena es: `+cadena+`<br>`); 
document.write(`Mi longitud: `+cadena.length+`<br>`);
document.write(`Empiezo por: `+cadena.charAt(0)+`<br>`);
document.write(`y termino en:`+cadena.charAt(37)+`<br>`);
document.write(`Si quieres saber más de mi contengo un: `+cadena.charCodeAt(19)+` <br>`);
document.write(`...venga vamos, es que necesitas verlo mas claro!?: `+cadena.charAt(19)+` <br>`);

