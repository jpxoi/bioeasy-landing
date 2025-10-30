import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router'

function Heading() {
    return (
        <section className="section section__heading flex items-end bg-white p-4 py-20 pb-4 h-dvh" id="inicio">
            <div className="py-4 md:py-8 px-4 lg:px-8 mx-auto max-w-(--breakpoint-xl) text-center">
                <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-balance">
                    El camino hacia la excelencia médica comienza aquí.
                </h1>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Link to="/inscribete" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 transition-all">
                        ¡Inicia tu preparación!

                    </Link>
                    <a href="/#contacto" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-100 hover:text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition-all">
                        Solicitar Información
                    </a>
                </div>
                {/* Scroll To View More */}
                <div className="mt-8 md:mt-16">
                    <p className="text-white text-sm font-medium mb-4">Desliza hacia abajo para ver más</p>
                    <ChevronDownIcon className="w-6 h-6 animate-bounce text-white mx-auto cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} />
                </div>
            </div>
        </section>
    )
}

export default Heading