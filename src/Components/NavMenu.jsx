function NavMenu() {
    return (
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
                <a href="/#inicio" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 active_link" id="selector_inicio">Inicio</a>
            </li>
            <li>
                <a href="/#nosotros" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0" id="selector_nosotros">Nosotros</a>
            </li>
            <li>
                <a href="/#cursos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0" id="selector_cursos">Cursos</a>
            </li>
            <li>
                <a href="/#docentes" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0" id="selector_docentes">Docentes</a>
            </li>
            <li>
                <a href="/#contacto" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0" id="selector_contacto">Contáctanos</a>
            </li>
        </ul>
    )
}

export default NavMenu