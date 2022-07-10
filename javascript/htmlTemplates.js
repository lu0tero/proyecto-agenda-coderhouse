const retornoUsuarios = (contenido) => {
    const {nombre, email, tarea} = contenido
        let htmlCard = ""
            htmlCard += `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${email}</h6>
                                <p class="card-text">${tarea}</p>
                            </div>
                        </div>  `
        return htmlCard
}


const retornoUsuarioError= ()=> {
    let HTMLCardError = `<div class="center white-text"> 
                            <br><br> 
                            <br><br> 
                            <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                            <br><br> 
                         </div>`
       return HTMLCardError
 }