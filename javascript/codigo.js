
 function nuevoUsuario(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
    alert(`Datos registrados:\n username = ${this.username}\n email = ${this.email}\n contraseña = ${this.password}`)
    alert("¡Bienvenido! " + this.username)
}

let username = prompt("Ingrese su nombre de usuario")
let email = prompt("Ingrese su email")
let password = prompt("Ingrese su contraseña")

const usuario1 = new nuevoUsuario (username, email, password) 

let capturarUsuario = [usuario1]
ñ