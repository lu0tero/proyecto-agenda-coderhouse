let addButton = document.getElementById("add-button")
addButton.addEventListener("click", clickButton)

let addText = document.getElementById("add-text")
addText.addEventListener("click", clickButton)

function clickButton() {
    alert("Se añadirá una nota!")
}
