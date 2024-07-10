/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from "react";
import { FileUploaderMinimal } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import FetchCSVData from '../Handlers/FetchCSVData';
import Skeleton from 'react-loading-skeleton';
import es from "../locale/es";

function RegisterForm({ orderIdentifier }) {
    const [coursesMounted, setCoursesMounted] = useState(false);
    const [files, setFiles] = useState([]);
    const [paymentNeeded, setPaymentNeeded] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState("");
    
    const cycleSelected =  new URLSearchParams(window.location.search).get("ciclo");
    const courseSelected =  new URLSearchParams(window.location.search).get('course');

    const coursesDataURL = import.meta.env.VITE_FORM_DATA_URL;
    const coursesData = FetchCSVData(coursesDataURL);

    // On page load and when coursesData is fetched, set coursesMounted to true and render reCAPTCHA
    useEffect(() => {
        if (coursesData) {
            setCoursesMounted(true);
        }

        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }, [coursesData]);

    // Function to calculate max date for date of birth input field (min 16 years old)
    const calculateMaxDate = (minAge) => {
        const today = new Date();
        const yyyy = today.getFullYear() - minAge;
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }

    const maxDate = calculateMaxDate(15); // Min age of 15 years old

    // Function to handle the file upload
    const handleEvidenceUpload = (items) => {
        setFiles([...items.allEntries.filter((file) => file.status === 'success')]);
    };

    const handleSubmission = (e) => {
        const evidenceErrorMessage = document.getElementById("evidence-error-message");
        const captchaErrorMessage = document.getElementById("captcha-error-message");
        const paymentMethodErrorMessage = document.getElementById("payment-method-error-message");
        const submitButton = document.getElementById("submit-button");

        let hasError = false;

        // eslint-disable-next-line no-undef
        if (typeof turnstile === "undefined" || !turnstile.getResponse()) {
            captchaErrorMessage.classList.remove("hidden");
            hasError = true;
        } else {
            captchaErrorMessage.classList.add("hidden");
        }

        if (files.length === 0 && paymentNeeded) {
            evidenceErrorMessage.classList.remove("hidden");
            hasError = true;
        } else {
            evidenceErrorMessage.classList.add("hidden");
        }

        if (paymentMethod === "" && paymentNeeded) {
            paymentMethodErrorMessage.classList.remove("hidden");
            hasError = true;
        }  else {
            paymentMethodErrorMessage.classList.add("hidden");
        }

        if (orderIdentifier === "") {
            alert("Error: No se pudo generar el identificador de inscripción. Por favor, intente nuevamente.");
            hasError = true;
        }

        if (hasError) {
            e.preventDefault();
            return;
        }

        submitButton.disabled = true;
        submitButton.value = "Enviando...";
    };

    const addInvalidClasses = () => {
        const phoneNumberContainer = document.getElementById("phone-number-container");
        const inputs = document.querySelectorAll("input, select, textarea");

        inputs.forEach(input => {
            if (input.required) {
                input.classList.add("invalid:border-red-500");
            }
        });
        phoneNumberContainer.classList.add("has-[:invalid]:border-red-500");
    }

    const formatPrice = (price, currency) => {
        const formatters = {
            PEN: new Intl.NumberFormat('es-PE', { style: 'currency', currency }),
            USD: new Intl.NumberFormat('en-US', { style: 'currency', currency }),
        };

        return formatters[currency]?.format(price) ?? price;
    };

    const filterCourses = useCallback(() => {
        const course_select = document.getElementById('grid-course-select');
        const cycle_select = document.getElementById('grid-cycle-select');
        const selectedCycle = cycle_select?.value;

        Array.from(course_select.options).forEach(option => {
            const course = coursesData.find(course => course.id === option.value);
            if (course?.cycle === selectedCycle && course.available === 'TRUE') {
                option.disabled = false;
                option.classList.remove("hidden");
            } else {
                option.disabled = true;
                option.classList.add("hidden");
            }
        });

        course_select.value = "";
        resetPrice();
    }, [coursesData]);

    const calculatePrice = useCallback(() => {
        const course_select = document.getElementById('grid-course-select');
        const course_price = document.getElementById('grid-course-price');
        const submitButton = document.getElementById("submit-button");
        const consultDisclaimer = document.getElementById("consult-disclaimer");
        const selectedCourse = course_select?.value;
        const course = coursesData.find(course => course.id === selectedCourse);

        if (course) {
            switch (course.price) {
                case '0':
                case 'GRATUITO':
                case 'GRATIS':
                    setPaymentNeeded(false);
                    course_price.value = "GRATUITO";
                    break;
                case 'CONSULTAR':
                    setPaymentNeeded(false);
                    course_price.value = "CONSULTAR CON UN ASESOR";
                    consultDisclaimer.classList.remove("hidden");
                    break;
                default:
                    setPaymentNeeded(true);
                    course_price.value = formatPrice(course.price, 'PEN');
                    consultDisclaimer.classList.add("hidden");
            }

            submitButton.disabled = false;
        } else {
            resetPrice();
        }
    }, [coursesData]);

    const resetPrice = () => {
        const course_price = document.getElementById('grid-course-price');
        course_price.value = "";
    };

    useEffect(() => {
        if (courseSelected && coursesMounted) {
            calculatePrice();
        }

        const course_select = document.getElementById('grid-course-select');
        const cycle_select = document.getElementById('grid-cycle-select');
        
        course_select?.addEventListener("change", calculatePrice);
        cycle_select?.addEventListener("change", filterCourses);
        
        course_select?.addEventListener("change", calculatePrice);
        cycle_select?.addEventListener("change", filterCourses);

        return () => {
            course_select?.removeEventListener("change", calculatePrice);
            cycle_select?.removeEventListener("change", filterCourses);
        };
    }, [coursesMounted, courseSelected, calculatePrice, filterCourses]);

    return (
        <form className="w-full max-w-xl mt-8" action="https://submit-form.com/XdEPgIgpT" method="POST" onSubmit={handleSubmission}>
            <input type="hidden" name="_redirect" defaultValue={`https://bgmedicina.com/success?type=register&id=${orderIdentifier}`} />
            <input type="hidden" name="_append" value="false" />
            <input type="hidden" name="_email.subject" value="Se ha inscrito un nuevo alumno" />
            <input type="hidden" name="_email.from" value="Sistema de Matrículas BG Medicina" />

            <input type="hidden" name="order_identifier" id="grid-order-identifier" defaultValue={orderIdentifier} />

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Nombres
                    </label>
                    <input required className="appearance-auto block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700" id="grid-first-name" type="text" name="first_name" placeholder="Juan Jesus" autoComplete="given-name" />
                    <p className="text-gray-600 text-xs italic">Tal y como aparece en tu documento de identidad</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Apellidos
                    </label>
                    <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 mb-2 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700" id="grid-last-name" type="text" name="last_name" placeholder="Perez Rodriguez" autoComplete="family-name" />
                    <p className="text-gray-600 text-xs italic">Apellido paterno y apellido materno</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-type">
                        Tipo de Documento de Identidad
                    </label>
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700" required id="grid-document-type" name="document_type" defaultValue="">
                        <option value="" disabled="disabled">Seleccione</option>
                        <option value="dni">DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="carnet_extranjeria">Carnet de Extranjería</option>
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-number">
                        Número de Documento de Identidad
                    </label>
                    <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700" id="grid-document-number" name="document_number" type="tel" minLength="8" placeholder="Número de Documento" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-date-of-birth">
                        Fecha de Nacimiento
                    </label>
                    <input required className="appearance-none block w-full h-[46px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700" max={maxDate} id="grid-date-of-birth" name="date_of_birth" type="date" placeholder="dd/mm/yyyy" autoComplete="bday" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone-number">
                        Número de Celular
                    </label>
                    <div id="phone-number-container" className="appearance-none flex w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 leading-tight focus:outline-none focus-within:bg-white focus-within:border-teal-700 pointer-events-none mb-2 has-[:focus:invalid]:bg-red-50 has-[:focus:invalid]:border-red-500 has-[:focus:valid]:bg-green-50 has-[:focus:valid]:border-green-500 has-[:valid]:border-teal-700">
                        <div className="flex items-center">
                            <svg
                                width="18"
                                height="12"
                                xmlns="http://www.w3.org/2000/svg"
                                id="Flag_of_Peru">
                                <rect height="12" width="18" fill="#D91023" x="0" y="0" />
                                <rect height="12" width="6" fill="white" x="6" y="0" />
                            </svg> 
                        </div>
                        <div className="flex items-center ml-2">+51</div>   
                        <input required className="peer appearance-none ml-2 bg-gray-200 text-gray-700 leading-tight py-3 focus:bg-white focus:outline-none focus:border-none pointer-events-auto w-full focus-visible:invalid:bg-red-50 focus-visible:valid:bg-green-50" id="grid-phone-number" name="phone_number" type="tel" placeholder="912 345 678" pattern="^\d{9}$" autoComplete="tel"/>
                    </div>
                    <p className="text-gray-600 text-xs italic">El número debe contar con WhatsApp.</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        Correo Electrónico
                    </label>
                    <input required className="peer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 mb-2 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700" id="grid-email" type="email" name="email" placeholder="alumno@tuuniversidad.edu.pe" pattern=".+@.+edu\.pe" autoComplete="email" />
                    <p className="text-gray-600 text-xs italic peer-focus:peer-invalid:text-red-500 peer-valid:text-teal-700">Usa tu correo institucional .edu.pe</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-cycle-select">
                        Ciclo de Estudios
                    </label>
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700" required id="grid-cycle-select" name="cycle" defaultValue={cycleSelected ? cycleSelected : ""}>
                        <option value="" disabled="disabled">Seleccione</option>
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
                <div className="w-full px-3 leading-none">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-course-select">
                        Curso Académico
                    </label>
                    {coursesData ? "" : <Skeleton className="mb-2" height={46} />}
                    {coursesData ? <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700 mb-2 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700" required id="grid-course-select" name="course" defaultValue={courseSelected ? courseSelected : ""}>
                        <option value="" disabled="disabled">Seleccione</option>
                        {coursesData ? coursesData.map((course, index) => {
                            if (course.available == "TRUE") {
                                // eslint-disable-next-line react/no-unknown-property
                                return <option key={index} category={course.cycle} value={course.id}>{course.name}</option>
                            }
                        }) : console.log("Loading Courses Data...")}
                    </select> : "" }
                    <p className="text-gray-600 text-xs italic">Los cursos disponibles pueden variar según el ciclo de estudios seleccionado.</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-course-price">
                        Precio del Curso
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 placeholder:font-normal font-bold text-teal-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-200 mb-2" id="grid-course-price" name="price" type="text" readOnly placeholder="S/ 0.00" />
                    <p className="text-gray-600 text-xs italic">El precio del curso se calcula automáticamente según el curso seleccionado.</p>
                </div>
            </div>
            <div id ="payment-method-section" className={`flex flex-wrap -mx-3 mb-6 ${paymentNeeded ? "" : "hidden"}`}>
                <div className="w-full px-3">
                    <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 cursor-default">
                        Método de Pago
                    </span>
                    <div className="flex flex-wrap">
                        <div className="w-full my-1">
                            <input className="hidden peer" type="radio" id="bank_transfer" name="payment-method" value="bank_transfer" required={paymentNeeded} onClick={() => setPaymentMethod("bank_transfer")} />
                            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100" htmlFor="bank_transfer">
                                <span>
                                    Transferencia Bancaria
                                </span>
                                <img src='/img/payment/transferencia-icon.svg' />
                            </label>
                        </div>
                        <div id="bank-details" className={`w-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-4 mb-2 ${paymentMethod === "bank_transfer" ? "flex" : "hidden"}`}>
                            <div className="flex flex-wrap">
                                <div id="bank-data" className="flex flex-col align-center mb-2">
                                    <p className="text-sm text-pretty text-gray-500">Realice su pago directamente a cualquiera de nuestras cuentas bancarias. Por favor <strong>use su identificador de inscripción como referencia de pago</strong>. Su matrícula no será confirmada hasta que los fondos hayan sido recibidos en nuestra cuenta.</p>
                                </div>
                                <div className="w-full my-1">
                                    <h3 className="text-sm font-semibold text-gray-700">Banco de Crédito del Perú</h3>
                                    <div id="bcp-data" className="flex align-center bg-white px-2 py-2 rounded-md my-1">
                                        <div className="flex items-center justify-center max-w-8 mx-1">
                                            <img src='/img/payment/bcp-icon.svg' />
                                        </div>
                                        <div id="separator" className="w-px bg-gray-300 mx-1"></div>
                                        <div className="flex flex-col justify-center mx-1">
                                            <p className="text-xs text-gray-500">Número de Cuenta: 570-07421883-0-05</p>
                                            <p className="text-xs text-gray-500">CCI: 002-5701074218830-0-501</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full my-1">
                                    <h3 className="text-sm font-semibold text-gray-700">BBVA</h3>
                                    <div id="bbva-data" className="flex align-center bg-white px-2 py-2 rounded-md mt-1">
                                        <div className="flex items-center justify-center max-w-8 mx-1">
                                            <img src='/img/payment/bbva-icon.svg' />
                                        </div>
                                        <div id="separator" className="w-px bg-gray-300 mx-1"></div>
                                        <div className="flex flex-col justify-center mx-1">
                                            <p className="text-xs text-gray-500">Número de Cuenta: 0011-0918-0200306237</p>
                                            <p className="text-xs text-gray-500">CCI: 011-918-00020030623705</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-1">
                            <input className="hidden peer" type="radio" id="yape" name="payment-method" value="yape" required={paymentNeeded} onClick={() => setPaymentMethod("yape")} />
                            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100" htmlFor="yape">
                                <span>
                                    Yape
                                </span>
                                <img src='/img/payment/yape-icon.svg' />
                            </label>
                        </div>
                        <div id="yape-details" className={`w-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-4 mb-2 ${paymentMethod === "yape" ? "flex" : "hidden"}`}>
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                        <div id="yape-qr" className="">
                                            <img className="mb-2 rounded-lg w-[300px] mt-1" src='https://quickchart.io/qr?text=0002010102113944tCbPTJlWuwEOr5wNf9IVBggu45tPaDbjLT50DtkjUSM=5204561153036045802PE5906YAPERO6004Lima63045B3F&size=300' />
                                        </div>
                                        <div id="yape-data" className="flex flex-col align-center px-2 rounded-md mt-1">
                                            <p className="text-sm font-semibold text-gray-600 mb-1">¿Cómo pagar via Yape?</p>
                                            <p className="text-sm text-gray-500 text-pretty">Escanee el código QR con su aplicación Yape y efectúe el pago correspondiente. Por favor <strong>use su identificador de inscripción como referencia de pago</strong>. Su matrícula no será confirmada hasta que los fondos hayan sido recibidos en nuestra cuenta.</p>
                                            <p className="text-sm font-medium text-gray-500 mt-2"><strong>Titular: </strong>Miguel Augusto Rodriguez Anticona</p>
                                            <p className="text-sm font-medium text-gray-500"><strong>Número: </strong>+51 986 938 845</p>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-1">
                            <input className="hidden peer" type="radio" id="plin" name="payment-method" value="plin" required={paymentNeeded} onClick={() => setPaymentMethod("plin")} />
                            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100" htmlFor="plin">
                                <span>
                                    Plin
                                </span>
                                <img src='/img/payment/plin-icon.svg' />
                            </label>
                        </div>
                        <div id="plin-details" className={`w-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-4 mb-2 ${paymentMethod === "plin" ? "flex" : "hidden"}`}>
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                        <div id="plin-qr" className="">
                                            <img className="mb-2 rounded-lg w-[300px] mt-1" src='https://quickchart.io/qr?text=0002015802PE2656003253e98febe51047ffbb029d72237132cb0116Plin%20Network%20P2P0102115204482953036045912P2P%20Transfer6004Lima63048DB9&size=300' />
                                        </div>
                                        <div id="plin-data" className="flex flex-col align-center px-2 rounded-md mt-1">
                                            <p className="text-sm font-semibold text-gray-600 mb-1">¿Cómo pagar via Plin?</p>
                                            <p className="text-sm text-gray-500 text-pretty">Escanee el código QR con su app Banca Móvil de alguno de los bancos participantes de Plin y efectúe el pago. Por favor <strong>use su identificador de inscripción como referencia de pago</strong>. Su matrícula no será confirmada hasta que los fondos hayan sido recibidos en nuestra cuenta.</p>
                                            <p className="text-sm font-medium text-gray-500 mt-2"><strong>Titular: </strong>Miguel Augusto Rodriguez Anticona</p>
                                            <p className="text-sm font-medium text-gray-500"><strong>Número: </strong>+51 986 938 845</p>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                        <p id="payment-method-error-message" className="text-red-500 text-sm italic hidden">Por favor, seleccione un método de pago para continuar.</p>
                    </div>
                </div>
            </div>
            <div id="payment-evidence-section" className={`flex flex-wrap -mx-3 mb-6 ${paymentNeeded ? "" : "hidden"}`}>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="proof_of_payment">
                        Evidencia de Pago
                    </label>
                    <p id="evidence-error-message" className="text-red-500 text-sm italic hidden">Por favor, sube una imagen de tu comprobante de pago.</p>
                    <input
                        type="text"
                        name="proof_of_payment"
                        id="proof_of_payment"
                        defaultValue={files.length > 0 ? files[0].cdnUrl : ""}
                        className="hidden"
                    />
                    <FileUploaderMinimal
                        pubkey="dacf95a2145ad757e200"
                        onChange={handleEvidenceUpload}
                        maxLocalFileSizeBytes={2000000}
                        multiple={false}
                        imgOnly={true}
                        classNameUploader="my-config uc-light"
                        localeDefinitionOverride={{
                            en : es
                        }}
                    />
                    <p className="text-gray-600 text-xs italic mt-2">Sube una foto o captura de pantalla de tu comprobante de pago. Solo se aceptan archivos de imagen (JPG, PNG, GIF) de máximo 2MB.</p>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-terms-and-conditions">
                        Términos y Condiciones
                    </label>
                    <div id="checkbox-container" className="flex items-center">
                        <input required className="peer appearance-none inline-block min-w-[1rem] w-4 h-4 bg-gray-200 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700 mr-2 checked:bg-teal-700 checked:focus:bg-teal-600" id="grid-terms-and-conditions" name="terms_and_conditions" type="checkbox" />
                        <label className="text-xs text-gray-500" htmlFor="grid-terms-and-conditions">
                            Acepto los <a className="text-teal-700 hover:text-teal-800" href="/terminos-y-condiciones" target="_blank">Términos y Condiciones</a> de Bioeasy Galenos.
                        </label>
                    </div>
                </div>
            </div>

            <div className="cf-turnstile" data-sitekey="0x4AAAAAAAcqLHvyo-zmKuJl" data-callback="javascriptCallback" data-theme="light" data-language="es-PE"></div>
            <p id="captcha-error-message" className="text-red-500 text-sm italic hidden">Por favor, completa la validación de Cloudflare Turnstile para continuar.</p>

            <p className="mt-4 mb-8 text-xs font-light text-justify text-gray-500">
                Considerando la vigencia del Decreto Legislativo Nº 1390 (Restricciones a la difusión de publicidad masiva) y, siendo <strong>Bioeasy Galenos</strong> respetuoso del ordenamiento jurídico vigente, le solicitamos nos brinde su consentimiento para mantenerlo informado acerca de nuestros diferentes servicios a través del envío de nuestra publicidad. La información brindada se utilizará exclusivamente para el envío de publicidad, por lo que se encontrará protegida por la Ley Nº 29733 - Ley de Protección de datos personales.
            </p>

            <input className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed" disabled type="submit" id="submit-button" value="Enviar Ficha de Inscripción" onClick={addInvalidClasses} />

            <p className="mt-2 text-xs font-light text-justify text-gray-500 hidden" id="consult-disclaimer">
                Al hacer clic en el botón &quot;Enviar Ficha de Inscripción&quot; usted acepta que Bioeasy Galenos se comunique con usted a través de los datos proporcionados en este formulario para brindarle información sobre el servicio solicitado. Nuestro equipo se pondrá en contacto con usted en un plazo máximo de 48 horas hábiles.
            </p>
        </form>
    )
}

export default RegisterForm;