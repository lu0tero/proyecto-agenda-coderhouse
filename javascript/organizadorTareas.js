// Creo clase constructora para agregar nota y descripción a la tabla
class OrganizadorTareas {
    constructor(tareasPendientes, addButon) {
        this.tareasPendientes = tareasPendientes;
        this.addButon = addButon;
        let ref = this;
        this.addButon.addEventListener("click", ()=> {
            let titulo = prompt("Ingrese titulo de nota");
            let contenido = prompt("Ingrese su descripción");
            let tarea = document.createElement("div");
            tarea.innerHTML = `<h5>${titulo}</h5>
                                <p>${contenido}</p>`;
            ref.tareasPendientes.append(tarea);
        })
        
    }
}
