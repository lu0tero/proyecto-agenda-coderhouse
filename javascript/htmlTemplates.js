const retornoUsuarios = (contenido) => {
    const {fecha, estado, recordatorio} = contenido
        let htmlCard = ""
            htmlCard += `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <i class="fa-solid fa-bell"></i><h5 class="card-title">${fecha}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${estado}</h6>
                                <p class="card-text">${recordatorio}</p>
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