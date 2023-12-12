function Heading() {
    return (
        <section className="section section__heading bg-white p-4 py-20 pt-80 md:py-28 md:pt-80 lg:py-32 lg:pt-96" id="inicio">
            <div className="py-8 px-4 mt-16 md:mt-40 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Más que una academia, somos una familia.
                </h1>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="https://google.com" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300">
                        ¡Inicia tu preparación!
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="/#contacto" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-100 hover:text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                        Solicitar Información
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Heading