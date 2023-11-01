import React from 'react';
import imageSrc from './assets/Feelings.png';


function InputTitle({handleGoBack}) {
  return (
    <div className="app-container">
      <img src={imageSrc} alt="logo" className="app-logo" />
      <p className="app-tagline">Transformando trechos de músicas em cores, pintando emoções!</p>
      {/* Conteúdo da tela de entrada de título de música */}
      <h1>Entrada de Título</h1>
      <button onClick={handleGoBack}>Voltar</button> {/* Botão de voltar para a tela anterior */}
    </div>
  );
}

export default InputTitle;
