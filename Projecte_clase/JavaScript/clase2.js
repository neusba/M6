// FUNCIONES JAVASCRIPT

// # console.log("");
// # console.error("");
// # console.warn("");
// # console.clear("");
// # console.time("identificador");
// # console.timeLog("");
// # console.timeEnd("identificador");

function introducirNumero() {
    let numero = prompt("Número:");
    if (numero == "") return
    while (numero < 1 || numero > 10) {
        console.error("Valor fuera de rango");
        numero = prompt("Introduce un valor correcto");
        if (numero == "") return
    }
    multiplica(numero);
}

function multiplica(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(`Taula del ${i}`)
        for (let x = 0; x <= 10; x++) {
            console.log(`${i} x ${x} = ${i*x}`);
        }
    }
}

function fibonacci() {
        const bucle = document.getElementById("number").value;
        let fib = [0, 1];

        for (var i = 2; i <= bucle; i++) {
          console.log(fib[i] = fib[i - 1] + fib[i - 2]);
        }
      }
      
