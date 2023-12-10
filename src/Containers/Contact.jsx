import ContactCard from "../Components/ContactCard"

function Contact() {
  return (
    <section className="section__contact bg-white mt-16 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8" id="contacto">
        <div className="contact__container grid md:grid-cols-2 gap-8">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Contáctanos
                  </h2>
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
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                      ¿Aún tienes dudas?
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500">
                    Escríbenos y nosotros te contactaremos. Te asesoramos para que incies con el pie derecho.
                      </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="name@email.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Asunto</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mensaje</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-700 sm:w-fit hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300">Send message</button>
                    </form>
                </div>
            </div>
    </section>
  )
}

export default Contact