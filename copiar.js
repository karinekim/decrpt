function copiarTexto(textAreaId, clearAreaId) {
    const textArea = document.getElementById(textAreaId);
    textArea.select();
    document.execCommand('copy');
    alert("Texto copiado: " + textArea.value);
    textArea.value = '';  // Limpa o campo de texto após copiar
    
    if (clearAreaId) {
        const clearArea = document.getElementById(clearAreaId);
        clearArea.value = '';  // Limpa a área de texto adicional, se fornecida
    }

    esconderButton(textAreaId, 'copiarCodificado');  // Atualiza a visibilidade do botão copiar
    esconderButton(clearAreaId, 'copiarCodificado');  // Atualiza a visibilidade do botão copiar, se fornecida
}

