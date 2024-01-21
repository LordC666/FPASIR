function validarCodigoPostal() {
      let codigoPostal = document.getElementById("codigoPostal").value;

      // Verificar que el código postal tiene 5 dígitos
      if (codigoPostal.length !== 5 || isNaN(codigoPostal)) {
        alert("Código Invalido!!");
        return;
      }

      // Verificar las provincias válidas
      let provincia = codigoPostal.slice(0, 2);
      let provinciasValidas = ["01", "11", "17", "28"];
      if (!provinciasValidas.includes(provincia)) {
        alert("Código Invalido!!");
        return;
      }

      // Verificar el rango de códigos válidos
      let codigoNumerico = parseInt(codigoPostal);
      if (codigoNumerico < 1000 || codigoNumerico > 52999) {
        alert("Código Invalido!!");
        return;
      }

      alert("Código Válido");
    }