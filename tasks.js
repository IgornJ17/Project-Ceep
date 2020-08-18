

const buttonSelect = document.querySelector("[data-form-button]");

buttonSelect.addEventListener("click", function(event){
    event.preventDefault();
    var inputSelect = document.querySelector("[data-form-input]");
    var getValue = inputSelect.value
    console.log("Valor informado pelo Usuario: ", getValue);
})