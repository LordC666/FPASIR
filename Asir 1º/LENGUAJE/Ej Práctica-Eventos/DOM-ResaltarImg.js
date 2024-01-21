function resaltarCasa() {
      // Remover el borde de todas las casas
      let casas = document.getElementsByClassName("casas");
      for (let i = 0; i < casas.length; i++) {
        casas[i].style.border = "none";
      }

      // Agregar el borde rojo a la casa del medio
      let casaDelMedio = document.getElementsByClassName("casas")[1];
      casaDelMedio.style.border = "3px solid red";
    }

    function resaltarPisos() {
      // Agregar el borde azul a todos los pisos
      let pisos = document.getElementsByClassName("pisos");
      for (let i = 0; i < pisos.length; i++) {
        pisos[i].style.border = "3px dashed blue";
      }
    } 