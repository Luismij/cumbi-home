import React, { useState } from 'react';

function App() {
  const [idioma, setIdioma] = useState('español');

  const cambiarIdioma = (lang) => {
    setIdioma(lang);
  };

  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Puedes añadir tu logo aquí */}
          <nav>
            <button
              type="button"
              onClick={() => cambiarIdioma('español')}
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Español
            </button>
            <button
              type="button"
              onClick={() => cambiarIdioma('inglés')}
              className="ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Inglés
            </button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-5">
        {'español' === idioma ? (
          <div>
            <h1 className="text-xl font-bold">Sección en Español</h1>
            <p>Aquí va el contenido en español.</p>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-bold">English Section</h1>
            <p>Here goes the content in English.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
