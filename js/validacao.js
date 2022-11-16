const enviar = document.getElementById("submit");
let email = document.getElementById("email");
let senha = document.getElementById("password");

enviar.addEventListener('click', function (){
    if (!email.value && !senha.value) {
        window.alert("Insira seus dados!");
        email.focus();
    } 
    else if(email.value == "admin@gmail.com" && senha.value == "admin"){ 
        window .location .replace("https://volksmap.github.io/");
        window.alert("Acessou!!");
    } else {
        window.alert("Acesso Negado!");
    }
});


