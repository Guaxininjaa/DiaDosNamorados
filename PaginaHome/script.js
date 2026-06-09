let input = document.getElementById('terminal-input');
let output = document.getElementById('terminal-output');

// Fica "escutando" o que é digitado e reage quando a tecla Enter for pressionada
input.addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') {
        let comando = input.value.toLowerCase(); 
        input.value = ''; 

        output.innerHTML += '<div class="line command-entered">> ' + comando + '</div>';

        if (comando === 'help') {
            output.innerHTML += '<div class="line system-msg">Comandos: status, fotos, declaracao, musica, motivos, clear.</div>';
        } 
        else if (comando === 'status') {
            output.innerHTML += '<div class="line success-msg">[SISTEMA ESTÁVEL] Nível de amor: Vai e Vem!♾️🦖</div><br>E você ainda tem alguma duvida do porque eu te amo tanto? <br> <div class="line warning-msg">[AVISO] Coração superaquecendo... ❤️🔥</div>';
        } 
        else if (comando === 'fotos') {
            output.innerHTML += '<div class="line warning-msg">Abrindo galeria... <br> <img src="foto-casal.jpg" style="width: 200px; border: 2px solid #38bdf8; border-radius: 8px; margin-top: 10px;"> </div>';
        } 
        else if (comando === 'declaracao') {
            output.innerHTML += '<div class="line">Beatriz, codar esse terminal foi a forma mais sincera que encontrei de dizer o quanto você é especial. Eu te amo muito!</div>';
        } 
        else if (comando === 'musica') {
            output.innerHTML += '<div class="line system-msg">Tocando nossa música... [Coloque o link do Spotify aqui]</div>';
        } 
        
        else if (comando === 'motivos') {
            output.innerHTML += '<div class="line success-msg">Descriptografando motivos...<br>1. Seu sorriso lindo.<br>2. O jeito que você me apoia em tudo.<br>3. Sua companhia é a melhor do mundo.</div>';
        } 
        else if (comando === 'clear') {
            output.innerHTML = ''; 
        } 
        else {
            output.innerHTML += '<div class="line error-msg">Comando não reconhecido. Digite help.</div>';
        }

        output.scrollTop = output.scrollHeight;
    }
});