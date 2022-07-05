// Registrar usuario y tras darle al botón se pushea al array
// También aparece el usuario en el HTML con el .value, (Desafío DOM)

/* const submitButton = document.getElementById("submit-button") */

// Mediante esta función pusheo la función capturarUsuario al array de usuariosRegistrados
/* submitButton.addEventListener("click", ()=> {
    usuariosRegistrados.push(new capturarUsuario)
    localStorage.setItem("Usuario Registrado", usuariosRegistrados)
})
 */

// Array de usuarios registrados
  const usuariosRegistrados = [
    {nombre: "Juan"},
    {nombre: "Marcelo"},
    {nombre: "Matias"},
    {nombre: "Pedro"},
    {nombre: "Susana"}

]  

// Creo una función para obtener los valores del registro 
 function capturarUsuario() {
    let nombre = document.getElementById("nombre").value 
    let apellido = document.getElementById("apellido").value  
    let email = document.getElementById("email").value  
    let password = document.getElementById("password").value  

    console.log(`nombre: ${nombre} \n apellido: ${apellido} \n email: ${email} \n contraseña: ${password} \n`)
}  

// Formulario de registro
form.addEventListener("submit", i => {
    i.preventDefault(); 
    let alert = ""
    let validar = false;
    let validarEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/ 
    alertasFormulario.innerHTML = ""

    // Condición nombre
    nombre.value.length >=3 ? (
        alert += `📆 Se ha ingresado un nombre <br>`,
        validar = true
        ) : (Swal.fire({
            title: `No se ingreso un nombre`,
            icon: "error",
            toast: true,
            position: "top-end",
            timer: 3000
        }))

    // Condición apellido
    apellido.value.length >= 3 ? (
        alert += `📆 Se ha ingresado un apellido <br>`,
        validar = true 
    ) : (
        Swal.fire({
            title: `No se ingreso un apellido`,  
            icon: "error",
            toast: true,
            position: "top-end",
            timer: 3000
        })
    )

    // Condición email 
    validarEmail.test(email.value) ? (
        alert += `📆 Se ha ingresado un email <br>`, 
        validar = true
    ) : (
        Swal.fire({
            title: `No se ha ingresado un email`,
            icon: "error",
            toast: true,
            position: "top-end",
            timer: 3000
        })
    )

    // Condición contraseña
    password.value.length >= 5 ? (
        alert += `📆 Se ha ingresado una contraseña <br>`, 
        validar = true
    ) : (
        Swal.fire({
            title: `No se ha ingresado una contraseña`,
            icon: "error",
            toast: true,
            position: "top-end",
            timer: 3000
        })
    )

    // Términos y condiciones
    checkbox.checked ? (
        alert += `📆 Se han aceptados los términos y condiciones <br>`,
        validar = true 
    ) : (
        Swal.fire({
            title: `No se aceptaron los términos y condiciones`,
            icon: "error",
            toast: true,
            position: "top-end",
            timer: 3000
        })
    )

    if (validar) {
        alertasFormulario.innerHTML = alert
    }
})