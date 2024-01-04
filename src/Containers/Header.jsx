import { useEffect, useState } from 'react';
import logo from '.././assets/img/logo.png'
import logo_sm from '.././assets/img/logo_sm.png'
import NavMenu from '../Components/NavMenu';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]")

        function scrollActive() {
            const scrollY = window.scrollY
    
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 128
                const sectionId = current.getAttribute("id")
    
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.getElementById(`selector_${sectionId}`).classList.add("active_link")
                } else {
                    document.getElementById(`selector_${sectionId}`).classList.remove("active_link")
                }
            })
        }

        document.getElementById("aulaVirtualButton").onclick = function () {
            location.href = "https://bgmedicina.com/campusvirtual";
        };
    
        window.addEventListener("scroll", scrollActive)
    }, [])

    return (
        <header className="bg-transparent">
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-20 shadow-md">
                <p className='bg-white'> {mobileMenuOpen}</p>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div>
                        <a href="/#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="sr-only">Bioeasy Galenos</span>
                            <img className="hidden lg:block h-8 w-auto" src={logo} alt="logo" />
                            <img className='lg:hidden h-8 w-auto' src={logo_sm} alt='logo' />
                        </a>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" id="aulaVirtualButton" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                            Campus Virtual
                        </button>

                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false" onClick={ () => setMobileMenuOpen(!mobileMenuOpen) }>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className={`nav__menu items-center justify-between${mobileMenuOpen ? ' ' : ' hidden '}w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <NavMenu />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;