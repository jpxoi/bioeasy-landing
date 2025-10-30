import Header from "../new-containers/Header";
import Footer from "../new-containers/Footer";
import Register from "../new-containers/Register";
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
