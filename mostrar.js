
var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));


var nombre1 = userInfo.nombre;
var telefono2 = userInfo.telefono;
var direccion3 = userInfo.direccion;
var contraseña4 = userInfo.contraseña;



// Mostrar los datos en los elementos HTML correspondientes
document.getElementById('span').innerText = nombre1;
document.getElementById('span1').innerText = telefono2;
document.getElementById('span2').innerText = direccion3;
document.getElementById('span3').innerText = contraseña4;


 // Mostrar información del libro seleccionado (código previamente proporcionado)
 const libroInfoDiv = document.getElementById('libro-info');
 const libroSeleccionado = JSON.parse(localStorage.getItem('libroSeleccionado'));

 if (libroSeleccionado) {
     libroInfoDiv.innerHTML = `
         <p>Autor: ${libroSeleccionado.author}</p>
         <p>Título: ${libroSeleccionado.tittle}</p>
         <p>Género: ${libroSeleccionado.genre}</p>
         <img src="../${libroSeleccionado.img}" alt="Imagen del libro" class="img_add">
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

