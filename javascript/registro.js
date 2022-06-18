// Registrar usuario y tras darle al botón se pushea al array
// También aparece el usuario en el HTML con el .value, (Desafío DOM)

const submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", registrarUsuario)


const usuariosRegistrados = []

function capturarUsuario() {
    let nombre = document.getElementById("nombre").value = "Samuel"
    let apellido = document.getElementById("apellido").value = "Tocamaiza"
    let email = document.getElementById("email").value = "samumaiza@gmai.com"
    let password = document.getElementById("password").value = "cursoJS"
    let repassword = document.getElementById("repassword").value = "cursoJS"

        console.log(`nombre: ${nombre} \n apellido: ${apellido} \n email: ${email} \n contraseña: ${password} \n contraseña confirmada: ${repassword}`)
}

function registrarUsuario() {
    usuariosRegistrados.push(new capturarUsuario)
}