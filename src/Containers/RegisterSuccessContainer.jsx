function RegisterSuccessContainer() {

    const order_identifier =  new URLSearchParams(window.location.search).get('id');
    console.log(order_identifier);

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-900">¡Tu inscripción se ha registrado con éxito!</h1>
            <p className="text-gray-600 mt-2">Estamos validando tus datos. En breve recibirás un correo electrónico con la información de tu inscripción.</p>

            <div className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-md mt-4">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-bold">Identificador de Inscripción: </span><span id="order_identifier">{order_identifier}</span>
                </div>
            </div>
            <p className="text-gray-600 text-xs italic mt-1 mb-2">Guarde este identificador para futuras referencias.</p>

            <a href="/" className="mt-4 px-8 py-3 bg-teal-700 text-white font-medium rounded-lg hover:bg-teal-800 transition-all">Volver al inicio</a>
        </div>
    )
}

export default RegisterSuccessContainer;