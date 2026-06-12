let input = document.getElementById('terminal-input');
let output = document.getElementById('terminal-output');

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
                'rango      - Sorteia o ( Rango de Hoje )<br>' +
                'rosh       - Sorteia o ( Rosh de Hoje ) da SENSE<br>' +
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
        else if (comando === 'rango') {
            const rangos = [
                "Pizza 🍕", "Hambúrguer 🍔", "Sushi completo 🍣",
                "Comida mexicana (bem apimentada!) 🌮", "Pastel de feira com caldo de cana 🥟",
                "Aquele churrasquinho caprichado 🥩", "Muita besteira aleatoria 🍫",
                "Cachorro-quente 🌭", "Strogonoff de frango 🍛", 
                "Açaí com tudo que tem direito 🍧", "Sorvete de massa do McDonald's 🍦"
            ];
            const escolha = rangos[Math.floor(Math.random() * rangos.length)];
            output.innerHTML += '<div class="success-msg">( Rango de Hoje ): ' + escolha + '</div><br>';
        }
        else if (comando === 'rosh') {
            const saboresSense = [
                "Absolut Mint: Menta super refrescante e intensa ❄️",
                "Candy Strawberry Ice: Doce de bala de morango com um toque gelado 🍓",
                "Melancia e Framboesa: Combinação frutada e adocicada 🍉",
                "Maracujá Ice: Cítrico com sensação gelada 🟡",
                "Cereja Ice: Sabor de cereja com refrescância 🍒",
                "Green Lemon Ice: Limão gelado 🍋",
                "Blueberry Ice: Mirtilo com toque gelado 🫐",
                "Grape Ice: Uva com refrescância 🍇",
                "Peach Ice: Pêssego doce com toque Ice 🍑",
                "Tangerine Ice: Tangerina cítrica e gelada 🍊",
                "Pineapple Ice: Abacaxi gelado 🍍",
                "Apple Ice: Maçã verde gelada 🍏",
                "Mango Ice: Manga com sensação gelada 🥭",
                "Bubble Gum Ice: Chiclete com toque gelado 🍬",
                "Energy Ice: Sabor de energético gelado ⚡"
            ];
            const escolha = saboresSense[Math.floor(Math.random() * saboresSense.length)];
            output.innerHTML += '<div class="success-msg">( Rosh de Hoje ): Sense ' + escolha + '</div><br>';
        }
        else if (comando === 'declaracao') {
            const frases = [
                "Você é o único acerto que faz meu sistema rodar liso!",
                "Te amo mais que café, e olha que eu sou viciado!",
                "Be, você é o 'Enter' que faltava na minha vida solitária de 'Esc'!"
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