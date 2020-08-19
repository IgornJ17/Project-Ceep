
const createItem = function(event){
    event.preventDefault();
    var inputSelect = document.querySelector("[data-form-input]");
    var getValue = inputSelect.value
    console.log("Valor informado pelo Usuario: ", getValue);   

    const selectList = document.querySelector("[data-list]");
    const liTask = document.createElement("li");
    liTask.classList.add("task")
    const item = `<p class="content">${getValue}</p>`


    liTask.innerHTML = item;
    selectList.appendChild(liTask);

    inputSelect.value = " ";
}

const buttonSelect = document.querySelector("[data-form-button]");

buttonSelect.addEventListener("click", createItem);