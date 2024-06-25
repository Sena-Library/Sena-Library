

// register.js

export function register() {
    let name = document.getElementById("nombre").value;
    let tel = document.getElementById("telefono").value;
    let direcc = document.getElementById("direccion").value;
    let password = document.getElementById("contraseña").value;

    if (name === "" || tel === "" || direcc === "" || password === "") {
        alert("Por favor, rellene todos los campos");
    } else {
        const userInfo = {
            nombre: name,
            telefono: tel,
            direccion: direcc,
            contraseña: password
        };
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        
        // Redireccionar a la página "index.html"
        window.location.href = "../index.html";
    }
}


export function getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo'));
}

export function isUserRegistered() {
    // Verificar si hay algún dato guardado en localStorage
    return sessionStorage.getItem('userInfo') !== null;
}
