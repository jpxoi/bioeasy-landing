import WhyCard from "../Components/WhyCard"

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
              <picture className="w-full rounded-md">
                <source srcSet="img/web_bg_alt.avif" type="image/avif" />
                <source srcSet="img/web_bg_alt.webp" type="image/webp" />
                <img className="w-full rounded-md" src="img/web_bg_alt.webp" alt="about" width="1600" height="900" loading="lazy" decoding="async" />
              </picture>
            </div>
        </div>
        <div className="about__container py-8 lg:pt-16 lg:pb-0 px-4 mx-auto max-w-screen-xl">
          <h3 className="mb-4 lg:mb-8 font-bold text-center text-gray-900 text-2xl">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            <WhyCard
              key="1"
              why_description="Garantizamos el éxito de los estudiantes en sus desafíos académicos durante la universidad."
            />
            <WhyCard
              key="2"
              why_description="Elevamos la satisfacción de nuestros estudiantes al máximo en todos nuestros cursos."
            />
            <WhyCard
              key="3"
              why_description="Perseguimos la innovación constante en nuestro enfoque académico para destacar en todos los cursos."
            />
            <WhyCard
              key="4"
              why_description="Revolucionamos la enseñanza de la Medicina mediante métodos didácticos e innovadores."
            />
          </div>
        </div>
    </section>
  )
}

export default About