/* eslint-disable react/prop-types */
export default function StudentInfoFields({ maxDate, cycleSelected }) {
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Nombres
          </label>
          <input
            required
            className="appearance-auto block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 mb-2 leading-tight focus:outline-hidden focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700"
            id="grid-first-name"
            type="text"
            name="first_name"
            placeholder="Juan Jesus"
            autoComplete="given-name"
          />
          <p className="text-gray-600 text-xs italic">
            Tal y como aparece en tu documento de identidad
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Apellidos
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-hidden focus:bg-white focus:border-teal-700 mb-2 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700"
            id="grid-last-name"
            type="text"
            name="last_name"
            placeholder="Perez Rodriguez"
            autoComplete="family-name"
          />
          <p className="text-gray-600 text-xs italic">
            Apellido paterno y apellido materno
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-document-type"
          >
            Tipo de Documento de Identidad
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-sm leading-tight focus:outline-hidden focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700"
            required
            id="grid-document-type"
            name="document_type"
            defaultValue=""
          >
            <option value="" disabled="disabled">
              Seleccione
            </option>
            <option value="dni">DNI</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="carnet_extranjeria">Carnet de Extranjería</option>
          </select>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-document-number"
          >
            Número de Documento de Identidad
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-hidden focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700"
            id="grid-document-number"
            name="document_number"
            type="tel"
            minLength="8"
            placeholder="Número de Documento"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-date-of-birth"
          >
            Fecha de Nacimiento
          </label>
          <input
            required
            className="appearance-none block w-full h-[46px] bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 pr-8 leading-tight focus:outline-hidden focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700"
            max={maxDate}
            id="grid-date-of-birth"
            name="date_of_birth"
            type="date"
            placeholder="dd/mm/yyyy"
            autoComplete="bday"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-phone-number"
          >
            Número de Celular
          </label>
          <div
            id="phone-number-container"
            className="appearance-none flex w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm px-4 leading-tight focus:outline-hidden focus-within:bg-white focus-within:border-teal-700 pointer-events-none mb-2 has-[:focus:invalid]:bg-red-50 has-[:focus:invalid]:border-red-500 has-[:focus:valid]:bg-green-50 has-[:focus:valid]:border-green-500 has-valid:border-teal-700"
          >
            <div className="flex items-center">
              <svg
                width="18"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                id="Flag_of_Peru"
              >
                <rect height="12" width="18" fill="#D91023" x="0" y="0" />
                <rect height="12" width="6" fill="white" x="6" y="0" />
              </svg>
            </div>
            <div className="flex items-center ml-2">+51</div>
            <input
              required
              className="peer appearance-none ml-2 bg-gray-200 text-gray-700 leading-tight py-3 focus:bg-white focus:outline-hidden focus:border-none pointer-events-auto w-full focus-visible:invalid:bg-red-50 focus-visible:valid:bg-green-50"
              id="grid-phone-number"
              name="phone_number"
              type="tel"
              placeholder="912 345 678"
              pattern="^\\d{9}$"
              autoComplete="tel"
            />
          </div>
          <p className="text-gray-600 text-xs italic">
            El número debe contar con WhatsApp.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Correo Electrónico
          </label>
          <input
            required
            className="peer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 pr-8 leading-tight focus:outline-hidden focus:bg-white focus:border-teal-700 mb-2 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700"
            id="grid-email"
            type="email"
            name="email"
            placeholder="alumno@tuuniversidad.edu.pe"
            pattern=".+@.+edu\\.pe"
            autoComplete="email"
          />
          <p className="text-gray-600 text-xs italic peer-invalid:peer-focus:text-red-500 peer-valid:text-teal-700">
            Usa tu correo institucional .edu.pe
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-cycle-select"
          >
            Ciclo de Estudios
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-sm leading-tight focus:outline-hidden focus:bg-white focus:border-teal-700 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700"
            required
            id="grid-cycle-select"
            name="cycle"
            defaultValue={cycleSelected ? cycleSelected : ""}
          >
            <option value="" disabled="disabled">
              Seleccione
            </option>
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
    </>
  );
}
