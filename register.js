function register() {
    let name = document.getElementById("nombre").value;
    let tel = document.getElementById("telefono").value;
    let direcc = document.getElementById("direccion").value;
    let password = document.getElementById("contraseña").value;

    if (name === "" || tel === "" || direcc === "" || password === "") {
        alert("Por favor, rellene todos los campos");
    } else {
        // Guardar los datos en sessionStorage
        sessionStorage.setItem('nombre', name);
        sessionStorage.setItem('telefono', tel);
        sessionStorage.setItem('direccion', direcc);
        sessionStorage.setItem('contraseña', password);


        // Redireccionar a la página "person.html"
        window.location.href = "../index.html";
    }
}