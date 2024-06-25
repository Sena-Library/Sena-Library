// EditBooks.js

function updateBookInLocalStorage(updatedBook) {
    let books = JSON.parse(localStorage.getItem('books'));

    if (!books) {
        books = [];
    }

    const index = books.findIndex(book => book.isbn === updatedBook.isbn);

    if (index !== -1) {
        books[index] = updatedBook;
        localStorage.setItem('books', JSON.stringify(books));
        alert('¡Libro actualizado correctamente!');
    } else {
        console.error('No se encontró el libro en el localStorage.');
    }
}

function changes() {
    const libroSeleccionado = JSON.parse(localStorage.getItem('libroSeleccionado'));
    if (libroSeleccionado) {
        document.getElementById('title').value = libroSeleccionado.tittle;
        document.getElementById('author').value = libroSeleccionado.author;
        document.getElementById('genre').value = libroSeleccionado.genre;
        document.getElementById('price').value = libroSeleccionado.price;
        document.getElementById('state').value = libroSeleccionado.state;
        document.getElementById('editorial').value = libroSeleccionado.editorial;
        document.getElementById('stock').value = libroSeleccionado.stock;
       document.getElementById('idiom').value = libroSeleccionado.idiom;




        const saveChangesBtn = document.getElementById('save-changes');
        saveChangesBtn.addEventListener('click', function () {
            const updatedBook = {
                isbn: libroSeleccionado.isbn,
                tittle: document.getElementById('title').value,
                author: document.getElementById('author').value,
                genre: document.getElementById('genre').value,
                price: parseFloat(document.getElementById('price').value),
                state: document.getElementById('state').value,
                img:libroSeleccionado.img,
                stock:document.getElementById('stock').value,
                ubication:libroSeleccionado.ubication,
                publication:libroSeleccionado.publicationDate,
                pages:libroSeleccionado.pages,
                description:libroSeleccionado.description,
                editorial:document.getElementById('editorial').value,
                idiom:document.getElementById('idiom').value,
                format:libroSeleccionado.format



            };

            updateBookInLocalStorage(updatedBook);

            // Redirigir de vuelta a la página principal u otra página de gestión
            window.location.href = '../index.html';

        });
    } else {
        console.error('No se ha seleccionado ningún libro para editar.');
    }
}

document.addEventListener('DOMContentLoaded', changes);
