function ContactCard(contact_data) {

    const { id, contact_title, contact_info, contact_link, contact_cta } = contact_data

    return (
        <div className="text-center w-52 md:w-60 p-6 bg-white border border-gray-200 rounded-lg shadow" id={id}>
            <a href={contact_link} target="_blank" rel="noreferrer">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {contact_title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500">
                {contact_info}
            </p>
            <a href={contact_link} target="_blank" rel="noreferrer" className="inline-flex items-center text-teal-600 hover:underline">
                {contact_cta || "Ver más"}
                <svg className="ml-1 w-3 h-3 text-teal-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    )
}

export default ContactCard