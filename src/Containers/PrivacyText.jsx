function PrivacyText() {
    const company_name = "Grupo Bioeasy Galenos S.R.L.";
    const company_RUC = "20612319325";
    const company_address = "Mza. I Lote 13 Dpto. 601 Urb. Ingenieria II, Distrito de Trujillo, Provincia de Trujillo, Departamento de La Libertad";
    const company_email = "privacy@bgmedicina.com";
    const company_email_ref = `mailto:${company_email}`;
    const company_url = "https://bgmedicina.com";
    return (
        <div className="container mx-auto px-4 pt-16 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center py-16">
                <h1 className="text-4xl font-bold text-center text-gray-900">Política de privacidad</h1>
                <p className="text-gray-500 text-center mt-4">Última actualización: 4 de enero de 2024</p>
            </div>
            <div className="flex flex-col items-left justify-center py-2 px-0 lg:px-4 max-w-xl sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl">
                <h2 className="text-2xl font-bold text-gray-900">Introducción</h2>                    
                    <p className="text-gray-500 text-left mt-4">{company_name} (“nosotros”, “a nosotros” o “nuestro”) opera el sitio web <a href={company_url}>{company_url}</a> (en adelante, el “Servicio”). Esta página le informa de nuestras políticas en materia de recopilación, uso y divulgación de datos personales cuando utiliza nuestro Servicio y de las opciones de las que dispone en relación con esos datos.</p>
                    
                    <p className="text-gray-500 text-left mt-4">Utilizamos sus datos para prestarle el Servicio y mejorarlo. Al utilizar el Servicio, usted acepta la recopilación y el uso de información de conformidad con esta política. A menos que esta Política de privacidad defina lo contrario, los términos utilizados en ella tienen los mismos significados que nuestros Términos y Condiciones, disponibles en el sitio web <a href={company_url}>{company_url}</a></p>

                    <p className="text-gray-500 text-left mt-4">El responsable por tus datos personales es {company_name}, RUC {company_RUC}, con domicilio en {company_address}.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Definiciones</h2>
                    <ul className="list-disc list-inside text-gray-500 text-left mt-4">
                        <li className="">
                            <strong>Servicio</strong> es el sitio web <a href={company_url}>{company_url}</a> operado por {company_name}.
                        </li>
                        <li>
                            <strong>Datos personales</strong> significa los datos sobre una persona física viva que puede ser identificada a partir de esos datos (o con esos datos y otra información de la que dispongamos o probablemente podamos disponer).
                        </li>
                        <li>
                            <strong>Datos de uso</strong> son los datos recopilados automáticamente, generados por el uso del Servicio o por la propia infraestructura del Servicio (por ejemplo, la duración de la visita a una página).
                        </li>
                        <li>
                            <strong>Cookies</strong> son pequeños archivos almacenados en su dispositivo (ordenador o dispositivo móvil).
                        </li>
                    </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Recopilación y uso de la información</h2>
                    <p className="text-gray-500 text-left mt-4">Recopilamos diferentes tipos de información con diversas finalidades para prestarle el Servicio y mejorarlo.</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8">Tipos de datos recopilados</h3>

                        <h4 className="text-lg font-bold text-gray-900 mt-8">Datos personales</h4>

                            <p className="text-gray-500 text-left mt-4">Cuando utilice nuestro Servicio, es posible que le pidamos que nos proporcione determinada información personalmente identificable que podrá ser utilizada para contactar con usted o para identificarle (“Datos personales”). La información personalmente identificable puede incluir, entre otras, la siguiente:</p>

                            <ul className="list-disc list-inside text-gray-500 text-left mt-4">
                                <li>Dirección de correo electrónico</li>
                                <li>Nombre y apellidos</li>
                                <li>Número de teléfono</li>
                                <li>Dirección, localidad, provincia, código postal, ciudad</li>
                                <li>Cookies y datos de uso</li>
                            </ul>

                        <h4 className="text-lg font-bold text-gray-900 mt-8">Datos de uso</h4>

                            <p className="text-gray-500 text-left mt-4">También recopilamos información sobre la forma en la que se accede y utiliza el Servicio («Datos de uso»). Estos Datos de uso pueden incluir información como la dirección del protocolo de Internet de su ordenador (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las páginas que visita de nuestro Servicio, la hora y la fecha de su visita, el tiempo que pasa en esas páginas, identificadores exclusivos de dispositivos y otros datos de diagnóstico.</p>

                        <h4 className="text-lg font-bold text-gray-900 mt-8">Datos de cookies y seguimiento</h4>

                            <p className="text-gray-500 text-left mt-4">Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad de nuestro Servicio y mantener determinada información.</p>

                            <p className="text-gray-500 text-left mt-4">Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador exclusivo anónimo. Las cookies son enviadas a su navegador desde un sitio web y se almacenan en su dispositivo. Otras tecnologías de seguimiento también utilizadas son balizas, etiquetas y scripts para recopilar y rastrear la información, así como para mejorar y analizar nuestro Servicio.</p>

                            <p className="text-gray-500 text-left mt-4">Usted puede ordenar a su navegador que rechace todas las cookies o que le avise cuando se envía una cookie. Sin embargo, si no acepta cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio.</p>

                            <p className="text-gray-500 text-left mt-4">Ejemplos de Cookies que utilizamos:</p>

                                <ul className="list-disc list-inside text-gray-500 text-left mt-4">       
                                    <li><strong>Cookies de preferencia.</strong> Utilizamos Cookies de preferencia para recordar sus preferencias y diversos ajustes.</li>
                                    <li><strong>Cookies de seguridad.</strong> Utilizamos Cookies de seguridad para fines de seguridad.</li>
                                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Uso de datos</h2>
                    <p className="text-gray-500 text-left mt-4">{company_name} utiliza los datos recopilados con diversas finalidades:</p>

                    <ul className="list-disc list-inside text-gray-500 text-left mt-4">
                        <li>Suministrar y mantener nuestro Servicio</li>
                        <li>Notificarle cambios en nuestro Servicio</li>
                        <li>Permitirle participar en funciones interactivas de nuestro Servicio cuando decida hacerlo</li>
                        <li>Prestar asistencia al cliente</li>
                        <li>Recopilar análisis o información valiosa que nos permitan mejorar nuestro Servicio</li>
                        <li>Controlar el uso de nuestro Servicio</li>
                        <li>Detectar, evitar y abordar problemas técnicos</li> 
                    </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Transferencia de datos</h2>
                    <p className="text-gray-500 text-left mt-4">Su información, incluyendo Datos personales, puede ser transferida a —y mantenida en— ordenadores localizados fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción.</p>

                    <p className="text-gray-500 text-left mt-4">Si usted se encuentra fuera de Peru y decide facilitarnos información, tenga en cuenta que nosotros transferimos los datos, incluyendo Datos personales, a Peru y que los tratamos allí.</p>

                    <p className="text-gray-500 text-left mt-4">Su aceptación de esta Política de privacidad seguida de su envío de esta información representa que está de acuerdo con dicha transferencia.</p>

                    <p className="text-gray-500 text-left mt-4">{company_name} emprenderá todas las medidas razonables necesarias para garantizar que sus datos sean tratados de forma segura y de conformidad con esta Política de privacidad y no se realizará ninguna transferencia de sus Datos personales a una organización o país, salvo que existan unos controles adecuados establecidos incluyendo la seguridad de sus datos y otra información personal.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Divulgación de datos</h2>
                    <h3 className="text-xl font-bold text-gray-900 mt-8">Requisitos legales</h3>
                        <p className="text-gray-500 text-left mt-4">{company_name} puede divulgar sus Datos personales de buena fe cuando considere que esta acción es necesaria para lo siguiente:</p>

                        <ul className="list-disc list-inside text-gray-500 text-left mt-4">
                            <li>Cumplir una obligación legal</li>
                            <li>Proteger y defender los derechos o bienes de {company_name}</li>
                            <li>Prevenir o investigar posibles infracciones en relación con el Servicio</li>
                            <li>Proteger la seguridad personal de usuarios del Servicio o del público</li>
                            <li>Protegerse frente a consecuencias legales</li>
                        </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Seguridad de los datos</h2>
                    <p className="text-gray-500 text-left mt-4">La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico resulta 100% seguro. A pesar de que nos esforzamos por utilizar medios comercialmente aceptables para proteger sus Datos personales, no podemos garantizar su seguridad absoluta.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Proveedores de servicios</h2>
                    <p className="text-gray-500 text-left mt-4">Podemos contratar a personas físicas y jurídicas terceras para facilitar nuestro Servicio (“Proveedores de servicios”), para que presten el Servicio en nuestro nombre, para que suministren servicios relacionados con el Servicio o para que nos ayuden a analizar cómo se utiliza nuestro Servicio.</p>

                    <p className="text-gray-500 text-left mt-4">Estos terceros tienen acceso a sus Datos personales únicamente para realizar estas tareas en nuestro nombre y están obligados a no divulgarlos ni utilizarlos con ningún otro fin.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8">Analítica</h3>
                    <p className="text-gray-500 text-left mt-4">Podemos utilizar Proveedores de servicios terceros para controlar y analizar el uso de nuestro Servicio.</p>

                    <ul className="list-disc list-inside text-gray-500 text-left mt-4">
                        <li>
                            <strong>Google Analytics</strong>
                            <p className="text-gray-500 text-left mt-4">Google Analytics es un servicio de analítica web ofrecido por Google que rastrea e informa del tráfico de los sitios web. Google utiliza los datos recopilados para rastrear y controlar el uso de nuestro Servicio. Estos datos son compartidos con otros servicios de Google. Google puede utilizar los datos recopilados para contextualizar y personalizar los anuncios de su propia red de publicidad.</p>
                            <p className="text-gray-500 text-left mt-4">Puede optar por que su actividad en el Servicio no esté disponible para Google Analytics instalando el complemento de inhabilitación para el navegador. Este complemento evita que el JavaScript de Google Analytics (ga.js, analytics.js y dc.js) comparta información con Google Analytics sobre la actividad de las visitas.</p>
                            <p className="text-gray-500 text-left mt-4">Para más información sobre las prácticas de privacidad de Google, visite la página web de Privacidad y Condiciones de Google: <a href="https://policies.google.com/privacy?hl=es" rel="noopener noreferrer" target="_blank">https://policies.google.com/privacy?hl=es</a></p>
                        </li>
                    </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Enlaces a otros sitios</h2>
                    <p className="text-gray-500 text-left mt-4">Nuestro Servicio puede contener enlaces a otros sitios que no son operados por nosotros. Si hace clic en el enlace de un tercero, será dirigido al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de privacidad de todos los sitios que visite.</p>
                    <p className="text-gray-500 text-left mt-4">No tenemos ningún control ni asumimos responsabilidad alguna con respecto al contenido, las políticas o prácticas de privacidad de sitios o servicios de terceros.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Privacidad del menor</h2>
                    <p className="text-gray-500 text-left mt-4">Nuestro servicio no está dirigido a ningún menor de 18 años (en adelante, “Menor”).</p>
                    <p className="text-gray-500 text-left mt-4">No recopilamos de forma consciente información personalmente identificable de menores de 18 años. Si usted es un padre/madre o tutor y tiene conocimiento de que su hijo nos ha facilitado Datos personales, contacte con nosotros. Si tenemos conocimiento de que hemos recopilado Datos personales de menores sin verificación del consentimiento parental, tomamos medidas para eliminar esa información de nuestros servidores.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Cambios en esta Política de privacidad</h2>
                    <p className="text-gray-500 text-left mt-4">Podemos actualizar nuestra Política de privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva Política de privacidad en esta página.</p>
                    <p className="text-gray-500 text-left mt-4">Le informaremos a través del e-mail y/o de un aviso destacado sobre nuestro Servicio antes de que el cambio entre en vigor y actualizaremos la «fecha efectiva» en la parte superior de esta Política de privacidad.</p>
                    <p className="text-gray-500 text-left mt-4">Le recomendamos que revise esta Política de privacidad periódicamente para comprobar si se ha introducido algún cambio. Los cambios en esta Política de privacidad entran en vigor cuando se publican en esta página.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">Contacte con nosotros</h2>
                    <p className="text-gray-500 text-left mt-4">Si tiene alguna pregunta sobre esta Política de privacidad, contacte con nosotros:</p>

                    <ul className="list-disc list-inside text-gray-500 text-left mt-4">
                        
                        <li>Por correo electrónico: {" "}
                                <strong>
                                    <a href={company_email_ref}>
                                        {company_email}
                                    </a>
                                </strong>
                        </li>

                    </ul>
            </div>
        </div>
    )
}

export default PrivacyText