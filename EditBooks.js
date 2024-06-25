import { isUserRegistered } from "./register.js";

function loadBooks() {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    const booksContainerPrincipal = document.getElementById('content_books');
    booksContainerPrincipal.innerHTML = ''; // Limpiar el contenedor antes de agregar contenido nuevo
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        bookElement.innerHTML = `
        <img src="${book.img}" alt="${book.tittle}" class="imgBooks">
        <h3>${book.tittle}</h3>
        <p><strong>Autor:</strong> ${book.author}</p>
        <p><strong>Género:</strong> ${book.genre}</p>
        <p><strong>Idioma:</strong> ${book.idiom}</p>
        <p><strong>Precio:</strong> $${book.price}</p>
        <p><strong>Estado:</strong> ${book.state}</p>
        <p><strong>Stock:</strong> ${book.stock}</p>`;

        const btn = document.createElement('button');
        btn.innerText = 'Comprar';
        btn.classList.add(book.isbn);
        if (btn.classList.contains(book.isbn)) {
          btn.style.backgroundColor = 'rgb(2, 135, 252)';
          btn.style.color = 'white';
          btn.style.padding = '10px 20px';
          btn.style.marginBottom = '10px';
          btn.style.border = 'none';
          btn.style.cursor = 'pointer';
      }
        const edit = document.createElement('button');
        edit.innerText = 'Editar';
        edit.classList.add(book.isbn);
        if (edit.classList.contains(book.isbn)) {
          edit.style.backgroundColor = 'rgb(168, 168, 168)';
          edit.style.color = 'white';
          edit.style.padding = '10px 20px';
          edit.style.marginBottom = '10px';
          edit.style.border = 'none';
          edit.style.cursor = 'pointer';
      }
        booksContainerPrincipal.appendChild(bookElement);
        bookElement.appendChild(btn);
        bookElement.appendChild(edit);

        btn.addEventListener('click', function() {
            const isbn = btn.classList.value; // Obtener el ISBN del libro desde la clase del botón
            let libroSeleccionado = books.find(book => book.isbn === isbn); // Usar let en lugar de const

          
            if (isUserRegistered()) {
                if (libroSeleccionado) {
                    if (libroSeleccionado.stock > 0) {
                        libroSeleccionado.stock--; // Reducir el stock del libro seleccionado
                        localStorage.setItem('libroSeleccionado', JSON.stringify(libroSeleccionado));
                        localStorage.setItem('books', JSON.stringify(books));
                        alert(`¡Compra realizada! ${libroSeleccionado.tittle} añadido al carrito.`);
                        window.location.href = '/templates/person.html';
                    } else {
                        alert(`Lo siento, ${libroSeleccionado.tittle} no está disponible en este momento.`);
                    }
                }
            } else {
                alert("Debes registrarte para hacer una compra");
            }
        });

        edit.addEventListener('click', function() {
            const isbn = edit.classList.value; // Ajusta esto según cómo almacenes el ISBN en la clase
            let libroSeleccionado = books.find(book => book.isbn === isbn); // Usar let en lugar de const

            if (isUserRegistered()) {
                if (libroSeleccionado) {
                    localStorage.setItem('libroSeleccionado', JSON.stringify(libroSeleccionado));
                    window.location.href = 'templates/modify.html'; // Redirigir a la página de edición
                }
            } else {
                alert("Regístrate para Editar");
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
   loadBooks();
});
