import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <section className="section section__contact bg-white mt-8 mx-auto w-full max-w-(--breakpoint-xl) p-4 py-6 pt-24 lg:py-8 lg:pt-28" id="contacto">
      <div className="contact__container grid md:grid-cols-2 gap-8">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-(--breakpoint-md)">
          <h2 className="text-center mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
            Contáctanos
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4 justify-items-center">
            <ContactCard
              id="email_contact"
              contact_title="Correo electrónico"
              contact_info="informes@bgmedicina.com"
              contact_link="mailto:informes@bgmedicina.com"
              contact_cta="Escríbenos"
            />
            <ContactCard
              id="whatssap"
              contact_title="WhatsApp"
              contact_info="+51 940 256 869"
              contact_link="https://wa.me/51940256869"
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
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-(--breakpoint-md)">
          <h2 className="text-center mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
            ¿Aún tienes dudas?
          </h2>
          <p className="mb-8 font-light text-center text-gray-500">
            Escríbenos y nosotros te contactaremos. Te asesoramos para que inicies con el pie derecho.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact