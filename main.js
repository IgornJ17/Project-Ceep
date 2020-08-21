import ButtonDelete from './componentes/DeleteButton'
import CreateButton from './componentes/CreateButton'

function main(){
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

            var componentes = [CreateButton, ButtonDelete]

            liTask.innerHTML = item;
            
            componentes.forEach(component => {
                liTask.appendChild(component());
            });

            selectList.appendChild(liTask);
            

            inputSelect.value = " ";
        })
    }
    createItem();
}

main();





