

const buttonSelect = document.querySelector("[data-form-button]");

buttonSelect.addEventListener("click", function(event){
    event.preventDefault();
    console.log("fui clicado");
})