// Calcula el cost d'una trucada demanant les hores, minuts y segons que ha durat
function calculaCost() {
    const hores = parseInt(prompt("Introdueix les hores que ha durat la trucada"));
    const minuts = parseInt(prompt("Introdueix els minuts que ha durat la trucada"));
    const segons = parseInt(prompt("Introdueix els segons que ha durat la trucada"));

    // Pasem les hores i minuts a segons
    const horesASegons = hores * 3600;  // 1 hora son 3600 segundos
    const minutsASegons = minuts * 60;  // 1 min son 60 segundos

    // Sumem la quantitat total de segons
    const segonsTotals = horesASegons + minutsASegons + segons;
    // Calculem els minuts totals respecte al segons que tenim
    const minutsTotals = segonsTotals / 60;

    const preuMinuts = minutsTotals * 0.05;    // Precio de total de los minutos

    // Precio de la llamada 
    const preuTotalTrucadaEuros = preuMinuts + 0.10;

    console.log('El preu de la trucada es de: ' + preuTotalTrucadaEuros + " €");

}

// Transforma el valor RGB ingressat en un valor hexadecimal
function hexadecimal() {
    let numeroR = parseInt(prompt("Introduce un número entre 0 y 255"));
    let numeroG = parseInt(prompt("Introduce un número entre 0 y 255"));
    let numeroB = parseInt(prompt("Introduce un número entre 0 y 255"));
    const numeros = [numeroR, numeroG, numeroB];

    // Obtenemos el hexadecimal de cada uno
    let hexadecimalR = aHexadecimal(numeroR);
    let hexadecimalG = aHexadecimal(numeroG);
    let hexadecimalB = aHexadecimal(numeroB);

    // Recorremos el array para ir comprobando uno a uno si hace falta modificarlo poniendole un 0 delante
    for (let i=0; i < numeros.length; i++) {
        numeros[i] = dosDigits(numeros[i]);
    }

    console.log(`El resultado de los valores {${numeroR}, ${numeroG}, ${numeroB}} és: #${hexadecimalR}${hexadecimalG}${hexadecimalB}`);
}

function aHexadecimal(numeroRGB) {
    return numeroRGB.toString(16);
}
function dosDigits(numeroRGB) {
    if (numeroRGB == 1) {
        return "0" + numeroRGB;
    }
    return numeroRGB;
}

// Calcula el canvi que hi ha que tornar
function calculaCanvi() {
    let preu = parseFloat(prompt("Introdueix el preu"));
    let lliurat = parseFloat(prompt("Introdueix els diners lliurats"));
    const cash = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.2, 0.1, 0.05, 0.02, 0.01]
    let canviATornar = []; // Serán els bitllets i monedes a tornar
    // Comprovem que el lliurat és suficient
    while (lliurat < preu) {
        lliurat = parseFloat(prompt('Els diners són insuficients'));
    }
    // Canvi a tornar
    let canvi = Math.abs(preu - lliurat);

    // Comenzamos a comprobar los billets y monedas 
    for (let i=0; i<cash.length; i++) {
        let cantidad = canvi / cash.length[i];
        if (cantidad >= 1.0) {
            canviATornar = canviATornar.push(`${parseInt(cantidad)} de ${cash.length}`);
            console.log(canviATornar)
        }
        canvi = canvi - (cantidad * cash.length[i]);    // Resta el cambio que ya ha devuelto
    }

}