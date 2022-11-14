const submit = document.getElementById("submit");
let email = document.getElementById("email");
let senha = document.getElementById("password");

submit.addEventListener("click", validate);

function validate(e) {
    if (!email.value && !senha.value) {
        window.alert("Insira seus dados!");
        email.focus();
    } 
    if(email.value == "admin@gmail.com" && senha.value == "admin"){ 
        window.alert("Acessou!!");
    } else {
        window.alert("Acesso Negado!");
    }
}
