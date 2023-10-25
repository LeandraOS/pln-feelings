import React, { useState } from 'react';
import imageSrc from './assets/Feelings.png';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Valor do input: ${inputValue}`);
  };

  // Define um objeto de estilo para aumentar o tamanho do input
  const inputStyle = {
    width: '800px', // Defina a largura desejada
    height: '800px', // Defina a altura desejada
    fontSize: '16px', // Defina o tamanho da fonte desejado
    textAlign: 'center'
  };

  // Define um objeto de estilo para centralizar o botão
  const buttonStyle = {
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={imageSrc} alt="Sua Imagem" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite algo"
          style={inputStyle} // Aplicando o estilo ao input
        />
        <div style={buttonStyle}> {/* Div para centralizar o botão */}
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
