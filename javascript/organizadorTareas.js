const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const addButton = document.querySelector("#add-button")
const check = "fa-check-circle"
const uncheck = "fa-circle"
const lineThrough = "line-through"
let LIST 

let id // inicia en 0 cada tarea, y tendra un id diferente

// Creacion de fecha
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString("es-AR",{weekday:"long", month:"short", day:"numeric"})

