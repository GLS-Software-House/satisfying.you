function autentica() {
        // Obter os valores dos campos de entrada
        var email = document.getElementById('email').value;
        var senha = document.getElementById('password').value;

        // Obter os dados do usuário do Local Storage
        var usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

        // Verificar se os dados correspondem
        if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
            // Se correspondem, redirecione para a página inicial (ou qualquer outra página desejada)
            window.location.href = 'home.html';
        } else {
            // Se não correspondem, exiba uma mensagem de erro
            document.getElementById('error-message').textContent = 'E-mail e/ou senha inválidos.';
        }
    }
