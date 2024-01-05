import Header from "../Containers/Header";
import Footer from "../Containers/Footer";
import RegisterForm from "../Components/RegisterForm";

function Inscripcion() {
  return (
    <>
      <Header/>
      <main className="main Landing">
        <RegisterForm />
      </main>
      <Footer/>
    </>
  );
}

export default Inscripcion;