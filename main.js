function esconderButton(textAreaId) {
    const textArea = document.getElementById(textAreaId);
    const buttonId = textAreaId === 'resultadoTextoCodificado' ? 'copiarCodificado' : 'copiarDecodificado';
    const button = document.getElementById(buttonId);
    if (textArea && textArea.value.trim() !== '') {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
}
