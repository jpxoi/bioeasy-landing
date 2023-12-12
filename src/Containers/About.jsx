function About() {
  return (
    <section className="section section__about mt-8 bg-white mx-auto w-full max-w-screen-xl p-4 py-6 pt-24 lg:py-8 lg:pt-28" id="nosotros">
        <h1 className="text-center mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
            Nosotros
        </h1>
        <div className="about__container grid md:grid-cols-2 gap-8">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <p className="mb-1 lg:mb-2 font-light text-center text-gray-500">
                  Fundada en el 2017 con el objetivo de innovar y ofrecer una preparación académica de calidad a estudiantes de medicina a nivel local.
                </p>
                <p className="mb-1 lg:mb-2 font-light text-center text-gray-500">
                  Creemos en el potencial de nuestros estudiantes y hemos diseñado un método de estudio efectivos para que los estudiantes puedan rendir con éxito los diferentes exámenes de la carrera de Medicina.
                </p>
            </div>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <img className="w-full h-full rounded-md" src="https://a.fsdn.com/con/app/proj/testimages/screenshots/img_640x360_3x8bit_RGB_color_SMPTE_RP_219_2002.png/max/max/1 " alt="about" />
            </div>
        </div>  
    </section>
  )
}

export default About