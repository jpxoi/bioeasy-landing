import Header from "../Containers/Header";
import Footer from "../Containers/Footer";
import Register from "../Containers/Register";
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
