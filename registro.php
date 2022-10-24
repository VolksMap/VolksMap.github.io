<html>
<head><title>Register</title></head>
<body>

<?php

$conexao = mysqli_connect("localhost", "root", "", "volksmap");
if ($conexao == false){
    echo "Não foi possível entrar no servidor";
    exit;
}

$name = $_POST["nome"];
$gmail= $_POST["email"];
$senha_atual = $_POST["password"];
$conf_senha = $_POST["confpassword"];


if (empty($nome) or empty($gmail) or empty($senha) or empty($conf_senha)) {
    echo "<h2 style='color: red'>⚠ Campos inválidos! Digite novamente.</h2>";
    echo "<p style='font-size: 25px'><a href='index_cadastro.html'>Voltar ↺</a></p>";
    exit;
}

$sql = "INSERT INTO cadastro (codUsuario, nome, email, senha, confSenha) 
            VALUES (NULL, '$name', '$gmail', '$senha_atual', '$conf_senha')"; // Inserindo os dados no Banco de Dados.

$user_existe = mysqli_query($conexao, "SELECT * FROM cadastro WHERE nome= '$name'"); // Verificando se este username já existe.
if (mysqli_num_rows($user_existe) >= 1) {
    echo "<h2 style='color: yellow'>Username já existente</h2>";
    echo "<p style='font-size: 25px'><a href='index_cadastros.html'>Voltar ↺</a></p>";
    echo "<p style='font-size: 25px'><a href='index_cadastros.html'>Voltar ↺</a></p>";
    exit;
}

$resultado = mysqli_query($conexao, $sql); // Gravando os cadastros feitos no banco de dados.

if (!$resultado)
    echo "<h2 style='color: red'>Erro na Gravação do registro ;-;.</h2>";
else echo "<h2 style='color: blue'>Registro Gravado ヅ.</h2>";
?>

<p style="font-size: 25px"><a href="index_cadastros.html">Voltar ↺</a></p>

</body></html>