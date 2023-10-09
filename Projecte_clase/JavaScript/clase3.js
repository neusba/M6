function calculaPotencia() {
    // Obtenemos los valores introducidos           
    let base = prompt("Introduce la base: ")
    let exponente = prompt("Introduce el exponente: ")

    // Tomamos el tiempo de la potencia
    console.time('Temporadizador');
    let resultado = Math.pow(base, exponente);
    console.timeEnd('Temporadizador');
    console.log(resultado);

    // Calculamos el tiempo del bucle
    let resultadoBucle = base;
    console.time('Temporadizador bucle');
    for (let i=1; i <= exponente; i++) {
        resultadoBucle = resultadoBucle * base;
        console.log(resultadoBucle);
    }
    console.timeEnd('Temporadizador bucle');

}

function calculaNumeros() {
    let uno = parseFloat(prompt("Introduce el primer número: "));
    let dos = parseFloat(prompt("Introduce el segundo número: "));
    let tres = parseFloat(prompt("Introduce el tercer número: "));

    let numeros = [uno, dos, tres];
    numeros.sort();

    console.log('El número menor dels introduïts és: ' + numeros[0]);
    console.log('El número major dels introduïts és: ' + numeros[numeros.length - 1]);
    console.log('El número del mig dels introduïts és: ' + numeros.length / 2);
    

    // Mediana total de los números
    let totalArray = 0;
    for (let i=0; i<=numeros.length - 1; i++) {
        totalArray = totalArray + numeros[i];
    }
    console.log('La media de los números introducidos es: ' + Math.round(totalArray / numeros.length));
}