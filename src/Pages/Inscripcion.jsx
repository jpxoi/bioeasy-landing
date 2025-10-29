import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Register from "../containers/Register";
import { Toaster } from "react-hot-toast";

function Inscripcion() {
  return (
    <>
      <Header />
      <main className="main Landing">
        <Toaster />
        <Register />
      </main>
      <Footer />
    </>
  );
}

export default Inscripcion;
