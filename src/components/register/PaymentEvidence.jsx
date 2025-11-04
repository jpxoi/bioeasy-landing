/* eslint-disable react/prop-types */
import { FileUploaderMinimal } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import es from "../../locale/es";

export default function PaymentEvidence({ paymentNeeded, files, handleEvidenceUpload }) {
  return (
    <div
      id="payment-evidence-section"
      className={`flex flex-wrap -mx-3 mb-6 ${paymentNeeded ? "" : "hidden"}`}
    >
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="proof_of_payment"
        >
          Evidencia de Pago
        </label>
        <p id="evidence-error-message" className="text-red-500 text-sm italic hidden">
          Por favor, sube una imagen de tu comprobante de pago.
        </p>
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
            en: es,
          }}
        />
        <p className="text-gray-600 text-xs italic mt-2">
          Sube una foto o captura de pantalla de tu comprobante de pago. Solo
          se aceptan archivos de imagen (JPG, PNG, GIF) de máximo 2MB.
        </p>
      </div>
    </div>
  );
}
