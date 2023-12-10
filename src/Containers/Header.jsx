import { useState } from 'react';
import logo from '.././assets/logo.png'
import logo_sm from '.././assets/logo_sm.png'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-20">
                <p className='bg-white'> {mobileMenuOpen}</p>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div>
                        <a href="/#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="sr-only">Bioeast&Galenos</span>
                            <img className="hidden sm:block h-8 w-auto" src={logo} alt="logo" />
                            <img className='sm:hidden h-8 w-auto' src={logo_sm} alt='logo' />
                        </a>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                            Aula Virtual
                        </button>

                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false" onClick={ () => setMobileMenuOpen(!mobileMenuOpen) }>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between${mobileMenuOpen ? ' ' : ' hidden '}w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="/#" className="block py-2 px-3 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0" aria-current="page">Inicio</a>
                            </li>
                            <li>
                                <a href="/#nosotros" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 ">Nosotros</a>
                            </li>
                            <li>
                                <a href="/#cursos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0">Cursos</a>
                            </li>
                            <li>
                                <a href="/#docentes" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0">Docentes</a>
                            </li>
                            <li>
                                <a href="/#contacto" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0">Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;