function crearTablaDinamica() {
    let filas = prompt("Introduce el número de filas que quieres usar");
    let columnas = prompt("Introduce el número de filas que quieres usar");

    let tabla = document.createElement("table");
    tabla.id = "tabla";
    tabla.style.border = "1px solid black";
    
    for (let i=1; i<=filas; i++) {
        let fila = document.createElement("tr");
        for (let j=1; j<=columnas; j++) {
            let data = document.createElement("td");
            data.style.border = "1px solid black";
            let texto = document.createTextNode(`${i}.${j}`);
            data.appendChild(texto);        
            fila.appendChild(data);
        }
        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);


}

function crearTablaMultiplicacion() {
    let filas = prompt("Introduce el número de filas que quieres usar");
    let columnas = prompt("Introduce el número de filas que quieres usar");

    let tabla = document.createElement("table");
    tabla.id = "tabla";
    
    for (let i=1; i<=filas; i++) {
        let fila = document.createElement("tr");
        for (let j=1; j<=columnas; j++) {
            let data = document.createElement("td");
            data.id = "td";
            data.style.border = "1px solid black";
            let texto = document.createTextNode(i * j);
            data.appendChild(texto);        
            fila.appendChild(data);
        }
        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
}

function crearPiramide() {
    let columnas = prompt("Introduce el número de columnas que quieres usar");
    let filas = (columnas / 2) + 1;

    let tabla = document.createElement("table");
    for (let i=1; i<=filas; i++) {
        let fila = document.createElement("tr");
        for (let j=1; j<=columnas; j++) {
            if (j > (columnas/2) - i + 1 & j < (columnas/2) + i) {
                let dataRojo = document.    createElement("td");
                dataRojo.style.border = "1px solid black";
                dataRojo.id = "tdRojo";
                fila.appendChild(dataRojo);
            } else { 
                let dataBlanco = document.createElement("td");
                dataBlanco.style.border = "1px solid black";
                dataBlanco.id = "tdBlanco";
                fila.appendChild(dataBlanco);
            }
        }
        tabla.appendChild(fila);
    }
    for (let i=filas; i>=1; i--) {
        let fila = document.createElement("tr");
        for (let j=1; j<=columnas; j++) {
            if (j > (columnas/2) - i +1 & j < (columnas/2) + i) {
                let dataRojo = document.    createElement("td");
                dataRojo.style.border = "1px solid black";
                dataRojo.id = "tdRojo";
                fila.appendChild(dataRojo);
            } else { 
                let dataBlanco = document.createElement("td");
                dataBlanco.style.border = "1px solid black";
                dataBlanco.id = "tdBlanco";
                fila.appendChild(dataBlanco);
            }
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}

function imprimeExtension() {
    arxiu = prompt("Diga'm el nom d'un arxiu amb la seva extensió");
    arrayArxiu = arxiu.split(".");

    console.log(`L'extensió del teu arxiu és: ${arrayArxiu[arrayArxiu.length-1]}`);
}
function cuentaAiB() {
    palabra = prompt("Introduce una palabra:").toLowerCase();
    let a = 0;
    let b = 0;

    for (let i=0; i<palabra.length; i++) {
        if (palabra.charAt(i) === "a") {
            a++;
        } else if (palabra.charAt(i) == "b") {
            b++;
        }
    }
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
}