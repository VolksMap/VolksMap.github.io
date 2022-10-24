<html>
<head><title>Sign in</title></head>
<body>

<?php

$conexao = mysqli_connect("localhost", "root", "", "volksmap"); // Criando Conexão no banco "volksmap"
if ($conexao == false){
    echo "<h3>Não foi possível entrar no servidor .-.</h3>";
    exit;
}

$gmail = $_POST["email"];
$senha = $_POST["password"];
$conf_senha = $_POST["confpassword"];

if (empty($gmail) or empty($senha)) {
    echo "<h2 style='color: red'>⚠ Campos inválidos! Digite novamente.</h2>";
    echo "<p style='font-size: 25px'><a href='index_login.html'>Voltar ↺</a></p>";
    exit;
}

$verifica_row = mysqli_query($conexao,"SELECT * FROM cadastro WHERE gmail='$gmail' AND senha='$senha' AND senha='$conf_senha"); // Pegando a senha e um usuário da tabela "consani"

if (mysqli_num_rows($verifica_row) == 1) { // Verificando o número de cadastros com essa mesma senha e usuário 
    echo "<h2 style='color: blueviolet; font-family:Comic Sans MS, serif'>Login efetuado com Sucesso.<br>";
} else {
    echo "<h2 style='color: red'>Conta inválida ou Inexistente. Tente Novamente.</h2>";
    echo "<p style='font-size: 25px'><a href='index_login.html'>Voltar ↺</a></p>";
    echo "<p style='font-size: 25px'><a href='index_cadastros.html'>Cadastrar ↺</a></p>";
    exit;
}

?>
