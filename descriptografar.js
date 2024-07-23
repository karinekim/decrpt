function decodificarAMensagem() {
    const mensagemCodificada = document.getElementById('mensagemCodificada').value;
    if (mensagemCodificada.trim() === '') {
        alert("Nenhuma mensagem codificada encontrada");
        return;
    }
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let mensagemDecodificada = '';

    const codigos = mensagemCodificada.split(' ');

    for (let i = 0; i < codigos.length; i++) {
        let codigo = codigos[i];

        if (codigo === '00') {
            mensagemDecodificada += ' '; // Espaço
        } else if (codigo === '33') {
            mensagemDecodificada += ''; // Caracter especial ou ignorado
        } else {
            let index = parseInt(codigo);
            mensagemDecodificada += alfabeto[index];
        }
    }

    document.getElementById('resultadoTextoDecodificado').innerText = mensagemDecodificada.trim();
    document.getElementById('mensagemCodificada').value = '';  // Limpa o campo de texto inicial
    esconderButton('resultadoTextoDecodificado');  // Atualiza a visibilidade do botão copiar
}