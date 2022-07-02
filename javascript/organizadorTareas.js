let nuevaTarea = [] 

// Creo clase constructora para agregar nota y descripción a la tabla
class OrganizadorTareas {
    constructor(tareasPendientes, addButon) {
        this.tareasPendientes = tareasPendientes;
        this.addButon = addButon;
        let ref = this;
        this.addButon.addEventListener("click", ()=> {
            let tarea = document.createElement("div");
            tarea.innerHTML = `<input class="input-task"></input>`;
            ref.tareasPendientes.append(tarea);
        })
        
    }
}
