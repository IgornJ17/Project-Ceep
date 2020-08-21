const removeTask = (event) => {
    var elementCapturado = event.target;
    var taskLi = elementCapturado.parentElement;

    taskLi.remove();
}

const ButtonDelete = function(){
    var deleteButton = document.createElement("button")
    deleteButton.classList.add("check-button");
    deleteButton.textContent = "Remover"
    
    deleteButton.addEventListener("dblclick", removeTask);
    
    return deleteButton;

}

export default ButtonDelete