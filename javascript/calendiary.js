// funcion agregar tarea
function agregarTarea (tarea, id, realizado, eliminado) {

    if(eliminado){return}

    const REALIZADO = realizado ? check : uncheck
    const LINE = realizado ? lineThrough : ""

    const elemento =   `
                        <li id="elemento">
                        <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
                        </li>
                        `
    lista.insertAdjacentHTML("beforeend", elemento)                        
}

addButton.addEventListener("click", ()=> {
    const tarea = input.value;
    if(tarea) {
        agregarTarea(tarea, id, false, false)
        LIST.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        })
        localStorage.setItem("TODO", JSON.stringify(LIST))
        id++
        input.value=""
    }
})

document.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        const tarea = input.value 
        if(tarea) {
            agregarTarea(tarea, id, false, false)
            LIST.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false
            })
            localStorage.setItem("TODO", JSON.stringify(LIST))
            input.value =""
            id++
            console.log(LIST)
        }
    }
})

lista.addEventListener("click", function (event){
    const element = event.target
    const elementData = element.attributes.data.value
    console.log(elementData)

    if(elementData == "realizado"){
        tareaRealizada(element)
    } else if (elementData == "eliminado"){ 
            tareaEliminada(element)
            console.log("eliminado")
        }
    localStorage.setItem("TODO", JSON.stringify(LIST))
})

// Funcion de tarea realizada

function tareaRealizada(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ? false : true
}


// Funcion de tarea eliminada
function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true
    console.log(LIST)
} 

// localStorage getItem 
let data = localStorage.getItem("TODO")
if (data){
    LIST = JSON.parse(data)
    id = LIST.length
    cargarLista(LIST)
} else {
    LIST = []
    id = 0
}

function cargarLista(DATA) {
    DATA.forEach(function(i){
        agregarTarea(i.nombre, i.id, i.realizado, i.eliminado)
    })
}

