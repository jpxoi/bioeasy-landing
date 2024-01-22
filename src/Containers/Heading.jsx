function Heading() {
    return (
        <section className="section section__heading flex items-end bg-white p-4 py-20 pb-4 h-dvh" id="inicio">
            <div className="py-4 md:py-8 px-4 lg:px-8 mx-auto max-w-screen-xl text-center">
                <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-balance">
                    El camino hacia la excelencia médica comienza aquí.
                </h1>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="https://forms.gle/EZh7TBknYWh2YRrJ7" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 transition-all">
                        ¡Inicia tu preparación!
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="/#contacto" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-100 hover:text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition-all">
                        Solicitar Información
                    </a>
                </div>
                {/* Scroll To View More */}
                <div className="mt-8 md:mt-16">
                    <p className="text-white text-sm font-medium mb-4">Desliza hacia abajo para ver más</p>
                    <svg className="w-6 h-6 animate-bounce text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6 6-6"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Heading