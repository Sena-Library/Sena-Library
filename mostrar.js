document.addEventListener('DOMContentLoaded', function() {
    const libroInfoDiv = document.getElementById('libro-info');
    const libroSeleccionado = JSON.parse(localStorage.getItem('libroSeleccionado'));

    if (libroSeleccionado) {
      libroInfoDiv.innerHTML = `
        <p>Autor: ${libroSeleccionado.author}</p>
        <p>Título: ${libroSeleccionado.tittle}</p>
        <p>Género: ${libroSeleccionado.genre}</p>
        <p>Imagen: <img src="../${libroSeleccionado.img}" alt="Imagen del libro"></p>
        <p>Lenguaje: ${libroSeleccionado.idiom}</p>
        <p>Precio: ${libroSeleccionado.price}$</p>
        <p>Formato: ${libroSeleccionado.format}</p>
        <p>ISBN: ${libroSeleccionado.isbn}</p>
        <p>Descripción: ${libroSeleccionado.description}</p>
        <p>Estado: ${libroSeleccionado.state}</p>
        <p>Ubicación: ${libroSeleccionado.ubication}</p>
        <p>Fecha de Publicación: ${libroSeleccionado.publicationDate}</p>
        <p>Editorial: ${libroSeleccionado.editorial}</p>
        <p>Páginas: ${libroSeleccionado.pages}</p>
         <p>Stock: ${libroSeleccionado.stock}</p>
      `;
    } else {
      libroInfoDiv.innerHTML = '<p>No se ha seleccionado ningún libro.</p>';
    }
  });