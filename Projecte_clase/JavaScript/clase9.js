function endevinaNombre() {
    let numero = parseInt(prompt("Introdueix un nombre entre l'1 i el 100"));
    let intentos = 0;

    while (numero != 10) {
        if (numero == 0) {
            break;
        } else if(numero < 0 || numero > 100) {
            console.log("Número inválido");
            intentos++;
        } else if (numero < 10) {
            console.log("El número secreto es mayor al introducido");
            intentos++;
        } else if (numero > 10) {
            console.log("El número secreto es menor al introducido");
            intentos++;
        }
        numero = parseInt(prompt("Introdueix un nombre entre l'1 i el 100"));
    }

    if (numero == 0) {
        document.write("<h1>GAME OVER</h1>");
    } else if (numero == 10) {
        intentos++;
        document.write(`<b>Lo has adivinado en ${intentos} intentos</b><br>`);
        document.write("<h1>Fin del juego</h1>");
    }
    document.write("Juega de nuevo");
}

function diaMiercoles() {
    let any1 = parseInt(prompt("Introdueix un any entre el 2000 i el 2050"));
    let any2 = parseInt(prompt("Introdueix un any entre el 2000 i el 2050"));

    for (let i=any1; i<=any2; i++) {
        let fecha = new Date(i, 0, 1);
        if (fecha.getDay() == 3) {
            document.write(`El primer año en empezar en miércoles es <b>${i}</b>`);
            return;
        }
    }
    document.write("No hay ningún año dentro de los introducidos en empezar en miércoles");
}

function pentavocalicas() {
    // let vocales = [/[aàá]/gi, /[eéè]/gi, /[iíì]/gi, /[iíì]/gi, /[oóò]/gi, /[uúù]/gi];
    // let vocalesRegular = /[aeiouáéíóúàèìòù]/gi;
    let palabra = prompt("Introduce una palabra ").toLowerCase();
    let vocales = "aeiou";
    let contieneVocal = false;

    let palabraSinAcentos = this.quitarAcentos(palabra);
    for (let i=0; i<palabra.length, i++) {
        
    }

    
}

function quitarAcentos(palabra) {
    return palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}