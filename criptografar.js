function codificarAMensagem() {
    const mensagem = document.getElementById('mensagemAcodificar').value;
    if (mensagem.trim() === '') {
        alert("Nenhuma mensagem encontrada");
        return;
    }
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let mensagemAcodificar = '';

    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i].toLowerCase();
        let index = alfabeto.indexOf(char);

        if (index !== -1) {
            mensagemAcodificar += index + ' ';
        } else if (char === ' ') {
            mensagemAcodificar += '00 ';
        } else {
            mensagemAcodificar += '33 ';
        }
    }

    document.getElementById('resultadoTextoCodificado').innerText = mensagemAcodificar.trim();
    document.getElementById('mensagemAcodificar').value = '';  // Limpa o campo de texto inicial
    esconderButton('resultadoTextoCodificado');  // Atualiza a visibilidade do botão copiar
}
