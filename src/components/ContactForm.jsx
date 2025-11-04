function ContactForm() {
  return (
    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
      <div>
        <input type="hidden" name="access_key" value="cfd4f031-74bc-4e52-a430-cc1040f5d906" />
        <input type="hidden" name="from_name" value="Bioeasy Galenos - Formulario de Contacto" />

        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Correo electrónico
        </label>
        <input type="email" id="email" name="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="tunombre@email.com" required />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
          Asunto
        </label>
        <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-xs focus:ring-teal-500 focus:border-teal-500" placeholder="¿Cómo podemos ayudarte?" required />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
          Mensaje
        </label>
        <textarea id="message" rows="6" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-xs border border-gray-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Escribe más detalles aquí." minLength="20" required></textarea>
      </div>

      <input type="hidden" name="redirect" value="https://bgmedicina.com/success?type=contact" />

      <p className="mt-4 text-xs font-light text-justify text-gray-500">
        Considerando la vigencia del Decreto Legislativo Nº 1390 (Restricciones a la difusión de publicidad masiva) y, siendo <strong>Bioeasy Galenos</strong> respetuoso del ordenamiento jurídico vigente, le solicitamos nos brinde su consentimiento para mantenerlo informado acerca de nuestros diferentes servicios a través del envío de nuestra publicidad. La información brindada se utilizará exclusivamente para el envío de publicidad, por lo que se encontrará protegida por la Ley Nº 29733 - Ley de Protección de datos personales.
      </p>

      <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-700 sm:w-fit hover:bg-teal-800 focus:ring-4 focus:outline-hidden focus:ring-teal-300 transition-all">
        Enviar Mensaje
      </button>
    </form>
  )
}

export default ContactForm