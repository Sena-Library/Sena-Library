import {isUserRegistered} from "./register.js";

function loadBooks() {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    const booksContainerPrincipal = document.getElementById('content_books');
    booksContainerPrincipal.innerHTML = ''; // Limpiar el contenedor antes de agregar contenido nuevo
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
        <img src="${book.img}" alt="${book.tittle}" class="imgBooks">
        <h3>${book.tittle}</h3>
        <p><strong>Autor:</strong> ${book.author}</p>
        <p><strong>Género:</strong> ${book.genre}</p>
        <p><strong>Idioma:</strong> ${book.idiom}</p>
        <p><strong>Precio:</strong> $${book.price}</p>
        <p><strong>Estado:</strong> ${book.state}</p>`;
      
        const btn = document.createElement('button')
        btn.innerText='Comprar'
        btn.classList.add(book.isbn)
      
        const edit = document.createElement('button')
        edit.innerText='Editar'
        edit.classList.add(book.isbn)
        
        booksContainerPrincipal.appendChild(bookElement);
        bookElement.appendChild(btn);
        bookElement.appendChild(edit)
        btn.addEventListener('click',function(){
      
          const isbn = btn.classList.value; // Ajusta esto según cómo almacenes el ISBN en la clase
          const libroSeleccionado = books.find(book => book.isbn === isbn);
        if(isUserRegistered()){
          if (libroSeleccionado) {
            localStorage.setItem('libroSeleccionado', JSON.stringify(libroSeleccionado));
            window.location.href = 'templates/person.html';
        }}else{
          alert("Registrate para comprar")
        }})
      
        edit.addEventListener('click', function() {
          const isbn = edit.classList.value; // Ajusta esto según cómo almacenes el ISBN en la clase
          const libroSeleccionado = books.find(book => book.isbn === isbn);
      
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
   loadBooks()
});
