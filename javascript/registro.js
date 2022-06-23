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
    let nombre = document.getElementById("nombre") 
    let apellido = document.getElementById("apellido") 
    let email = document.getElementById("email") 
    let password = document.getElementById("password") 
    let repassword = document.getElementById("repassword")

        console.log(`nombre: ${nombre} \n apellido: ${apellido} \n email: ${email} \n contraseña: ${password} \n contraseña confirmada: ${repassword}`)
}

function registrarUsuario() {
    usuariosRegistrados.push(new capturarUsuario)
}