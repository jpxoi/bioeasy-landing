export default function TermsSection() {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-terms-and-conditions"
        >
          Términos y Condiciones
        </label>
        <div id="checkbox-container" className="flex items-center">
          <input
            required
            className="peer appearance-none inline-block min-w-4 w-4 h-4 bg-gray-200 border border-gray-200 rounded-sm leading-tight focus:outline-hidden focus:bg-white focus:border-teal-700 mr-2 checked:bg-teal-700 checked:focus:bg-teal-600"
            id="grid-terms-and-conditions"
            name="terms_and_conditions"
            type="checkbox"
          />
          <label className="text-xs text-gray-500" htmlFor="grid-terms-and-conditions">
            Acepto los{" "}
            <a className="text-teal-700 hover:text-teal-800" href="/terminos-y-condiciones" target="_blank">
              Términos y Condiciones
            </a>{" "}
            de Bioeasy Galenos.
          </label>
        </div>
      </div>
    </div>
  );
}


