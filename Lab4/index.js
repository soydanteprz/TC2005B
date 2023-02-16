//Ejercicio 1

document.write("<h1><li>Tabla de cuadrados y cubos</li></h1>");
let num = prompt("Introduce un número");
let i = 1;
document.write("<table border='1'>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
while (i <= num) {
    // mientras i sea menor o igual a num
    document.write(
        // mostrar la fila
        "<tr><td>" + // mostrar la celda con el número
            i + // mostrar el número
            "</td><td>" + // mostrar la celda con el cuadrado
            i * i + // mostrar el cuadrado
            "</td><td>" + // mostrar la celda con el cubo
            i * i * i + // mostrar el cubo
            "</td></tr>" // cerrar la fila
    ); // fin del document.write
    i++; // incrementar i
}
document.write("</table>");

//Ejercicio 2

document.write("<h1><li>Suma de números aleatorios</li></h1>");

const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;

// Calcula la suma de los dos números
const suma = num1 + num2;

// Pide al usuario que ingrese la respuesta
const start = Date.now(); // Guarda el tiempo actual
const respuesta = prompt(`¿Cuánto es ${num1} + ${num2}?`); // Pide la respuesta

// Convierte la respuesta del usuario en un número
const respuestaNum = parseFloat(respuesta); // Convierte la respuesta a un número

// Compara la respuesta del usuario con la suma de los dos números
if (respuestaNum === suma) {
    // si la respuesta es correcta
    document.write("¡Correcto! La respuesta es correcta."); // mostrar mensaje
} else {
    // si la respuesta es incorrecta
    document.write("Incorrecto. La respuesta es incorrecta."); // mostrar mensaje
}
document.write("<br><br>");

// Calcula el tiempo que tardó el usuario en responder
const end = Date.now();
const tiempo = (end - start) / 1000;
document.write(`Tardaste ${tiempo} segundos en responder.`);

document.write("<br><br");

//Ejercicio 3

function contador(arreglo) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    for (let i = 0; i < arreglo.length; i++) {
        // recorrer el arreglo
        if (arreglo[i] < 0) {
            // si el elemento es negativo
            negativos++; // incrementar el contador de negativos
        } else if (arreglo[i] === 0) {
            // si el elemento es cero
            ceros++; // incrementar el contador de ceros
        } else {
            // si el elemento es positivo
            positivos++; // incrementar el contador de positivos
        } // fin del if
    } // fin del for
    return [negativos, ceros, positivos]; // retornar el arreglo con los contadores
}

let arreglo = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9,
];
// mostrar el arreglo
document.write("<h1><li>Contador de números</li></h1>");
document.write("<h2>Arreglo</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Índice</th><th>Valor</th></tr>");
for (let i = 0; i < arreglo.length; i++) {
    document.write("<tr><td>" + i + "</td><td>" + arreglo[i] + "</td></tr>");
}
document.write("</table>");
// mostrar el resultado
document.write("<h2>Resultado</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Negativos</th><th>Ceros</th><th>Positivos</th></tr>");
document.write(
    "<tr><td>" +
        contador(arreglo)[0] +
        "</td><td>" +
        contador(arreglo)[1] +
        "</td><td>" +
        contador(arreglo)[2] +
        "</td></tr>"
);
document.write("</table>");

//Ejercicio 4

function promedios(arreglo) {
    let promedios = []; // arreglo para guardar los promedios
    for (let i = 0; i < arreglo.length; i++) {
        // recorrer el arreglo
        let suma = 0; // variable para guardar la suma de los elementos de la fila
        for (let j = 0; j < arreglo[i].length; j++) {
            // recorrer la fila
            suma += arreglo[i][j]; // sumar los elementos de la fila
        }
        promedios.push(suma / arreglo[i].length); // calcular el promedio y agregarlo al arreglo
    }
    return promedios; // retornar el arreglo con los promedios
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
document.write("<h1><li>Promedios de una matriz</li></h1>");
document.write("<h2>Arreglo</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Índice</th><th>Valor</th></tr>");
for (let i = 0; i < arr.length; i++) {
    document.write("<tr><td>" + i + "</td><td>" + arr[i] + "</td></tr>");
}
document.write("</table>");
// mostrar el resultado
document.write("<h2>Resultado</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Promedio</th></tr>");
for (let i = 0; i < promedios(arr).length; i++) {
    document.write("<tr><td>" + promedios(arr)[i] + "</td></tr>");
}
document.write("</table>");

//Ejercicio 5

function inverso(numero) {
    // función que recibe un número y devuelve su inverso
    let numeroInvertido = 0;
    let numeroRestante = numero;

    while (numeroRestante > 0) {
        // mientras el número restante sea mayor a 0
        const digito = numeroRestante % 10; // obtener el último dígito
        numeroInvertido = numeroInvertido * 10 + digito; // agregar el dígito al número invertido
        numeroRestante = Math.floor(numeroRestante / 10); // eliminar el último dígito del número restante
    } // repetir el proceso hasta que el número restante sea 0

    return numeroInvertido; // devolver el número invertido
}

let num30 = 123456789;
document.write("<h1><li>Inverso de un número</li></h1>");
document.write("<h2>Arreglo</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Valor</th></tr>");
document.write("<tr><td>" + num30 + "</td></tr>");
document.write("</table>");

// mostrar el resultado
document.write("<h2>Resultado</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Inverso</th></tr>");
document.write("<tr><td>" + inverso(num30) + "</td></tr>");
document.write("</table>");
