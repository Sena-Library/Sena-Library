import { books } from './app.js';

document.addEventListener('DOMContentLoaded', function() {
    const gen = document.getElementById('genre');
    const price = document.getElementById('price');
    const des = document.getElementById('description');
    const edi = document.getElementById('edi');
    const btnedit = document.getElementById('saveEdit');

    if (btnedit) {
        btnedit.addEventListener('click', function(event) {
            event.preventDefault();

            // Obtener el libro seleccionado desde localStorage
            const libroSeleccionado = JSON.parse(localStorage.getItem('libroSeleccionado'));

            if (libroSeleccionado) {
                // Actualizar los valores del libro seleccionado
                libroSeleccionado.genre = gen.value;
                libroSeleccionado.price = price.value;
                libroSeleccionado.description = des.value;
                libroSeleccionado.editorial = edi.value;

                // Buscar el índice del libro seleccionado en la lista de libros
                const index = books.findIndex(book => book.isbn === libroSeleccionado.isbn);
                if (index !== -1) {
                    // Actualizar el libro en la lista de libros
                    books[index] = libroSeleccionado;

                    // Guardar la lista de libros actualizada en localStorage
                    localStorage.setItem('libroSeleccionado', JSON.stringify(libroSeleccionado));

                    console.log('Libro actualizado:', libroSeleccionado);

                    window.location.href='../index.html'
                } else {
                    console.error('No se encontró el libro en la lista de libros');
                }
            } else {
                console.error('No se ha seleccionado ningún libro');
            }
        });
    } else {
        console.error('Elemento con ID "saveEdit" no encontrado');
    }
});
