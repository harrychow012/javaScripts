const listaSuper = document.getElementById("lista-super");
const input = document.getElementById("input-lista");
const botonAgregar = document.getElementById("boton-agregar");

botonAgregar.addEventListener("click", onClickAdd);
input.addEventListener("input", onTypeList);

function onClickAdd() {
    if (input.value.trim() !== "") {
        const li = createListItem(input.value);
        listaSuper.appendChild(li);
        input.value = "";
    }
}

function onTypeList() {
    botonAgregar.disabled = input.value.trim() === "";
}


function createListItem(name) {
    const listItem = document.createElement("li");
    const heading = document.createElement("span");
    heading.textContent = name;
    const botonEliminar = document.createElement("button");

    listItem.classList.add("lista-item");
    botonEliminar.textContent = "X";
    botonEliminar.addEventListener("click", onClickDelete);

    listItem.appendChild(heading);
    listItem.appendChild(botonEliminar);
    return listItem;
}


function onClickDelete() {
    this.parentNode.remove();
}