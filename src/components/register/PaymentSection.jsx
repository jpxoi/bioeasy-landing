/* eslint-disable react/prop-types */
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";

export default function PaymentSection({
  paymentNeeded,
  paymentMethod,
  setPaymentMethod,
  cdnURL,
  orderIdentifier,
  handleCopyToClipboard,
}) {
  return (
    <div
      id="payment-method-section"
      className={`flex flex-wrap -mx-3 mb-6 ${paymentNeeded ? "" : "hidden"}`}
    >
      <div className="w-full px-3">
        <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 cursor-default">
          Método de Pago
        </span>
        <div className="flex flex-wrap">
          <div className="w-full my-1">
            <input
              className="hidden peer"
              type="radio"
              id="bank_transfer"
              name="payment-method"
              value="bank_transfer"
              required={paymentNeeded}
              onClick={() => setPaymentMethod("bank_transfer")}
            />
            <label
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100"
              htmlFor="bank_transfer"
            >
              <span>Transferencia Bancaria</span>
              <img src={`${cdnURL}/media/payment/bcp-icon.svg`} />
            </label>
          </div>
          <div
            id="bank-details"
            className={`w-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-4 mb-2 ${
              paymentMethod === "bank_transfer" ? "flex" : "hidden"
            }`}
          >
            <div className="flex flex-wrap">
              <div id="bank-data" className="flex flex-col align-center mb-2">
                <p className="text-sm text-pretty text-gray-500">
                  Realice su pago directamente a cualquiera de nuestras
                  cuentas bancarias. Por favor <strong>use su identificador de inscripción como referencia de pago</strong>. Su matrícula no será confirmada hasta que los fondos hayan
                  sido recibidos en nuestra cuenta.
                </p>
              </div>
              <div className="w-full my-1">
                <div
                  id="bcp-data"
                  className="flex flex-col gap-2 align-center bg-white px-4 py-4 rounded-md my-1"
                >
                  <div className="flex items-center">
                    <img src={`${cdnURL}/media/payment/bcp-icon.svg`} />
                    <h5 className="text-base font-bold text-gray-900 ml-2">
                      Banco de Crédito del Perú
                    </h5>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                    <div className="flex flex-col items-start justify-center">
                      <p id="label" className="text-xs text-gray-500 font-bold">
                        Número de Cuenta
                      </p>
                      <p
                        id="account-number"
                        className="text-sm text-gray-800 font-bold flex flex-row gap-2 items-center"
                      >
                        570-4199042-0-39{" "}
                        <button
                          className="flex flex-row gap-2 text-xs text-gray-500 hover:text-gray-600"
                          onClick={(e) => handleCopyToClipboard(e, "5704199042039")}
                        >
                          <DocumentDuplicateIcon className="w-4 h-4" />
                        </button>
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p id="label" className="text-xs text-gray-500 font-bold">
                        CCI
                      </p>
                      <p
                        id="iban"
                        className="text-sm text-gray-800 font-bold flex flex-row gap-2 items-center"
                      >
                        002-5700041990420-3-904
                        <button
                          className="flex flex-row gap-2 text-xs text-gray-500 hover:text-gray-600"
                          onClick={(e) =>
                            handleCopyToClipboard(e, "00257000419904203904")
                          }
                        >
                          <DocumentDuplicateIcon className="w-4 h-4" />
                        </button>
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p id="label" className="text-xs text-gray-500 font-bold">
                        Referencia de Pago
                      </p>
                      <p className="text-sm text-gray-800 font-bold flex flex-row gap-2 items-center">
                        {orderIdentifier}
                        <button
                          className="flex flex-row gap-2 text-xs text-gray-500 hover:text-gray-600"
                          onClick={(e) => handleCopyToClipboard(e, orderIdentifier)}
                        >
                          <DocumentDuplicateIcon className="w-4 h-4" />
                        </button>
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p id="label" className="text-xs text-gray-500 font-bold">
                        Titular
                      </p>
                      <p id="account-holder" className="text-sm text-gray-800 font-bold">
                        Grupo Bioeasy Galenos SRL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full my-1">
            <input
              className="hidden peer"
              type="radio"
              id="yape"
              name="payment-method"
              value="yape"
              required={paymentNeeded}
              onClick={() => setPaymentMethod("yape")}
            />
            <label
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-teal-700 peer-checked:text-teal-700 hover:text-gray-600 hover:bg-gray-100"
              htmlFor="yape"
            >
              <span>Yape</span>
              <img src={`${cdnURL}/media/payment/yape-icon.svg`} />
            </label>
          </div>
          <div
            id="yape-details"
            className={`w-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-4 mb-2 ${
              paymentMethod === "yape" ? "flex" : "hidden"
            }`}
          >
            <div className="flex flex-wrap">
              <div id="bank-data" className="flex flex-col align-center mb-2">
                <p className="text-sm text-pretty text-gray-500">
                  Realice su pago directamente a nuestro Yape desde su
                  billetera digital preferida. Por favor <strong>use su identificador de inscripción como referencia de pago</strong>. Su matrícula no será confirmada hasta que los fondos hayan
                  sido recibidos en nuestra cuenta.
                </p>
              </div>
              <div className="w-full my-1">
                <div
                  id="bcp-data"
                  className="flex flex-col gap-2 align-center bg-white px-4 py-4 rounded-md my-1"
                >
                  <div className="flex items-center">
                    <img src={`${cdnURL}/media/payment/yape-icon.svg`} />
                    <h5 className="text-base font-bold text-gray-900 ml-2">
                      Yape
                    </h5>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                    <div className="flex flex-col items-start justify-center">
                      <p id="label" className="text-xs text-gray-500 font-bold">
                        Número de Celular
                      </p>
                      <p
                        id="account-number"
                        className="text-sm text-gray-800 font-bold flex flex-row gap-2 items-center"
                      >
                        +51 967 795 016
                        <button
                          className="flex flex-row gap-2 text-xs text-gray-500 hover:text-gray-600"
                          onClick={(e) => handleCopyToClipboard(e, "967795016")}
                        >
                          <DocumentDuplicateIcon className="w-4 h-4" />
                        </button>
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p id="label" className="text-xs text-gray-500 font-bold">
                        Titular
                      </p>
                      <p id="account-holder" className="text-sm text-gray-800 font-bold">
                        Grupo Bioeasy Galenos SRL
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p id="label" className="text-xs text-gray-500 font-bold">
                        Referencia de Pago
                      </p>
                      <p className="text-sm text-gray-800 font-bold flex flex-row gap-2 items-center">
                        {orderIdentifier}
                        <button
                          className="flex flex-row gap-2 text-xs text-gray-500 hover:text-gray-600"
                          onClick={(e) => handleCopyToClipboard(e, orderIdentifier)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V9.5A1.5 1.5 0 0 1 12 11V8.621a3 3 0 0 0-.879-2.121L9 4.379A3 3 0 0 0 6.879 3.5H5.5Z" />
                            <path d="M4 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 14h5a1.5 1.5 0 0 0 1.5-1.5V8.621a1.5 1.5 0 0 0-.44-1.06L7.94 5.439A1.5 1.5 0 0 0 6.878 5H4Z" />
                          </svg>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p id="payment-method-error-message" className="text-red-500 text-sm italic hidden">
            Por favor, seleccione un método de pago para continuar.
          </p>
        </div>
      </div>
    </div>
  );
}
