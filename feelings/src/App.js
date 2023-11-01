import React, { useState, useEffect } from 'react';
import imageSrc from './assets/Feelings.png';
import './App.css';
import { getSentiment } from './service';
import { Spin } from 'antd';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputSelected, setInputSelected] = useState('');
  const [inputType, setInputType] = useState('non');
  const [artist, setArtist] = useState('');
  const [track, setTrack] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getSentiment(payload);
      setSentiment(data["data"]);
    } catch (error) {
      setError('Música não encontrada. Por favor, verifique os detalhes da música.');
    } finally {
      setLoading(false);
    }
  };

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
    getData({ "artist": artist, "track": track });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData({ "lyrics": inputValue });
  };

  const handleSelectInput = (selected) => {
    setInputType(selected);
    setInputSelected(true);
  };

  return (
    <>
    <div class="app-bar">
        <div class="emotion-raiva">Raiva</div>
        <div class="emotion-alegria">Alegria</div>
        <div class="emotion-medo">Medo</div>
        <div class="emotion-nojo">Nojo</div>
        <div class="emotion-tristeza">Tristeza</div>
        <div class="emotion-satisfação">Satisfação</div>
        <div class="emotion-confiança">Confiança</div>
        <div class="emotion-amor">Amor</div>
        <div class="emotion-esperança">Esperança</div>
    </div>
    <div className="app-container">
      <img src={imageSrc} alt="logo" className="app-logo" />
      <p className="app-tagline">🎵Transformando trechos de músicas em cores, pintando emoções!🎵</p>
      <div style={{backgroundColor: '#007476', height: '1px', width: '80px', marginBottom: '20px' }}></div>
      {loading ? (
          <Spin tip='Loading' size='large' />
        ) : error ? (
          <p style={{color: 'red'}}>{error}</p>
        ) : sentiment ? (
        <div>
          {sentiment.map((item, index) => (
            <p key={index} className={item[1]}>
              {item[0]}
            </p>
          ))}
        </div>
      ) : (
        <div>
          {inputSelected ? (
            <div>
              {inputType ? (
                <form onSubmit={handleSubmit}>
                  <textarea
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Digite a sua música desejada."
                    className="app-input"
                  />
                  <div className="app-button-container">
                    <button className="app-button" type="submit">
                      Enviar
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmitTitle}>
                  <input
                    type="text"
                    className="app-small-input"
                    placeholder="Artista"
                    onChange={handleInputChangeArtist}
                  />
                  <br />
                  <input
                    type="text"
                    className="app-small-input"
                    placeholder="Música"
                    onChange={handleInputChangeTrack}
                  />
                  <div className="app-button-container">
                    <button className="app-button" type="submit">
                      Enviar
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div style={{display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center'}}>
              <button
                onClick={() => handleSelectInput(true)}
                className="app-button"
              >
                Enviar letra
              </button>
              <button
                onClick={() => handleSelectInput(false)}
                className="app-button-large"
              >
                Enviar por título da música
              </button>
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
}

export default App;
