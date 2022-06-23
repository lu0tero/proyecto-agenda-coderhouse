const contenedorUsuarios = document.getElementById("contenedor-usuarios")

const usuariosRegistrados = [
    {nombre: "Juan"},
    {nombre: "Marcelo"},
    {nombre: "Matias"},
    {nombre: "Pedro"},
    {nombre: "Susana"}

]

function mostrarUsuarios() {
    contenedorUsuarios.appendChild(document.createElement("h3")).innerHTML = "Usuarios registrados"
    usuariosRegistrados.forEach(user => {
        let li = contenedorUsuarios.appendChild(document.createElement("li"))
        li.className = "usuario-login"
        li.innerHTML = `${user.nombre}`
    
    })  
       
}

mostrarUsuarios()

