/*---EJ1---*/
/*
function eraseElement(array) {
  // Muestra el array inicial
  console.log("Array inicial:", array);
  
  // Solicitamos la posición que vamos a eliminar
  let pos = parseInt(prompt("Introduce la posición a eliminar (entre 1 y 10): ")) - 1;
  
  // Guardamos el valor que se eliminará
  let valorBorrado = array[pos];
  
  // Eliminamos el elemento de la posición indicada
  array.splice(pos, 1);
  
  // Desplazamos todos los elementos a la izquierda
  for (let i = pos; i < array.length; i++) {
    array[i-1] = array[i];
  }
  
  // Mostramos el array final y el valor eliminado
  console.log("Array final:", array);
  console.log("Valor eliminado:", valorBorrado);
}

// Creamos un array de 10 posiciones con valores aleatorios entre 1 y 100
let array = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);

// Llamamos a la función para eliminar un elemento
eraseElement(array);
*/

/*---EJ2---*/
/*
function rellenarArray() {
  let array = [];
  for (let i = 0; i < 10; i++) {
    let valor;

    if (i % 2 == 0) { 
    
    // Si la posición es par
      valor = Math.floor(Math.random() * 6 + 14) * 2; // Generamos un valor par entre 14 y 25
    } 

    else { 
    
    // Si la posición es impar
      valor = Math.floor(Math.random() * 6 + 14) * 2 + 1; // Generamos un valor impar entre 14 y 25
    }
    array.push(valor);
  }
  return array;
}

// Ejemplo de uso
let array = rellenarArray();
console.log(array);
*/

/*---EJ3---*/
/*
function unirArraysYEliminarRepetidos(array1, array2) {
  
// Unimos los dos arrays en uno solo
  let arrayUnion = array1.concat(array2); 
  let valoresDeleted = 0;

  for (let i = 0; i < arrayUnion.length; i++) {
    for (let j = i + 1; j < arrayUnion.length; j++) {
      if (arrayUnion[i] === arrayUnion[j]) { 
      // Si encontramos un valor repetido
        
        arrayUnion.splice(j, 1); 
      // Eliminamos el valor repetido del array
        
        j--; 
      // Decrementamos j para evitar saltar valores al eliminarlos
        
        valoresDeleted++; 
      // Incrementamos el contador de valores eliminados
      }
    }
  }

  return { array: arrayUnion, valoresDeleted: valoresDeleted };
}

// Ejemplo de uso
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let resultado = unirArraysYEliminarRepetidos(array1, array2);

console.log(resultado.array);
console.log(`Valores eliminados: ${resultado.valoresEliminados}`);
*/

/*---EJ4---*/

let nombres = [];

while (true) {
  let nombre = prompt("Introduce un nombre (o pulsa cancelar para salir):");
  if (nombre === null) {
    break;
  }
  nombres.push(nombre.toUpperCase());
}

nombres.sort();

let numPalabrasVocal = 0;
for (let nombre of nombres) {
  if (nombre.startsWith("A") || nombre.startsWith("E") || nombre.startsWith("I") || nombre.startsWith("O") || nombre.startsWith("U")) {
    numPalabrasVocal++;
  }
}

console.log("Nombres introducidos:", nombres);
console.log("Número de palabras que empiezan por vocal:", numPalabrasVocal);
