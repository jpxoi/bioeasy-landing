function FooterMenu() {

    return (
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            {/*<div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Resources
                </h2>
                <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                        <a href="https://flowbite.com/" className="hover:underline">
                            Flowbite
                        </a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                </ul>
            </div>*/}
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Síguenos
                </h2>
                <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                        <a href="https://instagram.com/bioeasygalenos" target="_blank" rel="noreferrer" className="hover:underline ">Instagram</a>
                    </li>
                    <li>
                        <a href="https://tiktok.com/@bioeasygalenos" target="_blank" rel="noreferrer" className="hover:underline">TikTok</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                        <a href="/privacy" className="hover:underline">
                            Política de Privacidad
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instructure.com/policies/terms-of-use" className="hover:underline">
                            Términos y Condiciones
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterMenu