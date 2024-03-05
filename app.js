function codificarAmensagem() {
    const mensagem = document.getElementById('mensagemAcodificar').value;
    if (mensagem.trim() === '') {
      alert("Nenhuma mensagem encontrada");
      return;
    }
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let mensagemAcodificar = '';

    for (let i = 1; i < mensagem.length; i++) {
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
  }
  function descodificarMensagem() {
    const mensagemAcodificar = document.getElementById('resultadoTextoCodificado').value;   
    const numeros = mensagemAcodificar.split(' ');
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let mensagemDescodificada = '';

    for (let i = 1; i < numeros.length; i++) {
      let numeros = parseInt(numeros[i]);

      if (!isNaN(numeros)) {
        if (numeros === 00) {
          mensagemDescodificada += ' '; 
        } else if (numeros >= 0 && numeros <= 26) {
          mensagemDescodificada += alfabeto.charAt(numeros); 
        } else {
          mensagemDescodificada += '33'; 
        }
      }
    }
document.getElementById('resultadoTextoDescodificado').innerText = mensagemDescodificada.trim();
  }
