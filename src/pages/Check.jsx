import Header from "../new-containers/Header";

function Check() {
  // This page will check browser compatibility
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
        <Header />
      <div className="flex flex-col max-w-(--breakpoint-sm) items-center justify-center h-screen mt-32 md:mt-0">
        <img
          src="https://www.instructure.com/sites/default/files/image/2021-12/Canvas_Horizontal_ByInstructure_Color_RGB.png"
          alt="Canvas LMS"
          className="w-64 h-16 object-contain mt-8 mb-4"
        />
        <p className="text-center">
          Este sitio verifica si tu navegador es compatible con la plataforma
          Canvas LMS de Instructure. Si ves un mensaje de error, por favor
          actualiza tu navegador o utiliza uno de los navegadores recomendados.
        </p>
        <iframe
          id="browser-check"
          src="https://community.canvaslms.com/xjnht99997/plugins/custom/instructure/instructure/browser-version-check-tool"
        ></iframe>
      </div>
    </div>
  );
}

export default Check;
