function calcularPromedio(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    const promedio = suma / arreglo.length;
    return promedio;
}

const numeros = [1, 2, 3, 4, 5];
const promedio = calcularPromedio(numeros);
console.log(promedio); // 3

// ==================================================
// recibe string y devuelve string en txt
// algoritmo
// Importar el módulo filesystem
// Crear una función que reciba un string y una ruta de archivo
// utlizar fs.writeFile para escribir el string en el archivo
// si hay un error, imprimirlo en consola
// en la función de callback, imprimir un mensaje de éxito o error
// luego fuera de la función, llamar a la función con un string y una ruta de archivo
// ==================================================

const fs = require("fs"); // importar el módulo filesystem de node
const http = require("http"); // importar el módulo http de node

function escribirEnArchivo(stringAEscribir, rutaArchivo) {
    fs.writeFile(rutaArchivo, stringAEscribir, function (error) {
        if (error) {
            console.error(`Error al escribir en archivo: ${error}`);
            return;
        }
        console.log(`El archivo ${rutaArchivo} ha sido escrito correctamente.`);
    });
}

const stringAEscribir = "Hola, soy archivo txt, estás muy guapo Dante.";
const rutaArchivo = "ejemplo.txt";
escribirEnArchivo(stringAEscribir, rutaArchivo);

// ==================================================
// Fibonacci

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6));

// ==================================================
// Crear un servidor que devuelva el archivo index.html
// ==================================================

const filesystem = require("fs"); // importar el módulo filesystem de node

filesystem.readFile("../Lab6/index.html", function (err, html) { // leer el archivo index.html
    if (err) { // si hay un error, imprimirlo en consola
        throw err; // lanzar el error
    }
    const server = http.createServer((request, response) => { // crear el servidor
        console.log(request.url); // imprimir la url en la consola
        response.setHeader("Content-Type", "text/html"); // setear el header de la respuesta
        response.write(html); // escribir la respuesta
        response.end(); // finalizar la respuesta
    });
    server.listen(3000); // escuchar en el puerto 3000
});
