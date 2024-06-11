let books = [
    {tittle: 'EL MAS LISTO', author: 'Mario Ramos', genre: 'Infantil', idiom: 'Castellano', price: 78000 , format: 'Sin formato definido', isbn: '9788484704447', description: '¡Yo soy el lobo feroz! -¡Soy el más listo! Hoy será día de festín- ríe maliciosamente el lobo. De menú: Abuelita. Y pequeña frambuesa, de postre. Al llegar a casa de la abuelita, el lobo llama a la puerta: toc, toc, toc. No hay nadie. Solamente un camisón de dormir sobre la cama. El lobo se lo pone y sale para borrar sus huellas delante de la casa. ¡Plam! Una corriente de aire cierra la puerta. El lobo, sorprendido, corre a esconderse en el bosque disfrazado de abuelita...', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '01/04/2012', editorial: 'Editorial Corimbo S.L.', pages: '48'},

    {tittle: 'HABITOS ATOMICOS', author: 'James Clear', genre: 'Autoayuda', idiom: 'Castellano', price: 79000 , format: 'Sin formato definido', isbn: '9789584277954', description: '“Hábitos Atómicos” es un libro escrito por James Clear, un experto en formación de hábitos y autor del bestseller número 1 del New York Times. En este libro, Clear explora cómo los hábitos pueden ser el secreto para lograr el éxito y mejorar nuestra vida en general.', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '08/09/2020', editorial: 'PAIDOS', pages: '323'},
    
    {tittle: 'El Club de Las 5 de la Mañana', author: 'Robin Sharma', genre: 'Autoayuda', idiom: 'Castellano', price: 45.000, format: 'Pasta blanda', isbn: '9789585464421', description: 'El Club de las 5 de la mañana es la innovadora e increíble historia de dos personas que desean mejorar la productividad, la prosperidad y la serenidad en esta época de distracciones digitales y de abrumadora complejidad, y conocen a un magnate extraño pero fantástico.', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '14/07/2021', editorial: 'GRIJALBO', pages: '400 páginas'},
    
    {tittle: 'Leer es Resistir', author: 'Mario Mendoza ', genre: 'Historia', idiom: 'Castellano', price: 41300, format: 'Tapa Dura', isbn: '9786280004013', description: 'A los siete años, mientras le hacía el quite a la muerte en una cama de hospital, Mario Mendoza descubrió los libros y su potencia liberadora con un ejemplar de Cuentos de hadas franceses. En ese momento se volvió lector e inició una amistad inquebrantable con aquellos objetos.', state: 'No disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '17 Abril 2023', editorial: 'Planeta Colombia', pages: '350'},
    
    {tittle: 'Violeta', author: 'Isabel Allende', genre: 'Ficción', idiom: 'Ingles', price: 59000, format: 'Sin formato definido', isbn: '9786287611184', description: 'Violeta comes into the world on a stormy day in 1920, the first girl in a family with five boisterous sons. From the start, her life is marked by extraordinary events, for the ripples of the Great War are still being felt, even as the Spanish flu arrives on the shores of her South American homeland almost at the moment of her birth.', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '25/01/2022', editorial: 'Ballantine Books', pages: '336 páginas'},
    
    {tittle: 'Practicando el poder del ahora', author: 'Eckhart Tolle', genre: 'Autoayuda', idiom: 'Castellano', price: 51000, format: 'Tapa blanda', isbn: '9788484452744', description: 'En muy poco tiempo, EL PODER DEL AHORA ha demostrado ser uno de los grandes libros espirituales de los últimos tiempos. Contiene un poder que va más allá de las palabras y puede conducirnos a un lugar mucho más sereno allende nuestros pensamientos, un lugar donde desaparecen los problemas mentales que nosotros mismos hemos creado y donde descubrimos lo que significa realmente crear una vida liberada.', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '15/07/2009', editorial: 'Gaia Ediciones', pages: '156'},
    
    {tittle: 'Como', author: 'Carlos Jaramillo', genre: 'Salud', idiom: 'Castellano', price: 75000, format: 'Sin formato definido', isbn: '9789584297464', description: 'COMO es una guía clara y completa para que el alimento se convierta en tu mejor medicina, porque la decisión de comer sano no es tan complicada y cara como te imaginas. De la mano del Dr. Jaramillo ?médico funcional, experto en metabolismo, nutrición y bioquímica?, podrás entender cómo equilibrar tu dieta, leer etiquetas para elegir mejor los alimentos, ayunar sin temores, desinflamar tu cuerpo', state: '', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '08/06/2022', editorial: 'Planeta Colombia', pages: '640'},
    
    {tittle: 'El milagro metabolico', author: 'Carlos Jaramillo', genre: 'Salud', idiom: 'Castellano', price: 43699, format: 'Tapa blanda', isbn: '9788411190312', description: 'A todos nos gusta comer. Pero algo estamos haciendo mal, y cada día peor. Confundidos por la industria alimentaria, la publicidad, las fake news gastronómicas y los consejos nutricionales de familiares bienintencionados, con cada bocado tomamos decisiones nefastas que nos enferman, nos engordan y nos roban energía. ¿Cómo detener esta espiral? ¿A quién creer y a quién no? ¿Cómo cambiar de hábitos sin volvernos rígidos y aburridos?', state: 'Disponible', ubication: 'España', publicationDate: '07/09/2022', editorial: 'Booket', pages: '320'},
    
    {tittle: 'Cómo hacer que te pasen cosas buenas', author: 'Marian Rojas', genre: 'Autoayuda', idiom: 'Castellano', price: 80749, format: 'Tapa blanda', isbn: '9788467053302', description: 'Uniendo el punto de vista científico, psicológico y humano, la autora nos ofrece una reflexión profunda, salpicada de útiles consejos y con vocación eminentemente didáctica, acerca de la aplicación de nuestras propias capacidades al empeño de procurarnos una existencia plena y feliz: conocer y optimizar determinadas zonas del cerebro, fijar metas y objetivos en la vida, ejercitar la voluntad, poner en marcha la inteligencia emocional, desarrollar la asertividad, evitar el exceso de autocrítica y autoexigencia, reivindicar el papel del optimismo…', state: 'Disponible', ubication: 'España', publicationDate: '09/10/2018', editorial: 'Espasa', pages: '232'},
    
    {tittle: ' El infinito en un junco', author: 'Irene Vallejo', genre: 'Filología', idiom: 'Castellano', price: 140000, format: 'Tapa blanda', isbn: '9788417860790', description: 'Este  es un libro sobre la historia de los libros. Un recorrido por la vida  de ese fascinante artefacto que inventamos para que las palabras  pudieran viajar en el espacio y en el tiempo. La historia de su  fabricación, de todos los tipos que hemos ensayado a lo largo de casi  treinta siglos: libros de humo, de piedra, de arcilla, de juncos, de  seda, de piel, de árboles y, los últimos llegados, de plástico y luz.', state: 'No disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '10/10/2023', editorial: 'Siruela', pages: '452'},
    
    {tittle: 'Los cuatro acuerdos', author: 'Miguel Ruiz', genre: 'Autoayuda', idiom: 'Castellano', price: 43699, format: 'Sin formato definido', isbn: '9788479532536', description: 'El conocimiento tolteca surge de la misma unidad esencial de la verdad de la que parten todas las tradiciones esotéricas sagradas del mundo. Aunque no es una religión, respeta a todos los maestros espirituales que han enseñado en la tierra, y si bien abraza el espíritu, resulta más preciso describirlo como una manera de vivir que se distingue por su fácil acceso a la felicidad y el amor.', state: 'Disponible', ubication: 'España', publicationDate: '23/10/1998', editorial: 'Urano', pages: '160'},
    
    {tittle: 'Una vida, muchas vidas', author: 'Gustavo Petro', genre: 'Historia', idiom: 'Castellano', price: 33.155, format: 'Sin formato definido', isbn: '9789584297495', description: 'La vida de Gustavo Petro no es tan conocida a pesar de que su participación en la vida pública del país ha sido destacada como representante a la Cámara, Senador de la República y Alcalde de Bogotá. Poco se sabe de sus primeros años, cuando sus padres se conocieron en la Bogotá de finales de los años cincuenta y la parábola de una vida que comenzó en su natal Ciénaga de Oro, en el barrio Las Cruces, o en Zipaquirá, su municipio de crianza donde estudió en el mismo colegio de su escritor más admirado, Gabriel García Márquez.', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '27/09/2021', editorial: 'Planeta Colombia', pages: '340'},
    
    {tittle: 'Boulevard', author: 'Flor Salvador', genre: 'Juvenil', idiom: 'Castellano', price:75999, format: 'Tapa blanda', isbn: '9788419169181', description: 'Luke Howland, lleno de problemas y sumido en una desesperación profunda,  y Hasley Weigel, tan despistada como optimista, no se ajustan al prototipo de pareja perfecta.', state: 'Disponible', ubication: 'España', publicationDate: '24/02/2022', editorial: 'MONTENA', pages: '360'},
    
    {tittle: 'Antes de diciembre', author: 'Joana Marcus', genre: 'Juvenil', idiom: 'Castellano', price: 52249, format: 'Tapa blanda', isbn: '9788413145204', description: 'Una historia de amor y pasión con una cuenta atrás. Todo acabará Antes de diciembre. ', state: 'No disponible', ubication: 'España', publicationDate: '11/11/2021', editorial: 'MONTENA', pages: '689'},
    
    {tittle: 'Harry Potter y la piedra filosofal', author: 'J.K. Rowlling', genre: 'Fantasía', idiom: 'Castellano', price: 159000, format: 'Tapa dura', isbn: '9788498387070', description: 'La vida de Harry Potter cambia para siempre el día que cumple once años,  cuando el gigante de ojos negros y brillantes Rubeus Hagrid le entrega  una carta y le revela noticias asombrosas: Harry Potter no es un chico  normal y corriente, es un mago. Está a punto de comenzar una aventura extraordinaria...', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '03/01/1999', editorial: 'Salamandra', pages: '254 páginas'},
    
    {tittle: 'Salvo mi corazón, todo está bien', author: 'Héctor Abad Faciolince', genre: 'Novela contemporánea', idiom: 'Castellano', price: 80.749 , format: 'Sin formato definido', isbn: '9788420461854', description: 'El sacerdote Luis Córdoba está a la espera de un trasplante de corazón. Es un cura amable, alto, gordo, pero su mismo tamaño hace que no sea fácil encontrar un donante. Como los medicos le aconsejan reposo y su residencia tiene muchas escaleras, recibe hospedaje en una casa donde viven dos mujeres, una de ellas recien separada, y tres niños. Córdoba, que es bueno y culto -crítico de cine y experto en ópera-, goza compartiendo lo que sabe con las mujeres sin esposo y los niños sin padre. Pronto se ve envuelto y fascinado por la vida familiar y, sin pretenderlo, empieza a desempeñar el papel de paterfamilias y a replantearse sus opciones de vida.', state: 'Disponible', ubication: 'España', publicationDate: '01/10/2022', editorial: 'ALFAGUARA', pages: '357'},
    
    {tittle: 'Narraciones extraordinarias', author: 'Edgar Allan Poe', genre: 'terror', idiom: 'Castellano', price: 34900, format: 'Tapa Dura', isbn: '9788416775873', description: 'Es conocido, y no por ello deja de ser curioso, que Edgar Allan Poe temía a la oscuridad, y que este miedo le impedía dormir por las noches, y que su compañera debía quedarse durante horas a su lado agarrándole la mano, hasta que por fin lograba conciliar el sueño. Sus fantasmas le hicieron caer una y otra vez a lo largo de su corta vida –apenas cuarenta años- en el abuso del opio y el alcohol, lo que para unos biógrafos suponía una forma de aliviar su angustia vital e irse destruyendo en vida poco a poco, y para otros sólo una forma de poder llegar hasta los últimos límites del misterio y la imaginación, hasta el borde del tenebroso abismo para seleccionar allí las escalofriantes escenas y los tortuosos personajes que iluminarían su magistral obra. Nadie ha sido capaz de hacer esto como Poe; el nivel literario que logró alcanzar en su campo no ha podido ser igualado. Su legado es inmensamente rico, lleno de matices, y una buena muestra del mismo se ha seleccionado, con cariño y devoción, en este libro.', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '01/12/2018', editorial: 'Editorial Alma', pages: '560 páginas'},
    
    {tittle: 'El Principito', author: 'Antoine de Saint Exupéry', genre: 'Infantil', idiom: 'Castellano', price: 135000, format: 'Tapa blanda', isbn: '978-8498381498', description: 'Autorretrato y obra testamentaria, fábula mítica y relato filosófico que interroga acerca de la relación del ser humano con su prójimo y con el mundo, El Principito concentra, con maravillosa simplicidad, la larga y constante reflexión de Saint-Exupéry sobre la amistad, el amor, la responsabilidad y el sentido de la vida, en un contexto marcado por el conflicto mundial y el desasosiego de un escritor piloto profundamente afectado por su soledad.', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '01/06/2016', editorial: 'Salamandra', pages: '96 páginas'},
    
    {tittle: 'Roma soy yo', author: 'Santiago Posteguillo', genre: 'Historia', idiom: 'Castellano', price: 61749, format: 'Tapa blanda', isbn: '9788413149288', description: 'Roma, año 77 a.C. El cruel senador Dolabela va a ser juzgado por corrupción, pero ha contratado a los mejores abogados, ha comprado al jurado y, además, es conocido por usar la violencia contra todos los que se enfrentan a él. Nadie se atreve a ser el fiscal, hasta que de pronto, contra todo pronóstico, un joven patricio de tan solo veintitrés años acepta llevar la acusación, defender al pueblo de Roma y desafiar el poder de las élites. El nombre del desconocido abogado es Cayo Julio César.', state: 'Disponible', ubication: 'España', publicationDate: '05/04/2022', editorial: 'B de Bolsillo', pages: '752'},

    {tittle: 'Cómo ganar amigos e influir sobre las personas', author: 'Dale Carnegie', genre: 'Autoayuda', idiom: 'Castellano', price: 40000, format: 'Tapa blanda', isbn: '9781644730096', description: 'Dale Carnegie escribió este libro con el propósito de ser un suplemento a su curso sobre oratoria y relaciones humanas y nunca se imaginó que se convertiría en un éxito de ventas y que la gente lo leería, lo criticaría y viviría según sus reglas. Carnegie entrevistó a muchas personas de renombre para tomar ejemplos de sus vidas. Entre ellas están Edison, Franklin D. Rooselvelt y James Farley.', state: 'Disponible', ubication: 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS', publicationDate: '23 Abril 2019', editorial: 'B de Bolsillo', pages: '304 páginas'},

    ]

    
    
    

   
  
    
    
let buttom = document.getElementById('buton')
let filterone = document.querySelectorAll('.valor')
let filtertwo = document.querySelectorAll('.valor')
let filteredBooks = [];
buttom.addEventListener('click',function(){
   // Variable para almacenar los libros filtrados


filterone.forEach((e) => {
    if (e.checked) {
        // Limpiar los resultados anteriores
        filteredBooks = [];

        if (e.value === 'price') {
            // Aplicar filtro por precio
            filteredBooks = books.filter(value => value.price >= 30000 && value.price <= 80000);
        } else if (e.value === 'ing') {
            // Aplicar filtro por idioma
            filteredBooks = books.filter(value => value.idiom === 'Ingles');
        }else if (e.value === 'esp') {
            // Aplicar filtro por idioma
            filteredBooks = books.filter(value => value.idiom === 'Castellano');
        }else if(e.value==='SD'){
            filteredBooks = books.filter (value => value.state == 'Disponible')
        }else if(e.value==='ND'){
            filteredBooks = books.filter (value => value.state == 'No disponible')
        }else if(e.value =='pag'){
            filteredBooks = books.filter(value => value.pages > 200).sort((a, b) => b.pages - a.pages)
        }
    }
});

console.log(filteredBooks);


});


document.addEventListener('DOMContentLoaded', () => {
    const filtro = document.getElementById('filtro');
    


    filtro.addEventListener('change', () => {
        const categoria = filtro.value;

            if (categoria === 'todos') {
                console.log(books)
            } else if(categoria ==='Mario_Ramos') {
                const filterAuthorMarioRamos = books.filter (value => value.author == 'Mario Ramos')
                console.log(filterAuthorMarioRamos)

            } else if(categoria ==='James_Clear') {
                const filterAuthorJamesClear = books.filter (value => value.author == 'James Clear');
                console.log(filterAuthorJamesClear)

            } else if(categoria ==='Robin_Sharma') {
                const filterAuthorRobinSharma = books.filter (value => value.author == 'Robin Sharma');
                console.log(filterAuthorRobinSharma)

            } else if(categoria ==='Mario_Mendoza') {
                const filterAuthorMarioMendoza = books.filter (value => value.author == 'Mario Mendoza');
                console.log(filterAuthorMarioMendoza)

            } else if(categoria ==='Isabel_Allende') {
                const filterAuthorIsabelAllende = books.filter (value => value.author == 'Isabel Allende');
                console.log(filterAuthorIsabelAllende)

            } else if(categoria ==='Eckhart_Tolle') {
                const filterAuthorEckhartTolle = books.filter (value => value.author == 'Eckhart Tolle');
                console.log(filterAuthorEckhartTolle)

            } else if(categoria ==='Carlos_Jaramillo') {
                const filterAuthorCarlosJaramillo = books.filter (value => value.author == 'Carlos Jaramillo');
                console.log(filterAuthorCarlosJaramillo)

            } else if(categoria ==='Marian_Rojas') {
                const filterAuthorMarianRojas = books.filter (value => value.author == 'Marian Rojas');
                console.log(filterAuthorMarianRojas)

            } else if(categoria ==='Irene_Vallejo') {
                const filterAuthorIreneVallejo = books.filter (value => value.author == 'Irene Vallejo');
                console.log(filterAuthorIreneVallejo)

            } else if(categoria ==='Miguel_Ruiz') {
                const filterAuthorMiguelRuiz = books.filter (value => value.author == 'Miguel Ruiz');
                console.log(filterAuthorMiguelRuiz)

            } else if(categoria ==='Gustavo_Petro') {
                const filterAuthorFlorSalvador = books.filter (value => value.author == 'Flor Salvador');
                console.log(filterAuthorFlorSalvador)

            } else if(categoria ==='Flor_Salvador') {
                const filterAuthorFlorSalvador = books.filter (value => value.author == 'Flor Salvador');
                console.log(filterAuthorFlorSalvador)

            } else if(categoria ==='Joana_Marcus') {
                const filterAuthorJoanaMarcus = books.filter (value => value.author == 'Joana Marcus');
                console.log(filterAuthorJoanaMarcus)

            } else if(categoria ==='J.K._Rowlling') {
                const filterAuthorJKRowlling = books.filter (value => value.author == 'J.K. Rowlling');
                console.log(filterAuthorJKRowlling)

            } else if(categoria ==='Hector_Abad_Faciolince') {
                const filterAuthorHéctorAbad = books.filter (value => value.author == 'Héctor Abad Faciolince');
                console.log(filterAuthorHéctorAbad)

            } else if(categoria ==='Edgar_Allan_Poe') {
                const filterAuthorEdgarAllan = books.filter (value => value.author == 'Edgar Allan Poe');
                console.log(filterAuthorEdgarAllan)

            } else if(categoria ==='Antoine_de_Saint_Exupéry') {
                const filterAuthorAntoinedeSaint = books.filter (value => value.author == 'Antoine de Saint Exupéry');
                console.log(filterAuthorAntoinedeSaint)

            } else if(categoria ==='Santiago_Posteguillo') {
                const filterAuthorSantiagoPosteguillo= books.filter (value => value.author == 'Santiago Posteguillo');
                console.log(filterAuthorSantiagoPosteguillo)

            } else if(categoria ==='Dale_Carnegie') {
                const filterAuthorDaleCarnegie = books.filter (value => value.author == 'Dale Carnegie');
                console.log(filterAuthorDaleCarnegie)

            } 
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const filtrotwo = document.getElementById('filtrotwo');


    filtrotwo.addEventListener('change', () => {
        const categoriatwo = filtrotwo.value;

            if (categoriatwo === 'todosE') {
                console.log(books)
            } else if(categoriatwo ==='B_de_Bolsillo') {
                const filterEditorialBolsillo = books.filter (value => value.editorial == 'B de Bolsillo');
                console.log(filterEditorialBolsillo)

            } else if(categoriatwo ==='Editorial_Alma') {
                const filterEditorialAlma = books.filter (value => value.editorial == 'Editorial Alma');
                console.log(filterEditorialAlma)

            } else if(categoriatwo ==='ALFAGUARA') {
                const filterEditorialALFAGUARA = books.filter (value => value.editorial == 'ALFAGUARA');
                console.log(filterEditorialALFAGUARA)

            } else if(categoriatwo ==='Salamandra') {
                const filterEditorialSalamandra = books.filter (value => value.editorial == 'Salamandra');
                console.log(filterEditorialSalamandra)

            } else if(categoriatwo ==='MONTENA') {
                const filterEditorialMONTENA = books.filter (value => value.editorial == 'MONTENA');
                console.log(filterEditorialMONTENA)

            } else if(categoriatwo ==='Urano') {
                const filterEditorialUrano = books.filter (value => value.editorial == 'Urano');
                console.log(filterEditorialUrano)

            } else if(categoriatwo ==='Espasa') {
                const filterEditorialEspasa = books.filter (value => value.editorial == 'Espasa');
                console.log(filterEditorialEspasa)

            } else if(categoriatwo ==='Booket') {
                const filterEditorialBooket  = books.filter (value => value.editorial == 'Booket');
                console.log(filterEditorialBooket)

            } else if(categoriatwo ==='LIBRERÍA_Y_DISTRIBUIDORA_LERNER_SAS') {
                const filterEditorialLERNER  = books.filter (value => value.editorial == 'LIBRERÍA Y DISTRIBUIDORA LERNER SAS');
                console.log(filterEditorialLERNER)

            } else if(categoriatwo ==='Gaia_Ediciones') {
                const filterEditorialGaia = books.filter (value => value.editorial == 'Gaia Ediciones');
                console.log(filterEditorialGaia)

            } else if(categoriatwo ==='Ballantine_Books') {
                const filterEditorialBallantineBooks = books.filter (value => value.editorial == 'Ballantine Books');
                console.log(filterEditorialBallantineBooks)

            } else if(categoriatwo ==='Planeta_Colombia') {
                const filterEditorialPlanetaColombia = books.filter (value => value.editorial == 'Planeta Colombia');
                console.log(filterEditorialPlanetaColombia)

            } else if(categoriatwo ==='GRIJALBO') {
                const filterEditorialGRIJALBO = books.filter (value => value.editorial == 'GRIJALBO');
                console.log(filterEditorialGRIJALBO)

            } else if(categoriatwo ==='PAIDOS') {
                const filterEditorialPaidos = books.filter (value => value.editorial == 'PAIDOS');
                console.log(filterEditorialPaidos)

            } else if(categoriatwo ==='Editorial_Corimbo_S.L') {
                const filterEditorialCorimbo = books.filter (value => value.editorial == 'Editorial Corimbo S.L.');
                console.log(filterEditorialCorimbo)

            } 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filtrotrhee = document.getElementById('filtrotrhee');


    filtrotrhee.addEventListener('change', () => {
        const categoriatrhee = filtrotrhee.value;

            if (categoriatrhee === 'todosG') {
                console.log(books)
            } else if(categoriatrhee ==='Infantil') {
                const filtergenreInfantil = books.filter (value => value.genre == 'Infantil');
                console.log(filtergenreInfantil)

            } else if(categoriatrhee ==='Autoayuda') {
                const filtergenreAutoayuda = books.filter (value => value.genre == 'Autoayuda');
                console.log(filtergenreAutoayuda)

            } else if(categoriatrhee ==='Historia') {
                const filtergenreHistoria= books.filter (value => value.genre == 'Historia');
                console.log(filtergenreHistoria)

            } else if(categoriatrhee ==='Ficción') {
                const filtergenreFicción = books.filter (value => value.genre == 'Ficción');
                console.log(filtergenreFicción)

            } else if(categoriatrhee ==='Salud') {
                const filtergenreSalud = books.filter (value => value.genre == 'Salud');
                console.log(filtergenreSalud)

            } else if(categoriatrhee ==='Filología') {
                const filtergenreFilología = books.filter (value => value.genre == 'Filología');
                console.log(filtergenreFilología)

            } else if(categoriatrhee ==='Juvenil') {
                const filtergenreJuvenil = books.filter (value => value.genre == 'Juvenil');
                console.log(filtergenreJuvenil)

            } else if(categoriatrhee ==='Novela_contemporánea') {
                const filtergenrecontemporánea = books.filter (value => value.genre == 'Novela contemporánea');
                console.log(filtergenrecontemporánea)

            } else if(categoriatrhee ==='Fantasía') {
                const filtergenreFantasía = books.filter (value => value.genre == 'Fantasía');
                console.log(filtergenreFantasía)

            } else if(categoriatrhee ==='terror') {
                const filtergenreterror = books.filter (value => value.genre == 'terror');
                console.log(filtergenreterror)

            } 
    });
});







    


