// Buscar contas existentes (email e senha)
if (localStorage.getItem('contas')) {
    var contas = JSON.parse(localStorage.getItem('contas'));
} else {
    var contas = [];
}

// Cadastro de usuário
function criarConta() {

    // Verificar se o email já está cadastrado
    var contaExistente = contas.find(function (conta) {
        return conta.email === email.value;
    });

    if (contaExistente) {
        document.getElementById('error-message').textContent = 'Este email já está cadastrado. Por favor, escolha outro.';
        return;
    }

    // Verificar se as senhas coincidem
    if (password.value !== repeatPassword.value) {
        document.getElementById('error-message').textContent = 'Senhas não conferem.';

        setTimeout(function () {
            document.getElementById('error-message').textContent = '';
        }, 3000);
        return;
    }

    // Criar um objeto representando a conta
    var novaConta = {
        email: email.value,
        password: password.value
    };

    // Adicionar a nova conta ao array
    contas.push(novaConta);

    // Armazenar os dados no Local Storage
    localStorage.setItem('contas', JSON.stringify(contas));

    // Redirecionar para a página desejada (substitua 'index.html' pela página desejada)
    // 
    document.getElementById('error-message').textContent = 'Conta criada! Redirecionando para a página de login.';
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 3000);

    }

// Autenticação de usuário
function entrar() {

    // Verificar credenciais
    var credenciaisCorretas = contas.find(function (conta) {
        return conta.email === email.value && conta.password === password.value;
    });

    if (credenciaisCorretas) {
        window.location.href = 'home.html';
        return;
    } else {

        document.getElementById('error-message').textContent = 'E-mail e/ou senha inválidos.';
        setTimeout(function () {
            document.getElementById('error-message').textContent = '';
        }, 3000);
    }
}