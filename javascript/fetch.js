const obtengoUsuario = (URL)=> {
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> { 
          usuariosGuardados = data
          usuariosGuardados.forEach(contenido => {
             usuariosMostrar += retornoUsuarios(contenido)
          })
          contenedorUsuarios.innerHTML = usuariosMostrar
       })
    .catch(()=> {
    contenedorUsuarios.innerHTML = retornoUsuarioError()
    })
}

obtengoUsuario("/javascript/datosJSON.json")