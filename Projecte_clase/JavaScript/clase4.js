// Diferencia con MATH ABS
function calcula() {
    let numero1 = parseInt(prompt("Introduce el primer número"));
    let numero2 = parseInt(prompt("Introduce el segundo número"));

    console.log(numero1 + ' y ' + numero2);

    let diferencia1 = Math.abs(100 - numero1);
    let diferencia2 = Math.abs(100 - numero2);
    
    let resultado = numero1
    if (diferencia1 > diferencia2) {
        resultado = numero2;
    }
    console.log('El més proper eś: ' + resultado);
}


// Objeto DATE 
function calculaHora() {
    let hora = parseInt(prompt("Introduce la hora"));
    let minuto = parseInt(prompt("Introduce los minutos"));
    let segundo = parseInt(prompt("Introduce los segundos"));

    const data = new Date();
    console.log(data);

    data.setHours(hora);
    data.setMinutes(minuto);
    data.setSeconds(segundo);

    console.log(data);
}

// Valoración de una fecha válida
function calculaFecha() {
    let año = parseInt(prompt("Introduce un año"));
    let mes = parseInt(prompt("Introduce un mes"));
    let dia = parseInt(prompt("Introduce un dia"));

    const data = new Date();    // Creamos un objeto de fecha actual
    const dataNew = new Date(año, mes, dia);    // Le asignamos nuestros datos

    // Comprobamos que los valores son válidos
    if (año < 1900 || año > 2099) {
        console.log('El año no es válido');
        return;
    }

    // Verifica si el mes está dentro del rango válido (1-12).
    if (mes < 1 || mes > 12) {
        console.log('El mes no es válido');
        return;
    }

    // Verifica si el día está dentro del rango válido (1-31).
    if (dia < 1 || dia > 31) {
        console.log('El día no es válido');
        return;
    }
    console.log(dataNew + 'es una fecha válida');
}