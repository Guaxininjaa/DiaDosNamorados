let input = document.getElementById('terminal-input');
let output = document.getElementById('terminal-output');

// Mensagem inicial do CMD
window.onload = () => {
    output.innerHTML = 'Microsoft Windows [Versão 10.0.19045]<br>(c) Microsoft Corporation. Todos os direitos da Beatriz reservados.<br><br>';
};

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let comando = input.value.toLowerCase();
        output.innerHTML += 'C:\\Users\\Beatriz> ' + comando + '<br>';
        input.value = '';

        if (comando === 'help') {
            output.innerHTML += '<div class="system-msg">' +
                'status     - Verifica o nível do amor<br>' +
                'role       - Sorteia o ( Role de Hoje )<br>' +
                'declaracao - Exibe uma declaração aleatória<br>' +
                'motivos    - Lista por que te amo<br>' +
                'clear      - Limpa a tela' +
                '</div>';
        } 
        else if (comando === 'status') {
        output.innerHTML += 'Verificando integridade do sistema...<br>' +
                        '[OK] Conexão com Beatriz: ESTÁVEL<br>' +
                        '[OK] Nível de amor: 100% ♾️🦖<br>' +
                        '[OK] Status cardíaco: ACELERADO ❤️🔥<br>' +
                        'Sistema operando perfeitamente!<br>';
}
        else if (comando === 'role') {
            const roles = [
                "Que tal um Cinema? 🍿",
                "Jantar romântico feito por você 😍 (ou pedido via delivery!)",
                "Um sorvetinho do McDonald's? 🍦",
                "Noite de jogos com Rosh? 🎮",
                "Uma pescaria misteriosa? 🐟🌅",
                "Um role aleatório ou uma cidade misteriosa? 🚗💨",
                "Bora pra um Sushi na beira da Lagoa? 🍣🌊"
            ];
            const escolha = roles[Math.floor(Math.random() * roles.length)];
            output.innerHTML += '<div class="success-msg">( Role de Hoje ): ' + escolha + '</div><br>';
        }
        else if (comando === 'declaracao') {
            const frases = [
                "Lista: "
                // "Beatriz, te amo mais que o Wi-Fi gratuito do shopping!",
                // "Seu amor é tipo imposto: inevitável, mas a gente paga sorrindo!",
                // "Você é o único acerto que faz meu sistema rodar liso!",
                // "Eu te amo tanto que até esqueci a senha do meu banco.",
                // "Você é igual boleto: chega todo dia na minha mente!",
                // "Te amo mais que café, e olha que eu sou viciado!",
                // "Minha bateria social acaba, mas o meu amor por você dura o dia todo.",
                // "Se você fosse um código, seria o mais difícil de compilar, mas o mais satisfatório de rodar.",
                // "Eu te amo tanto que quase compartilharia minha senha da Netflix. Quase!",
                // "Be, você é o 'Enter' que faltava na minha vida solitária de 'Esc'!"
            ];
            output.innerHTML += frases[Math.floor(Math.random() * frases.length)] + '<br>';
        }
        else if (comando === 'motivos') {
            output.innerHTML += '1. Seu sorriso é lindo.<br>2. O jeito que você me apoia em tudo.<br>3. Sua companhia é a melhor do mundo.<br>';
        }
        else if (comando === 'clear') {
            output.innerHTML = '';
        }
        else {
            output.innerHTML += '<span class="error-msg">\'' + comando + '\' não é reconhecido como um comando interno.</span><br>';
        }
        output.scrollTop = output.scrollHeight;
    }
});