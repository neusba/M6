function compruebaLongitud() {
    let word1 = prompt("Introduce una palabra:");
    let word2 = prompt("Introduce una palabra:");

    if (word1.length == word2.length) {
        console.log("Las dos palabras tienen la misma longitud");
        return;
    }
    console.log("No tienen la misma longitud!!!!");
}

function compruebaLetra() {
    let word = prompt("Introduce una palabra:");
    let letter = prompt("Introduce una letra:");
    let contador = 0;

    for (let i=0; i<word.length; i++) {
        if (word.charAt(i) == letter) {
            contador++;
        }
    }
    if (contador > 1 && contador < 5) {
        console.log(`La letra se repite ${contador} veces`);
        return;
    }
    console.log("La letra no se encuentra en la palabra entre 2 y 4 veces");
    let repeticiones = contador == 1 ? " vez" : " veces";
    console.log(`La letra se repite ${contador}${repeticiones}`);
}

function eliminaPosicion() {
    let word = prompt("Introduce un texto:");
    let numero = parseInt(prompt("Introduce una posicion:"));

    let start = word.slice(0, numero);
    let end = word.slice(numero + 1, word.length);
    let newWord = start + end;

    document.write(newWord);
}

function transformaTexto() {
    let word = prompt("Introduce un texto:");
    let vocalesRegular = /[aeiouAEIOUáéíóúàèìòù]/gi;

    document.write(`Texto en mayúsculas: ${word.toUpperCase()}<br>`)
    document.write(`Texto en minúsculas: ${word.toLowerCase()}<br>`);
    document.write(`Longitud: ${word.length}<br>`);
    // Número de palabras
    let numeroPalabras = word.split(" ");
    document.write(`Número de palabras: ${numeroPalabras.length}<br>`);
    document.write(`El número de vocales és: ${word.match(vocalesRegular).length}<br>`);
    document.write("El texto reducido es:<br>");
    for (let i=0; i<word.length; i++) {
        if (word.charAt(i) == " ") {
            document.write("#");
        }
        document.write(`${word.substring(i, word.length)}<br>`);
    }

}

function finDeAnyo() {
    let horaUsuario = prompt("Introduce un hora en formato hh:mm: ").split(":");
    let horas = parseInt(horaUsuario[0]);
    let minutos = parseInt(horaUsuario[1]);
    let difH = 24 - horas;
    let difM = 60 - minutos;
    let horasAMin = difH * 60;
    let total = horasAMin + difM;
    console.log(horasAMin);
    
}