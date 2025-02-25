function veracidadCedula(cedula) {
    var cedulaArray = cedula.split("");

    // Duplicar los números en los índices impares y sumar sus dígitos
    for (var i = 1; i < cedulaArray.length; i += 2) {
        cedulaArray[i] = cedulaArray[i] * 2;
        if (cedulaArray[i] > 9) {
            cedulaArray[i] = sumarDigitos(cedulaArray[i]);
        }
    }

    // Sumar todos los números
    var suma = 0; 
    for (var i = 0; i < cedulaArray.length; i++) {
        suma += parseInt(cedulaArray[i], 10); // Asegurarse de que se sumen como números
    }

    // Verificar si la suma es divisible por 10
    if (suma % 10 == 0) {
        alert("La cédula es verdadera");
    } else {
        alert("La cédula es falsa");
    }
}

function sumarDigitos(numero) {
    var suma = 0;
    while (numero > 0) {
        suma += numero % 10; // Sumar el último dígito
        numero = Math.floor(numero / 10); // Eliminar el último dígito
    }
    return suma;
}

// Función para manejar el evento de clic
function verificarCedula() {
    var cedula = document.getElementById('cedulaInput').value; 
    veracidadCedula(cedula); 
}