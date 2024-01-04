import logo from '.././assets/img/logo.webp'
import FooterMenu from '../Components/FooterMenu';
import FooterSocial from '../Components/FooterSocial';

function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/#" className="flex items-center mb-7" aria-label="Return to homepage.">
                            <img src={logo} className="h-8 me-3" alt="Bioeasy Galenos Logo" />
                        </a>
                        <FooterSocial />
                    </div>
                    <FooterMenu />
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023 <a href="/#" className="hover:underline transition-all">Bioeasy Galenos™</a>. Todos Los Derechos Reservados.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <span className="text-gray-500 text-sm">
                            Desarrollado por <a href="https://jpxoi.com" target='_blank' rel="noreferrer" className="hover:underline transition-all">Jean Paul Fernandez</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;