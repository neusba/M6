// Procesamos la cantidad y el tipo y valoramos
function conversion() {
    const grados = prompt("Introduce el tipo de grado: C o F");
    let cantidad = parseInt(prompt("Introduce la temperatura: "));

    let incognita = 0;

    if (grados == "C" || grados == "c") {
        // Fórmula para calcular a F
        // F = (9.0/5.0) * C + 32
        incognita = cantidad * 9/5 + 32;
    } else if (grados == "F" || grados == "f") {
        // Fórmula para calcular a C
        // C =  (F-32) / (9/5)
        incognita = (cantidad - 32) / (9/5);
    }

    console.log("La conversión es: " + incognita);
}

// Funcion que convierte el número introducido a binario
function binario() {
    const numero = parseInt(prompt("Introduce un número:"));
    let residuos = [];
    let resultadoDivision = numero;
    let residuoActual;

    while (resultadoDivision != 0) {
        residuoActual = resultadoDivision % 2;  // calculo residuo 1 o 0
        resultadoDivision = Math.floor(resultadoDivision / 2);  // cociente
        residuos.push(residuoActual); 
    }

    // Cuando salimos del bucle invertimos el array de binarios para obtener el resultado e imprimimos
    let residuosReverse = residuos.reverse();
    let resultado = "";
    for (let i=0; i<=residuosReverse.length -1; i++) {
        resultado = resultado + residuosReverse[i];
    }

    console.log("El resultado en binario es: " + resultado);
    
}

// Funcion que convierte el número introducido a octal
// Lo mismo pero dividiendo entre 8
function octal() {
    const numero = parseInt((prompt("Introduce un número:")));
    resultado = numero.toString(8);
    console.log("El resultado en octal es: " + resultado);
}

// Funcion que convierte el número introducido a hexadecimal
// Lo mismo pero dividiendo entre 16
function hexodecimal() {
    const numero = parseInt((prompt("Introduce un número:")));
    let hexadecimal = numero.toString(16);

    console.log(hexadecimal); 
}