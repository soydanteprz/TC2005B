// Definición del objeto Libro
function Libro(titulo, autor, anioPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.anioPublicacion = anioPublicacion;
    this.leido = false;
    this.resumen = "";
}

// Métodos del objeto Libro
Libro.prototype.marcarComoLeido = function () {
    this.leido = true;
};

Libro.prototype.marcarComoNoLeido = function () {
    this.leido = false;
};

Libro.prototype.escribirResumen = function (resumen) {
    this.resumen = resumen;
};


// Creación de dos libros
const libro1 = new Libro("El nombre del viento", "Patrick Rothfuss", 2007);
const libro2 = new Libro("1984", "George Orwell", 1949);

// Actualización del estado de lectura
libro1.marcarComoLeido();
libro2.marcarComoNoLeido();
libro2.escribirResumen("Un libro sobre el control de la población.");

// Mostrar resultados en el documento HTML
const libro1Element = document.getElementById("libro1");
libro1Element.textContent = `Título: ${libro1.titulo}, Autor: ${
    libro1.autor
}, Año de publicación: ${libro1.anioPublicacion}, Leído: ${
    libro1.leido ? "Sí" : "No"
}`;

const libro2Element = document.getElementById("libro2");
libro2Element.textContent = `Título: ${libro2.titulo}, Autor: ${
    libro2.autor
}, Año de publicación: ${libro2.anioPublicacion}, Leído: ${
    libro2.leido ? "Sí" : "No"
}, Resumen: ${libro2.resumen}`;
