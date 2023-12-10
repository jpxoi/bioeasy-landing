import ContactCard from "../Components/ContactCard"
import ContactForm from "../Components/ContactForm"

function Contact() {
  return (
    <section className="section__contact bg-white mt-16 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8" id="contacto">
      <div className="contact__container grid md:grid-cols-2 gap-8">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contáctanos
          </h2>
          <div className="flex md:flex-col md:space-y-4 md:space-x-0 md:flex-nowrap flex-row justify-around md:justify-center flex-wrap max-w-md">
            <ContactCard
              id="email"
              contact_title="Correo electrónico"
              contact_info="correo@mail.com"
              contact_link="mailto:correo@mail.com"
              contact_cta="Escríbenos"
            />
            <ContactCard
              id="whatssap"
              contact_title="WhatsApp"
              contact_info="+51 986 938 845"
              contact_link="https://wa.me/51986938845"
              contact_cta="Escríbenos"
            />
            <ContactCard
              id="instagram"
              contact_title="Instagram"
              contact_info="@bioeasygalenos"
              contact_link="https://www.instagram.com/bioeasygalenos"
              contact_cta="Síguenos"
            />
            <ContactCard
              id="tiktok"
              contact_title="TikTok"
              contact_info="@bioeasygalenos"
              contact_link="https://www.tiktok.com/@bioeasygalenos"
              contact_cta="Síguenos"
            /> 
          </div>
          
        </div>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            ¿Aún tienes dudas?
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500">
            Escríbenos y nosotros te contactaremos. Te asesoramos para que incies con el pie derecho.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact