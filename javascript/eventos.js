let addButton = document.getElementById("add-button")
addButton.addEventListener("click", clickButton)

let addText = document.getElementById("add-text")
addText.addEventListener("click", clickButton)

function clickButton() {
    alert("Se añadirá una nota!")
}

let elegirFecha = document.getElementById("elegir-fecha")
elegirFecha.addEventListener("click", calendario)

function calendario() {
    alert("Se eligirá una fecha")
}