function fechaActual() {
    const fecha = new Date();   // Fecha de hoy

    // Dia, mes y año
    document.write(`Avui és dia ${fecha.getDate()} del mes ${fecha.getMonth() + 1} de l'any ${fecha.getFullYear()}<br>`);

    // El nombre de setmana actual de l'any
    document.write(`El nombre de setmana actual de l'any es ${numeroDeSetmana()}<br>`);

    // El % de dies transcorreguts de l'any és nn,nn%. No és exacto porque falta tener en cuenta los meses con 31 días hasta día de hoy.
    document.write(`El % de dies transcorreguts de l'any és ${porcentajeAño().toFixed(2)}%<br>`);

    // % de dies que queden en l'any.
    document.write(`El % de dies que queden de l'any ${100 - porcentajeAño()}%<br>`);

    // Ara són les:
    document.write(`Ara són les ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}<br>`);

    // Porcentaje del dia transcorregut.
    document.write(`El % del dia transcorregut es: ${porcentajeDia().toFixed(2)}%<br>`);

    // Porcentaje de dia restante
    document.write(`El % de dia que queda es: ${100 - porcentajeDia()}%<br>`);

    function numeroDeSetmana() {
        const semanasMesActual = Math.floor(fecha.getDate() / 7);
        const semanasAño = (fecha.getMonth() + 1) * 4;
        return semanasAño + semanasMesActual;
    }
    function porcentajeAño() {
        const diasHastaHoy = (fecha.getMonth() * 30) + fecha.getDate();
        return (diasHastaHoy * 100) / 365;
    }
    function porcentajeDia() {
        // Minutos totales en un dia = 1440
        const horasAMinutos = fecha.getHours() * 60;
        const minutos = fecha.getMinutes();
        const segundosAMinutos = fecha.getSeconds() / 60;
        const total = horasAMinutos + minutos + segundosAMinutos;
        return (total * 100) / 1440;
    }

}

function codigoDeBarras() {
    let codigo = prompt("Introduce los número del código de barras");
    let sumaNumeros = 0;

    if (codigo.length <= 13) {                                                          // Número hasta 13, obviando que los negativos no entran
        if (codigo.length < 8) {                                                        // Si es menor que 8, rellenamos los 0 hasta llegar a 8
            while (codigo.length != 8) {    
                codigo = "0" + codigo;
            }
        } else if (codigo.length < 13) {                                                // Si no entra en < 8 y es < 13, rellena hasta llegar a 13
            while (codigo.length != 13) {
                codigo = "0" + codigo;
            }
        }

        // Los números 8 y 13 no necesitan modificacion

        let arrayCodigo = codigo.split("");                                             // Dividimos cada carácter del string de números
        let numeroControl = parseInt(arrayCodigo.pop());                                // Extraemos el último que es el número de control

        arrayCodigo = arrayCodigo.reverse();                                            // Invertimos el array restante
        for (let i=0; i<arrayCodigo.length; i++) {                                      
            parImpar(arrayCodigo[i], i);                                                // Lo pasamos por la función que mira si es par o impar y lo multiplica según sea.
        }

        if ((sumaNumeros + numeroControl) % 10 === 0) {                                 // Comprobamos si la suma de números más el número de control resultan en un número múltiplo de 10
            document.write("El número del código de barras es correcto");
        } else {
            document.write("El número del código de barras es incorrecto");
        }
    } else {
        document.write("El número introducido no es válido");
    }

    // Funciones extras
    function parImpar(numero, posicion) {
        if (posicion % 2 == 0) {
            sumaNumeros = sumaNumeros + (numero * 3);
        } else {
            sumaNumeros = sumaNumeros + (numero * 1);
        }
    }
}
