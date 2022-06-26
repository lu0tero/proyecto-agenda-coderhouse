// Registrar usuario y tras darle al botón se pushea al array
// También aparece el usuario en el HTML con el .value, (Desafío DOM)

const submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", registrarUsuario)


const usuariosRegistrados = [
    {nombre: "Juan"},
    {nombre: "Marcelo"},
    {nombre: "Matias"},
    {nombre: "Pedro"},
    {nombre: "Susana"}

]

function capturarUsuario() {
    let nombre = document.getElementById("nombre").value 
    let apellido = document.getElementById("apellido").value  
    let email = document.getElementById("email").value  
    let password = document.getElementById("password").value  
    let repassword = document.getElementById("repassword").value 

        console.log(`nombre: ${nombre} \n apellido: ${apellido} \n email: ${email} \n contraseña: ${password} \n contraseña confirmada: ${repassword}`)
}

function registrarUsuario() {
    usuariosRegistrados.push(new capturarUsuario)
}

const guardarUsuarios = (clave, valor) => { localStorage.setItem(clave, valor)}

for (const usuario of usuariosRegistrados) {
    guardarUsuarios(usuario.nombre, JSON.stringify(usuariosRegistrados));
}

