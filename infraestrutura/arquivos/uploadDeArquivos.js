const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) => {
  const tiposValidos = ['jpg', 'png', 'jpeg'];
  const tipo = path.extname(caminho);
  // verifica se a possição do tipo passado é diferente de -1
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

  if(!tipoEhValido){
    const erro = 'Tipo é invalido';
    console.log('Erro! Tipo invalido');
    callBackImagemCriada(erro);
  }else{
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;
    
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => callBackImagemCriada(false, novoCaminho));
  } 
}