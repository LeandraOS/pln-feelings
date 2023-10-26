import React, { useState , useEffect} from 'react';
import imageSrc from './assets/Feelings.png';
import { getSentiment } from './service';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputSelected, setInputSelected] = useState('');
  const [inputType, setInputType] = useState('non');
  const [artist, setArtist] = useState('');
  const [track, setTrack] = useState('');
  const [sentiment, setSentiment] = useState('');

  const getData = async (payload) => {
    const data = await getSentiment(payload)
    setSentiment(data)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChangeArtist = (e) => {
    setArtist(e.target.value);
  };

  const handleInputChangeTrack = (e) => {
    setTrack(e.target.value);
  };

  const handleSubmitTitle = (e) => {
    e.preventDefault();
    getData({"artist": artist, "track": track})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData({"lyrics": inputValue})
  };

  const handleSelectInput = (selected) => {
    setInputType(selected);
    setInputSelected(true);
  };

  // Define um objeto de estilo para aumentar o tamanho do input
  const inputStyle = {
    width: '800px', 
    height: '800px', 
    fontSize: '16px', 
    textAlign: 'center',
    border: '1px solid #427AA1', 
    borderRadius: '20px'
  };

  // Define um objeto de estilo para centralizar o botão
  const buttonStyle = {
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    
  };

  const smallInputStyle = {
    width: '800px',
    height: '40px',
    fontSize: '16px',
    textAlign: 'center',
    border: '1px solid #427AA1',
    borderRadius: '10px',
    margin: '5px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={imageSrc} alt="logo" />
      {inputSelected ? ( 
        <div> 
            {inputType ? (
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Digite algo"
                    style={inputStyle} // Aplicando o estilo ao input
                />
                <div style={buttonStyle}> {/* Div para centralizar o botão */}
                    <button style={{height: '40px', width: '120px', backgroundColor: '#427AA1', color: '#fff', fontSize: '16px', borderRadius: '10px'}} type="submit">Enviar</button>
                </div>
                </form>
              ) : (
                <form onSubmit={handleSubmitTitle}>
                  <input
                    type="text"
                    style={smallInputStyle} // Aplicando o estilo ao segundo tipo de input
                    placeholder="Artista"
                    onChange={handleInputChangeArtist}

                  />
                  <br />
                  <input
                    type="text"
                    style={smallInputStyle} // Aplicando o estilo ao segundo tipo de input
                    placeholder="Música"
                    onChange={handleInputChangeTrack}
                  />
                  <div style={buttonStyle}> {/* Div para centralizar o botão */}
                    <button style={{height: '40px', width: '120px', backgroundColor: '#427AA1', color: '#fff', fontSize: '16px', borderRadius: '10px'}} type="submit">Enviar</button>
                </div>
                </form>
              )}
        </div>
      ) : (
        <div>
          <button
            onClick={() => handleSelectInput(true)}
            style={{padding: '10px', margin: '10px', textAlign: 'center', backgroundColor: '#427AA1', color: '#fff', fontSize: '16px', borderRadius: '10px'}}
          >
            Enviar letra
          </button>
          <button
            onClick={() => handleSelectInput(false)}
            style={{padding: '10px', margin: '10px', textAlign: 'center', backgroundColor: '#427AA1', color: '#fff', fontSize: '16px', borderRadius: '10px'}}
          >
            Enviar por titulo da música
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
