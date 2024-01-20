import Header from "../Containers/Header";
import Footer from "../Containers/Footer";
import Register from "../Containers/Register";

function Inscripcion() {
  return (
    <>
      <Header/>
      <main className="main Landing">
        <Register />
      </main>
      <Footer/>
    </>
  );
}

export default Inscripcion;