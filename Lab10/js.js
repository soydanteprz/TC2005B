const filesystem = require("fs"); // importar el módulo filesystem de node
const http = require("http"); // importar el módulo http de node

filesystem.readFile("../Lab5/index.html", function (err, html) {
    // leer el archivo index.html
    if (err) {
        // si hay un error, imprimirlo en consola
        throw err; // lanzar el error
    }
    const server = http.createServer((request, response) => {
        // crear el servidor
        console.log(request.url); // imprimir la url en la consola
        response.setHeader("Content-Type", "text/html"); // setear el header de la respuesta
        if (request.url === "/") {
            // si la url es /
            response.write(html); // escribir el html en la respuesta
        } else if (request.url === "/contacto") {
            // si la url es /contacto
            response.setHeader("Content-Type", "text/html");
            response.write("<!DOCTYPE html>"); // escribir el doctype en la respuesta
            response.write("<html>"); // escribir el html en la respuesta
            response.write('<head><meta charset="utf-8"></head><body>');
            response.write(
                '<p>Enviame un mensaje bro, te contesto lo antes posible.</p><div><a href="https://github.com/soydanteprz" target="_blank" rel="noopener noreferrer"><i>Github</i><br></a><a href="https://www.instagram.com/soydanteprz/" target="_blank" rel="noopener noreferrer"><i>Instagram</i><br></a><a href="https://www.linkedin.com/in/danteperez/" target="_blank" rel="noopener noreferrer"><i>LinkeIn</i></a></div><div class="derechos-de-autor">Creado por Dante Pérez (2022) &#169;</div>'
            );
            response.write("</body></html>"); // escribir el html en la respuesta
            response.end(); // finalizar la respuesta
        } else if (request.url === "/pago" && request.method == "GET") {
            // si la url es /pago
            response.setHeader("Content-Type", "text/html");
            response.write("<!DOCTYPE html>"); // escribir el doctype en la respuesta
            response.write("<html>"); // escribir el html en la respuesta
            response.write('<head><meta charset="utf-8"></head><body>');
            response.write("<h1>Pagame por aqui bro</h1>");
            response.write('<form action="/pago" method="POST">');

            let form = `
            <label for="nombre-tarjeta">Nombre en la Tarjeta:</label>
            <input type="text" id="nombre-tarjeta" name="nombre-tarjeta"><br>

            <label for="numero-tarjeta">Número de Tarjeta:</label>
            <input type="text" id="numero-tarjeta" name="numero-tarjeta"><br>

            <label for="fecha-expiracion">Fecha de Expiración:</label>
            <input type="text" id="fecha-expiracion" name="fecha-expiracion"><br>

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv"><br>

            <label for="monto">Monto a Pagar:</label>
            <input type="text" id="monto" name="monto"><br>

            <input type="submit" value="Pagar">
                `;
            response.write(form);
            response.write("</form>");
            response.write("</body></html>"); // escribir el html en la respuesta
            // response.write(html); // escribir la respuesta
            response.end(); // finalizar la respuesta
        } else if (request.url === "/pago" && request.method == "POST") {
            // recibe los datos del formulario de pago y los imprime en otra pagina

            const datos = [];
            request.on("data", (dato) => {
                datos.push(dato);
            });

            return request.on("end", () => {
                const datos_completos = Buffer.concat(datos).toString();
                console.log(datos_completos);
                response.setHeader("Content-Type", "text/html");
                response.write("<!DOCTYPE html>"); // escribir el doctype en la respuesta
                response.write("<html>"); // escribir el html en la respuesta
                response.write('<head><meta charset="utf-8"></head><body>');
                response.write("<h1>Gracias por tu pago bro</h1>");

                let respuesta = "<ul>"; // esto es para que se vea bonito

                const nombre = datos_completos.split("=")[1].split("&")[0]; // esto es para que se vea bonito
                const numero = datos_completos.split("=")[2].split("&")[0];
                const fecha = datos_completos.split("=")[3].split("&")[0];
                const cvv = datos_completos.split("=")[4].split("&")[0];
                const monto = datos_completos.split("=")[5].split("&")[0];

                respuesta += "<li>Nombre: " + nombre + "</li>"; // concatenar la respuesta
                respuesta += "<li>Numero: " + numero + "</li>"; // concatenar la respuesta
                respuesta += "<li>Fecha: " + fecha + "</li>";
                respuesta += "<li>CVV: " + cvv + "</li>";
                respuesta += "<li>Monto: " + monto + "</li>";

                respuesta += "</ul><br><br>";

                response.write(respuesta);
                response.write("</body></html>"); // escribir el html en la respuesta

                filesystem.appendFile("datos.txt", respuesta, function (err) {
                    // appendFile es para agregar al final del archivo
                    if (err) throw err;
                    console.log("Saved!"); // si no hay error, imprimir en consola
                });
                // response.write(html); // escribir la respuesta
                response.end(); // finalizar la respuesta
            });
        } else {
            response.statusCode = 404;
            response.setHeader("Content-Type", "text/html");
            response.write("<!DOCTYPE html>");
            response.write("<html>");
            response.write('<head><meta charset="utf-8"></head><body>');
            response.write("<h1>Rompiste la matrix hermano</h1>");
            response.write("</body></html>");
            response.end();
        }
    });

    server.listen(3000); // escuchar en el puerto 3000
});
