import { useEffect, useState } from "react";
import FetchCSVData from '../Handlers/FetchCSVData';
import Skeleton from 'react-loading-skeleton';

function RegisterForm() {
    const [coursesMounted, setCoursesMounted] = useState(false);
    const cycle_selected =  new URLSearchParams(window.location.search).get("ciclo");
    const course_selected =  new URLSearchParams(window.location.search).get('course');

    const courses_data_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcfAfqGVUgswCgCf-2fhQ0SevD4S7b6HBI0nDyUzdLjSDZxjcAv7aoBoer9FJANFYDuBj6Dr3CLN0-/pub?gid=1954633847&single=true&output=csv";
    const courses_data = FetchCSVData(courses_data_url);
    
    // Function to calculate max date for date of birth input field (16 years old)
    function calculateMaxDate() {
        const maxAge = 16; // Max age allowed to register
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth()+1).padStart(2, '0');
        const yyyy = today.getFullYear() - maxAge;
        const maxDate = yyyy + '-' + mm + '-' + dd;
        return maxDate;
    }

    const maxDate = calculateMaxDate();

    // Check if the courses data has been loaded
    useEffect(() => {
        if (courses_data) {
            setCoursesMounted(true);
        }
    }, [courses_data]);

    // Order Identifier useEffect
    useEffect(() => {
        const identifier = document.getElementById("order_identifier")
        const order_identifier = identifier.innerHTML;
        console.log(order_identifier);
        const form_order_identifier = document.getElementById("grid-order-identifier");

        form_order_identifier.value = order_identifier;
    }, [coursesMounted]);

    // Add invalid class to input elements with invalid data when the form input is selected
    useEffect(() => {
        const inputs = document.querySelectorAll("input, select, textarea");
        inputs.forEach(input => {
            input.addEventListener("click", function() {
                input.classList.add("invalid:bg-red-50");
                input.classList.add("invalid:border-red-500");
            })
        })
    }, []);

    // Price Calculation and Course Select useEffect
    useEffect(() => {
        const course_select = document.getElementById('grid-course-select');
        const course_price = document.getElementById('grid-course-price');
        const cycle_select = document.getElementById('grid-cycle-select');

        if (course_selected && coursesMounted) {
            calculatePrice();
        }

        if (course_select) {
            course_select.addEventListener("change", calculatePrice);
            course_select.addEventListener("change", hideShowPayment);
        }

        if (cycle_select && course_select) {
            if (cycle_selected) {
                filterCourses();
                course_select.value = course_selected;
                calculatePrice();
            }
            cycle_select.addEventListener("change", filterCourses);
        }

        function filterCourses() {
            const categoryId = cycle_select.value;

            for (let i = 0; i < courses_data.length; i++) {
                if (courses_data[i].cycle == categoryId && courses_data[i].available == 'TRUE') {
                    course_select.querySelector(`option[value="${courses_data[i].id}"]`).disabled = false;
                    course_select.querySelector(`option[value="${courses_data[i].id}"]`).classList.remove("hidden");
                } else if (courses_data[i].cycle != categoryId && courses_data[i].available == 'TRUE') {
                    course_select.querySelector(`option[value="${courses_data[i].id}"]`).disabled = true;
                    course_select.querySelector(`option[value="${courses_data[i].id}"]`).classList.add("hidden");
                }
            }

            course_select.value = "empty";
            resetPrice();
        }

        function calculatePrice() {
            if (course_select.value === "empty") {
                course_price.value = "";
            } else {
                for (let i = 0; i < courses_data.length; i++) {
                    if (courses_data[i].id == course_select.value) {
                        if (courses_data[i].available == 'FALSE') {
                            course_price.value = "CURSO NO DISPONIBLE"
                        } else if (courses_data[i].price == '0' || courses_data[i].price == 'GRATUITO' || courses_data[i].price == 'GRATIS') {
                            course_price.value = "GRATUITO"
                            
                        } else if (courses_data[i].price == 'CONSULTAR') {
                            course_price.value = "CONSULTAR CON UN ASESOR"
                        } else {
                            course_price.value = formatPrice(courses_data[i].price, 'PEN');
                        }
                    }
                }
            }
        }

        function resetPrice() {
            course_price.value = "";
        }

        function formatPrice(price, currency) {
            // Function to format the price of the course

            let PeruvianSol = new Intl.NumberFormat('es-PE', {
                style: 'currency',
                currency: currency,
            });

            let USDollar = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });


            if (currency === 'PEN') {
                return PeruvianSol.format(price);
            }

            if (currency === 'USD') {
                return USDollar.format(price);
            }
        }

        function hideShowPayment() {
            if (course_price.value === "GRATUITO" || course_price.value === "CURSO NO DISPONIBLE" || course_price.value === "CONSULTAR CON UN ASESOR") {
                document.getElementById('payment-method-section').style.display = "none";
                document.getElementById('payment-evidence-section').style.display = "none";
            } else {
                document.getElementById('payment-method-section').style.display = "block";
                document.getElementById('payment-evidence-section').style.display = "block";
            }
        }


    }, [coursesMounted, courses_data, course_selected, cycle_selected]);

    // Payment Method Select useEffect
    useEffect(() => {
        const bank_transfer = document.getElementById('bank_transfer');
        const yape = document.getElementById('yape');
        const plin = document.getElementById('plin');
        const bank_details = document.getElementById('bank-details');
        const yape_details = document.getElementById('yape-details');
        const plin_details = document.getElementById('plin-details');

        if (bank_transfer) {
            bank_transfer.addEventListener("change", function() {
                bank_details.style.display = "flex";
                yape_details.style.display = "none";
                plin_details.style.display = "none";
            });
        }

        if (yape) {
            yape.addEventListener("change", function() {
                bank_details.style.display = "none";
                yape_details.style.display = "flex";
                plin_details.style.display = "none";
            });
        }

        if (plin) {
            plin.addEventListener("change", function() {
                bank_details.style.display = "none";
                yape_details.style.display = "none";
                plin_details.style.display = "flex";
            });
        }
    }, []);

    // File upload preview and validation
    useEffect(() => {
        const input = document.getElementById('dropzone-file');
        const preview = document.getElementById('preview');
        const dropzone = document.getElementById('dropzone_zone_box');

        const fileTypes = [
            "image/apng",
            "image/bmp",
            "image/gif",
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/svg+xml",
            "image/tiff",
            "image/webp",
            "image/x-icon",
        ];

        input.addEventListener("change", updateImageDisplay);

        // Function to display the image preview and the file name
        function updateImageDisplay() {
            while (preview.firstChild) {
                preview.removeChild(preview.firstChild);
            }
    
            const curFiles = input.files;
    
            if (curFiles.length === 0) {
                const para = document.createElement("p");
                para.textContent = "No hay archivos seleccionados para cargar";
                para.className = "text-sm mt-4 font-semibold text-gray-500";
                preview.appendChild(para);

            } else {
                for (const file of curFiles) {
                    const para = document.createElement("p");
                    if (validFileType(file)) {
                        dropzone.style.display = "none";
                        para.textContent = file.name;
                        para.className = "text-sm font-semibold mt-2 text-gray-500";
    
                        const image = document.createElement("img");
                        image.className = "mt-2 max-h-[800px] drop-shadow-lg object-cover rounded-lg";
                        image.src = URL.createObjectURL(file);
                        image.alt = image.title = file.name;

                        const remove_button = document.createElement("button");
                        remove_button.className = "flex items-center justify-center w-full md:w-40 h-10 text-sm font-semibold text-red-500 border border-red-200 rounded-lg hover:bg-red-100";
                        remove_button.textContent = "Quitar Archivo";
                        remove_button.addEventListener("click", removeFile);
                        
                        preview.appendChild(remove_button)
                        preview.appendChild(image);
                        preview.appendChild(para);
                    } else {
                        para.textContent = "No es un tipo de archivo válido. Actualice su selección.";
                        para.className = "text-sm font-semibold text-red-500";
                        preview.appendChild(para);
                    } 
                }
            }
        }
        
        // Function to check if the file type is valid
        function validFileType(file) {
            return fileTypes.includes(file.type);
        }

        // Function to remove the file from the input field
        function removeFile() {
            input.value = "";
            updateImageDisplay();
            dropzone.style.display = "block";
        }
    
    }, []);

    return (
        <form className="w-full max-w-xl mt-8" acceptCharset="UTF-8" action="https://formcarry.com/s/bDFZ1VtyzB0" method="POST" encType="multipart/form-data">
            <input type="hidden" name="order_identifier" id="grid-order-identifier" />
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Nombres
                    </label>
                    <input required className="appearance-auto block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-first-name" type="text" name="first_name" placeholder="Juan Jesus" autoComplete="given-name" />
                    <p className="text-gray-600 text-xs italic">Tal y como aparece en tu documento de identidad</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Apellidos
                    </label>
                    <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 mb-2" id="grid-last-name" type="text" name="last_name" placeholder="Perez Rodriguez" autoComplete="family-name" />
                    <p className="text-gray-600 text-xs italic">Apellido paterno y apellido materno</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-type">
                        Tipo de Documento de Identidad
                    </label>
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-document-type" name="document_type" defaultValue="empty">
                        <option value="empty" disabled="disabled">Seleccione</option>
                        <option value="dni">DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="carnet_extranjeria">Carnet de Extranjería</option>
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-document-number">
                        Número de Documento de Identidad
                    </label>
                    <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-document-number" name="document_number" type="tel" placeholder="Número de Documento" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-date-of-birth">
                        Fecha de Nacimiento
                    </label>
                    <input required className="appearance-none block w-full h-[46px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-teal-700" max={maxDate} id="grid-date-of-birth" name="date_of_birth" type="date" placeholder="Fecha de Nacimiento" autoComplete="bday" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone-number">
                        Número de Celular
                    </label>
                    <div className="appearance-none flex w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 leading-tight focus:outline-none focus-within:bg-white focus-within:border-teal-700 pointer-events-none mb-2">
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
                        <input required className="peer appearance-none ml-2 bg-gray-200 text-gray-700 leading-tight py-3 focus:bg-white focus:outline-none focus:border-none pointer-events-auto w-full" id="grid-phone-number" name="phone_number" type="tel" placeholder="912 345 678" pattern="^\d{9}$" autoComplete="tel"/>
                    </div>
                    <p className="text-gray-600 text-xs italic">El número debe contar con WhatsApp.</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        Correo Electrónico
                    </label>
                    <input required className="peer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 mb-2" id="grid-email" type="email" name="email" placeholder="alumno@tuuniversidad.edu.pe" pattern=".+@.+edu\.pe" autoComplete="email" />
                    <p className="text-gray-600 text-xs italic">Usa tu correo institucional .edu.pe</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-cycle-select">
                        Ciclo de Estudios
                    </label>
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700" id="grid-cycle-select" name="cycle" defaultValue={cycle_selected ? cycle_selected : "empty"}>
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
                <div className="w-full px-3 leading-none">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-course-select">
                        Curso Académico
                    </label>
                    {courses_data ? "" : <Skeleton className="mb-2" height={46} />}
                    {courses_data ? <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-700 mb-2" id="grid-course-select" name="course" defaultValue={course_selected ? course_selected : "empty"}>
                        <option value="empty" disabled="disabled">Seleccione</option>
                        {courses_data ? courses_data.map((course, index) => {
                            if (course.available == "TRUE") {
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
            <div id="payment-method-section" className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="payment-method">
                        Método de Pago
                    </label>
                    <div className="flex flex-wrap">
                        <div className="w-full my-1">
                            <input className="hidden peer" type="radio" id="bank_transfer" name="payment-method" value="bank_transfer" required/>
                            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100" htmlFor="bank_transfer">
                                <span>
                                    Transferencia Bancaria
                                </span>
                                <img src='/img/payment/transferencia-icon.svg' />
                            </label>
                        </div>
                        <div id="bank-details" className="w-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-4 mb-2 hidden">
                            <div className="flex flex-wrap">
                                <div id="bank-data" className="flex flex-col align-center mb-2">
                                    <p className="text-sm text-pretty text-gray-500">Realice su pago directamente a cualquiera de nuestras cuentas bancarias. Por favor use su identificador de inscripción como referencia de pago. Su matrícula no será confirmada hasta que los fondos hayan sido recibidos en nuestra cuenta.</p>
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
                            <input className="hidden peer" type="radio" id="yape" name="payment-method" value="yape" required/>
                            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100" htmlFor="yape">
                                <span>
                                    Yape
                                </span>
                                <img src='/img/payment/yape-icon.svg' />
                            </label>
                        </div>
                        <div id="yape-details" className="w-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-4 mb-2 hidden">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                        <div id="yape-qr" className="">
                                            <img className="mb-2 rounded-lg w-[300px] mt-1" src='https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=0002010102113944tCbPTJlWuwEOr5wNf9IVBggu45tPaDbjLT50DtkjUSM=5204561153036045802PE5906YAPERO6004Lima63045B3F' />
                                        </div>
                                        <div id="yape-data" className="flex flex-col align-center px-2 rounded-md mt-1">
                                            <p className="text-sm font-semibold text-gray-600 mb-1">¿Cómo pagar via Yape?</p>
                                            <p className="text-sm text-gray-500 text-pretty">Escanee el código QR con su aplicación Yape y efectúe el pago correspondiente. Por favor use su identificador de inscripción como referencia de pago. Su matrícula no será confirmada hasta que los fondos hayan sido recibidos en nuestra cuenta.</p>
                                            <p className="text-sm font-medium text-gray-500 mt-2"><strong>Titular: </strong>Miguel Augusto Rodriguez Anticona</p>
                                            <p className="text-sm font-medium text-gray-500"><strong>Número: </strong>+51 986 938 845</p>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-1">
                            <input className="hidden peer" type="radio" id="plin" name="payment-method" value="plin" required/>
                            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100" htmlFor="plin">
                                <span>
                                    Plin
                                </span>
                                <img src='/img/payment/plin-icon.svg' />
                            </label>
                        </div>
                        <div id="plin-details" className="w-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-4 mb-2 hidden">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                        <div id="plin-qr" className="">
                                            <img className="mb-2 rounded-lg w-[300px] mt-1" src='https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=0002010102113944tCbPTJlWuwEOr5wNf9IVBggu45tPaDbjLT50DtkjUSM=5204561153036045802PE5906YAPERO6004Lima63045B3F' />
                                        </div>
                                        <div id="plin-data" className="flex flex-col align-center px-2 rounded-md mt-1">
                                            <p className="text-sm font-semibold text-gray-600 mb-1">¿Cómo pagar via Plin?</p>
                                            <p className="text-sm text-gray-500 text-pretty">Escanee el código QR con su app Banca Móvil de alguno de los bancos participantes de Plin y efectúe el pago. Por favor use su identificador de inscripción como referencia de pago. Su matrícula no será confirmada hasta que los fondos hayan sido recibidos en nuestra cuenta.</p>
                                            <p className="text-sm font-medium text-gray-500 mt-2"><strong>Titular: </strong>Miguel Augusto Rodriguez Anticona</p>
                                            <p className="text-sm font-medium text-gray-500"><strong>Número: </strong>+51 986 938 845</p>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="payment-evidence-section" className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dropzone-file">
                        Evidencia de Pago
                    </label>
                    <div id="dropzone_zone_box" className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 file-whithin:bg-red-500">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Haga clic para cargar</span> o arrastre y suelte</p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG o GIF</p>
                            </div>
                            <input id="dropzone-file" type="file" name="proof_of_payment" className="text-sm text-gray-500 hidden file:hidden" accept="image/*" required/>
                        </label>
                    </div> 
                    <div className="flex flex-col items-center md:items-start justify-center w-full border-dashed rounded-lg" id="preview">
                        <p className="text-sm mt-4 font-semibold text-gray-500">No hay archivos seleccionados para cargar</p>
                    </div>
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

            <p className="mb-8 text-xs font-light text-justify text-gray-500">
                Considerando la vigencia del Decreto Legislativo Nº 1390 (Restricciones a la difusión de publicidad masiva) y, siendo <strong>Bioeasy Galenos</strong> respetuoso del ordenamiento jurídico vigente, le solicitamos nos brinde su consentimiento para mantenerlo informado acerca de nuestros diferentes servicios a través del envío de nuestra publicidad. La información brindada se utilizará exclusivamente para el envío de publicidad, por lo que se encontrará protegida por la Ley Nº 29733 - Ley de Protección de datos personales.
            </p>

            <input className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline disabled:bg-red-600 disabled:hover:bg-red-800 cursor-pointer" type="submit" value="Enviar Ficha de Inscripción" />
        </form>
    )
}

export default RegisterForm;