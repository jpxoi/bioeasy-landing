function About() {
  return (
    <section className="section section__about mt-8 bg-white mx-auto w-full max-w-screen-xl p-4 py-6 pt-24 lg:py-8 lg:pt-28" id="nosotros">
        <h1 className="text-center mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
            Nosotros
        </h1>
        <div className="about__container grid lg:grid-cols-2 gap-0 md:gap-8">
            <div className="py-8 lg:pt-8 lg:pb-0 px-4 mx-auto max-w-screen-md">
                <p className="mb-1 lg:mb-2 font-light text-justify text-gray-700">
                  Fundada en el 2017 con el objetivo de innovar y ofrecer una preparación académica de calidad a estudiantes de medicina a nivel local.
                </p>
                <p className="mb-3 lg:mb-4 font-light text-justify text-gray-700">
                  Creemos en el potencial de nuestros estudiantes y hemos diseñado un método de estudio efectivos para que los estudiantes puedan rendir con éxito los diferentes exámenes de la carrera de Medicina.
                </p>
                <h3 className="mb-1 lg:mb-2 font-bold text-left text-gray-900 text-lg">
                  Nuestra experiencia nos respalda
                </h3>
                <p className="mb-1 lg:mb-2 font-light text-justify text-gray-700">
                Más de 1000 estudiantes de 1º a 12º ciclo de UPAO forman parte de la comunidad BG.
                </p>

            </div>
            <div className="py-8 lg:pt-8 lg:pb-0 px-4 mx-auto max-w-screen-md">
                <img className="w-full rounded-md" src="img/web_bg_alt.webp" alt="about" />
            </div>
        </div>  
    </section>
  )
}

export default About