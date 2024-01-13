function Error404Message() {
    return (
        <div className="container mt-16 mx-auto px-4 py-16">
            <div className="flex flex-col items-center justify-center">
                <img src="/img/illustrations/404.svg" alt="404" className="w-96" />
            </div>
            <div className="flex flex-col items-center justify-center pt-16 pb-4">
                <h1 className="text-9xl font-bold text-gray-900">404</h1>
                <h2 className="text-4xl font-medium text-gray-900">Página no encontrada</h2>
                <p className="text-gray-500 text-center mt-4">La página que estás buscando no existe o no está disponible.</p>
                <a href="/" className="mt-8 px-8 py-3 bg-teal-700 text-white font-medium rounded-full hover:bg-teal-800 transition-all">Volver al inicio</a>
            </div>
        </div>
    )
}

export default Error404Message