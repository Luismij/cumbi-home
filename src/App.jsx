/* eslint-disable max-len */

import React, { useState } from 'react';
import logo from './assets/Cumbi_White_horizontal.png'; // Asegúrate de que la ruta al logo sea correcta

function App() {
  const [idioma, setIdioma] = useState('español');

  return (
    <div className="App">
      <header className="bg-royal-violet text-honeydew p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo centrado utilizando flex */}
          <div className="flex justify-center w-full">
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <nav className="absolute right-4 top-4">
            {/* Botón Dashboard como un enlace */}
            <a
              href="https://dash.cumbi.co/"
              className="text-honeydew font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-iris"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dashboard
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-5 px-4 md:px-20 lg:px-40 text-royal-violet">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px justify-center">
            <li className="mr-2">
              <button
                type="button"
                className={
                  `inline-block p-4 rounded-t-lg focus:outline-none focus:shadow-outline
                  ${'español' === idioma ? 'text-blue-600 border-b-2 border-blue-600' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300'}`
                }
                onClick={() => setIdioma('español')}
              >
                Español
              </button>
            </li>
            <li className="mr-2">
              <button
                type="button"
                className={`inline-block p-4 rounded-t-lg focus:outline-none focus:shadow-outline ${'english' === idioma ? 'text-blue-600 border-b-2 border-blue-600' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300'}`}
                onClick={() => setIdioma('english')}
              >
                English
              </button>
            </li>
          </ul>
        </div>
        {'español' === idioma ? (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-iris">Querida comunidad de Cumbi,</h2>
            <p className="mb-4">
              Hoy nos dirigimos a ustedes con noticias significativas. Tras una profunda reflexión y análisis, hemos decidido cerrar las operaciones actuales de Cumbi para emprender un nuevo camino. Esta decisión, aunque difícil, está impulsada por nuestra constante búsqueda de innovación y eficiencia.
            </p>
            <p className="mb-4">
              Queremos expresar nuestro más sincero agradecimiento por el apoyo y confianza que nos han brindado. Su apoyo ha sido el pilar de nuestra empresa, y mientras cerramos este capítulo, queremos asegurarles que no es el fin de nuestra misión.
            </p>
            <p className="mb-4">
              Estamos reevaluando, aprendiendo y ya estamos trazando el camino hacia un nuevo comienzo. Volveremos más fuertes, con soluciones que mejor se alineen con las necesidades del mercado y que resuelvan los problemas de nuestros usuarios.
            </p>
            <p className="mb-4">Gracias por ser parte de nuestro viaje. Estén atentos para lo que viene.</p>
            <p className="font-bold">Con gratitud,</p>
            <p>[El equipo de Cumbi]</p>
          </div>
        ) : (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-iris">Dear Cumbi Community,</h2>
            <p className="mb-4">
              We are entering a period of transformation and want to express our sincerest gratitude for the support and trust you have given us. Your support has been the pillar of our company.
            </p>

            <p className="mb-4">
              We want to express our sincerest gratitude for the support and trust you have given us. Your support has been the pillar of our company, and as we close this chapter, we want to assure you that this is not the end of our mission.
            </p>
            <p className="mb-4">
              We are reevaluating, learning, and are already charting the path towards a new beginning. We will return stronger, with solutions that better align with market needs and solve our users problems.
            </p>
            <p className="mb-4">Thank you for being part of our journey. Stay tuned for what&aposs to come.</p>
            <p className="font-bold">With gratitude,</p>
            <p>[The Cumbi Team]</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
