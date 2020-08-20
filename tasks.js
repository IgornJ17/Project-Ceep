
function main(){
    const CreateButton = function(){

    var button = document.createElement('button');
    button.classList.add("check-button");
    button.textContent = "Confirmar";

    button.addEventListener("click", confirmTask);

    return button;
    }

    const confirmTask = (event) => {
    var buttonSelect = event.target;
    var selectNodeFather = buttonSelect.parentElement;

    selectNodeFather.classList.toggle('done');
    buttonSelect.textContent = "Confirmado";

    }

    const createItem = function(event){
    const buttonSelect = document.querySelector("[data-form-button]");

    buttonSelect.addEventListener("click", (event) => {
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
    })
    }
    createItem();
}

main();





