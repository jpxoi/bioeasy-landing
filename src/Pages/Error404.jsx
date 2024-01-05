import Header from "../Containers/Header";
import Footer from "../Containers/Footer";
import Error404Message from "../Containers/Error404Message";

function Error404() {
  return (
    <>
      <Header/>
      <main className="main Landing">
        <Error404Message />
      </main>
      <Footer/>
    </>
  );
}
  
export default Error404;