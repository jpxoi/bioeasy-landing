function ContactSuccessContainer() {

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-900">¡Se ha enviado tu mensaje con éxito!</h1>
            <p className="text-gray-600 mt-2">Uno de nuestros asesores se pondrá en contacto contigo en breve.</p>

            <a href="/" className="mt-4 px-8 py-3 bg-teal-700 text-white font-medium rounded-lg hover:bg-teal-800 transition-all">Volver al inicio</a>
        </div>
    )
}

export default ContactSuccessContainer;