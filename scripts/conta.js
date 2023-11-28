
if (localStorage.getItem('contas')) {
    var contas = JSON.parse(localStorage.getItem('contas'));
} else {
    var contas = [];
}

function criarConta() {

   
    var contaExistente = contas.find(function (conta) {
        return conta.email === email.value;
    });

    if (contaExistente) {
        document.getElementById('error-message').textContent = 'Este email já está cadastrado. Por favor, escolha outro.';
        return;
    }

   
    if (password.value !== repeatPassword.value) {
        document.getElementById('error-message').textContent = 'Senhas não conferem.';

        setTimeout(function () {
            document.getElementById('error-message').textContent = '';
        }, 3000);
        return;
    }

    
    var novaConta = {
        idUsuario: contas.length + 1,
        email: email.value,
        password: password.value
    };

    
    contas.push(novaConta);

   
    localStorage.setItem('contas', JSON.stringify(contas));

    
    document.getElementById('error-message').textContent = 'Conta criada! Redirecionando para a página de login.';
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 3000);

    }


function entrar() {

    var credenciaisCorretas = contas.find(function (conta) {
        return conta.email === email.value && conta.password === password.value;
    });

    if (credenciaisCorretas) {
        localStorage.setItem('usuarioLogado', JSON.stringify(credenciaisCorretas.idUsuario));
        window.location.href = 'home.html' + '?idUsuario=' + credenciaisCorretas.idUsuario;
        return;
    } else {

        document.getElementById('error-message').textContent = 'E-mail e/ou senha inválidos.';
        setTimeout(function () {
            document.getElementById('error-message').textContent = '';
        }, 3000);
    }
}