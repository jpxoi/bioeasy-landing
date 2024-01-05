function RegisterForm() {

    const calculated_price = "S/ 0.00";

    return (
        <div className="container mt-16 mb-16 mx-auto px-4">
            <div className="flex flex-col items-center justify-center pt-8">
                <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-bold">¡IMPORTANTE!</span> Este formulario se encuentra en mantenimiento. Todos los datos enviados por aquí no serán recibidos. Si desea inscribirse, use el formulario temporal dando click <a href="">aquí</a>.
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center py-8">
                <h2 className="text-4xl font-bold text-gray-900">Ficha de Inscripción</h2>

                <form className="w-full max-w-xl mt-8">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Nombres
                            </label>
                            <input required className="appearance-auto block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-first-name" type="text" placeholder="Fabio Alonso" />
                            <p className="text-gray-600 text-xs italic">Nombre completo</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Apellidos
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 mb-3" id="grid-last-name" type="text" placeholder="Rodriguez Anticona" />
                            <p className="text-gray-600 text-xs italic">Apellido paterno y apellido materno</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-type">
                                Tipo de Documento de Identidad
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-document-type" defaultValue="empty">
                                <option value="empty" disabled="disabled">Seleccione</option>
                                <option value="dni">DNI</option>
                                <option value="pasaporte">Pasaporte</option>
                                <option value="carnet_extranjeria">Carnet Extranjería</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-number">
                                Número de Documento de Identidad
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-document-number" type="tel" placeholder="Numero de Documento" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-type">
                                Fecha de Nacimiento
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-document-type" type="date" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-number">
                                Número de Celular
                            </label>
                            <div className="appearance-none flex w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 leading-tight focus:outline-none focus-within:bg-white focus-within:border-teal-700 pointer-events-none mb-3">
                                <div className="flex items-center">+51</div>
                                <input required className="appearance-none ml-2 bg-gray-200 text-gray-700 leading-tight py-3 focus:bg-white focus:outline-none focus:border-none pointer-events-auto" id="grid-document-number" type="tel" placeholder="Número de WhatsApp" />
                            </div>
                            <p className="text-gray-600 text-xs italic">El número debe contar con WhatsApp.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-type">
                                Correo Electrónico
                            </label>
                            <input required className="peer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 mb-3 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500" id="grid-document-type" type="email" placeholder="Correo electrónico" />
                            <p className="mt-2 hidden peer-invalid:block text-red-600 text-xs">
                                Por favor ingrese una dirección de correo electrónico válida.
                            </p>
                            <p className="text-gray-600 text-xs italic">Usa tu correo institucional .edu.pe</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-number">
                                Ciclo de Estudios
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-document-type" defaultValue="empty">
                                <option value="empty" disabled="disabled">Seleccione</option>
                                <option value="1">Ciclo I</option>
                                <option value="2">Ciclo II</option>
                                <option value="3">Ciclo III</option>
                                <option value="4">Ciclo IV</option>
                                <option value="5">Ciclo V</option>
                                <option value="6">Ciclo VI</option>
                                <option value="7">Ciclo VII</option>
                                <option value="8">Ciclo VIII</option>
                                <option value="9">Ciclo IX</option>
                                <option value="10">Ciclo X</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-number">
                                Curso Académico
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-document-type" defaultValue="empty">
                                <option value="empty" disabled="disabled">Seleccione</option>
                                <option value="1">Curso I</option>
                                <option value="2">Curso II</option>
                                <option value="3">Curso III</option>
                                <option value="4">Curso IV</option>
                                <option value="5">Curso V</option>
                                <option value="6">Curso VI</option>
                                <option value="7">Curso VII</option>
                                <option value="8">Curso VIII</option>
                                <option value="9">Curso IX</option>
                                <option value="10">Curso X</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-number">
                                Precio del Curso
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-document-number" type="tel" disabled={true} placeholder={calculated_price} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-number">
                                Método de Pago
                            </label>
                            <div className="flex flex-wrap">
                                <div className="w-full my-1">
                                    <input className="hidden peer" type="radio" id="bank_transfer" name="payment_method" value="bank_transfer" required/>
                                    <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100" htmlFor="bank_transfer">
                                        <span>
                                            Transferencia Bancaria
                                        </span>
                                        <img src='../../public/img/payment/transferencia-icon.svg' />
                                    </label>
                                </div>
                                <div className="w-full my-1">
                                    <input className="hidden peer" type="radio" id="yape" name="payment_method" value="yape" required/>
                                    <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100" htmlFor="yape">
                                        <span>
                                            Yape
                                        </span>
                                        <img src='../../public/img/payment/yape-icon.svg' />
                                    </label>
                                </div>
                                <div className="w-full my-1">
                                    <input className="hidden peer" type="radio" id="plin" name="payment_method" value="plin" required/>
                                    <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100" htmlFor="plin">
                                        <span>
                                            Plin
                                        </span>
                                        <img src='../../public/img/payment/plin-icon.svg' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dropzone-file">
                                Evidencia de Pago
                            </label>
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 file-whithin:bg-red-500">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Haga clic para cargar</span> o arrastre y suelte</p>
                                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="text-sm text-gray-500 hidden file:hidden" required/>
                                </label>
                            </div> 
                        </div>
                    </div>
                    
                    <input className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outlin" type="submit" value="FORMULARIO EN MANTENIMIENTO" disabled="disabled"/>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;