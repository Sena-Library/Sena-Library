

   


 
let form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const author = document.getElementById('author');
    const tittle = document.getElementById('tittle');
    const gener = document.getElementById('gener');
    const image = document.getElementById('image');
    const lenguague = document.getElementById('lenguague');
    const price = document.getElementById('price');
    const format = document.getElementById('format');
    const isbn = document.getElementById('isbn');
    const description = document.getElementById('description');
    const state = document.getElementById('state');
    const ubication = document.getElementById('ubication');
    const publicate = document.getElementById('publicate');
    const editorial = document.getElementById('editorial');
    const pags = document.getElementById('pags');

    const reader = new FileReader();
    reader.onload = function(e) {
        const nuevoContenido = {
            autor: author.value.trim(),
            titulo: tittle.value.trim(),
            genero: gener.value.trim(),
            imagen: e.target.result,
            lenguaje: lenguague.value.trim(),
            precio: price.value.trim(),
            formato: format.value.trim(),
            isbn: isbn.value.trim(),
            descripcion: description.value.trim(),
            estado: state.value.trim(),
            ubicacion: ubication.value.trim(),
            fechaPublicacion: publicate.value.trim(),
            editorial: editorial.value.trim(),
            paginas: pags.value.trim(),
        };

        if (Object.values(nuevoContenido).every(value => value !== '')) {
            let contenido = JSON.parse(localStorage.getItem('contenido')) || [];
            contenido.push(nuevoContenido);
            localStorage.setItem('contenido', JSON.stringify(contenido));
            form.reset();
            console.log('Contenido agregado correctamente');
            mostrarContenido();
        } else {
            console.error('Error: El campo de contenido está vacío');
        }
    };

    if (image.files.length > 0) {
        reader.readAsDataURL(image.files[0]);
    } else {
        console.error('Error: No se ha seleccionado ninguna imagen');
    }
});

 function mostrarContenido() {
    const contenido = JSON.parse(localStorage.getItem('contenido')) || [];
    const contenidoList = document.getElementById('contenido-list');
    contenidoList.innerHTML = '';

    if (contenido.length > 0) {
        const ul = document.createElement('section');
        ul.classList.add('sectionBooksAdd')
        contenido.forEach((obj) => {
            const listItem = document.createElement('div');
            listItem.classList.add('DivBooksAdd')
            listItem.innerHTML = `

                <img src="${obj.imagen}" alt="Imagen de ${obj.titulo}" class="imagenBookAdd">
                <p><strong>Titulo:</strong> ${obj.titulo}</p>
               <p><strong>Autor:</strong> ${obj.autor}</p>
                <p><strong>Genero:</strong> ${obj.genero}</p>
               <p><strong>Lenguaje:</strong> ${obj.lenguaje}</p>
                <p><strong>Precio:</strong> ${obj.precio}</p>
                <p><strong>Paginas:</strong> ${obj.paginas}</p>
                <p><strong>Isbn:</strong> ${obj.isbn}</p>
                <p><strong>Formato:</strong> ${obj.formato}</p>
               <p><strong>Descripcion:</strong> ${obj.descripcion}</p>
                <p><strong>Fecha de publicacion:</strong> ${obj.fechaPublicacion}</p>
                <p><strong>Estado:</strong> ${obj.estado}</p>
                <p><strong>Editorial:</strong> ${obj.editorial}</p>
                <p><strong>Ubicacion:</strong> ${obj.ubicacion}</p>

            `;
            ul.appendChild(listItem);
        });
        contenidoList.appendChild(ul);
    } else {
        contenidoList.textContent = 'No hay contenido almacenado.';
    }
}
document.addEventListener('DOMContentLoaded', mostrarContenido);

