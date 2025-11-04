export default function Captcha() {
  return (
    <>
      <div
        className="cf-turnstile"
        data-sitekey="0x4AAAAAAAcqLHvyo-zmKuJl"
        data-callback="javascriptCallback"
        data-theme="light"
        data-language="es-PE"
      ></div>
      <p id="captcha-error-message" className="text-red-500 text-sm italic hidden">
        Por favor, completa la validación de Cloudflare Turnstile para
        continuar.
      </p>
    </>
  );
}


