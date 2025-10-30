import { addInvalidClasses } from "../../utils/form-utils";

export default function SubmitSection() {
  return (
    <>
      <input
        className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-sm focus:outline-hidden focus:shadow-outline disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed"
        disabled
        type="submit"
        id="submit-button"
        value="Enviar Ficha de Inscripción"
        onClick={addInvalidClasses}
      />

      <p className="mt-2 text-xs font-light text-justify text-gray-500 hidden" id="consult-disclaimer">
        Al hacer clic en el botón &quot;Enviar Ficha de Inscripción&quot; usted
        acepta que Bioeasy Galenos se comunique con usted a través de los datos
        proporcionados en este formulario para brindarle información sobre el
        servicio solicitado. Nuestro equipo se pondrá en contacto con usted en
        un plazo máximo de 48 horas hábiles.
      </p>
    </>
  );
}


