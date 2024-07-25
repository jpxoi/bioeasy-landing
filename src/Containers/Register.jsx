import { useEffect, useState } from "react";
import RegisterForm from "../Components/RegisterForm";
import { generateIdentifier } from "../Utils/RegistrationFormUtils";
import { InformationCircleIcon } from '@heroicons/react/16/solid';

function Register() {
  const [orderIdentifier, setOrderIdentifier] = useState("");

  useEffect(() => {
    // Function to set the identifier in the HTML
    function setIdentifier() {
      const newIdentifier = generateIdentifier();
      setOrderIdentifier(newIdentifier);
    }

    setIdentifier();
  }, []);

  return (
    <div className="container mt-16 mb-16 mx-auto px-4">
      {/* <div className="flex flex-col items-center justify-center pt-8">
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-bold">¡IMPORTANTE!</span> Este formulario se
            encuentra en mantenimiento. Todos los datos enviados por aquí no
            serán recibidos. Si desea inscribirse, contáctese con el equipo de
            Bioeasy Galenos via WhatsApp.
          </div>
        </div>
      </div> */}

      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Ficha de Inscripción
        </h2>
        <p className="text-gray-600 mt-1 mb-2">
          Llene el siguiente formulario para inscribirse en el curso de su
          preferencia.
        </p>

        <div className="flex flex-col items-center justify-center mt-4">
          <div className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-md">
            <InformationCircleIcon className="w-4 h-4 me-2" />
            <span className="sr-only">Info</span>
            <div>
              <span className="font-bold">Identificador de Inscripción: </span>
              <span id="order_identifier">{orderIdentifier}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-xs italic mt-1 mb-2">
          Este identificador es único y personal. Por favor, guárdelo para
          futuras referencias.
        </p>

        <RegisterForm orderIdentifier={orderIdentifier} />
      </div>
    </div>
  );
}

export default Register;
