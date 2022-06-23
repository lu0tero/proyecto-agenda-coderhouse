class OrganizadorTareas {
    constructor(tareasPendientes, addButon) {
        this.tareasPendientes = tareasPendientes;
        this.addButon = addButon;
        let ref = this;
        this.addButon.addEventListener("click", ()=> {
            let titulo = prompt("Ingrese un titulo");
            let contenido = prompt("Ingrese el contenido");
            let tarea = document.createElement("div");
            tarea.innerHTML = `<h4>${titulo}</h4>
                                <p>${contenido}</p>`;
            ref.tareasPendientes.append(tarea);
        })
        
    }
}