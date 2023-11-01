import React from 'react';
import imageSrc from '../assets/Feelings.png'


function Home({handleGoBack}) {
  return (
    <div className="app-container">
      <img src={imageSrc} alt="logo" className="app-logo" />
      <p className="app-tagline">Transformando trechos de músicas em cores, pintando emoções!</p>
      {/* Conteúdo da tela inicial */}
      <h1>Tela Inicial</h1>
      <button onClick={handleGoBack}>Voltar</button> {/* Botão de voltar para a tela anterior */}
    </div>
  );
}

export default Home;
