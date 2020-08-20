
const CreateButton = function(){

    var button = document.createElement('button');
    button.classList.add("check-button");
    button.textContent = "Confirmar";

    button.addEventListener("click", (event) =>{
        console.log("Fui clicado");
    })

    return button;
}


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
    liTask.appendChild(CreateButton());
    selectList.appendChild(liTask);
    

    inputSelect.value = " ";
}




const buttonSelect = document.querySelector("[data-form-button]");

buttonSelect.addEventListener("click", createItem);