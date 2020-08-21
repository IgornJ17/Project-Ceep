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

export default CreateButton;