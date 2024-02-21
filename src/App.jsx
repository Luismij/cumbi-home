/* eslint-disable max-len */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from './assets/Cumbi_White_horizontal.png'; // Asegúrate de que la ruta al logo sea correcta

function App() {
  const [idioma, setIdioma] = useState('español');

  return (
    <div className="flex flex-col min-h-screen">
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
              Estamos viviendo una transformación significativa, impulsada por nuestro compromiso con la innovación y nuestra constante búsqueda de eficiencia. Su apoyo ha sido la piedra angular de nuestro viaje, y estamos profundamente agradecidos por ello.
            </p>
            <p className="mb-4">
              Este cambio no significa el fin de nuestra misión, sino un giro hacia un nuevo comienzo lleno de promesas. Con el objetivo de alinearnos más estrechamente con las necesidades del mercado y los desafíos de nuestros usuarios, nos comprometemos a resurgir más fuertes y capaces que antes.
            </p>
            <p className="mb-4">Gracias por su apoyo incondicional. El futuro nos depara desarrollos emocionantes, y los invitamos a seguir conectados con nosotros.</p>
            <p className="font-bold">Con gratitud,</p>
            <p>[El equipo de Cumbi]</p>
          </div>
        ) : (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-iris">Dear Cumbi Community,</h2>
            <p className="mb-4">
              We&apos;re undergoing a significant transformation, driven by our dedication to innovation and our constant pursuit of efficiency. Your support has been the cornerstone of our journey, for which we are immensely grateful.
            </p>
            <p className="mb-4">
              This is not the end of our mission but a pivot towards a promising new beginning. With a focus on aligning more closely with market needs and user challenges, we&apos;re committed to emerging stronger and more capable than before.
            </p>
            <p className="mb-4">Thank you for your unwavering support. The future holds exciting developments, and we invite you to stay connected with us.</p>
            <p className="font-bold">With gratitude,</p>
            <p>[The Cumbi Team]</p>
          </div>

        )}
      </main>
      <footer className="bg-gray-100 text-center p-4 mt-auto">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a href="https://www.linkedin.com/company/cumbi/" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-light-green mx-2" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://www.instagram.com/cumbi.pay" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-light-green mx-2" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://twitter.com/Cumbipay" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-light-green mx-2" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
          <div>
            <p className="text-gray-700">&copy; 2024 [The Cumbi Team]</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
