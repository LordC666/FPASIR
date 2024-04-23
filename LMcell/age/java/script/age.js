function age() {
    
    let age = Number(document.getElementById('num').value);

    if (age >= 0 && age <= 10) {
        document.getElementById('result').innerHTML = "Eres un niño";
    } else if (age >=11 && age <= 17) {
        document.getElementById('result').innerHTML = "Eres un adolescente";
    } else if (age >= 18 && age <= 29) {
        document.getElementById('result').innerHTML = "Eres un adulto";
    } else if (age >= 30 && age <= 99) {
        document.getElementById('result').innerHTML = "Eres un adulto mayor";
    } else {
        document.getElementById('result').innerHTML = "Venga chaval, que no me chupo el dedo";
    }
}