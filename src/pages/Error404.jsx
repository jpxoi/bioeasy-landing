import Header from "../new-containers/Header";
import Footer from "../new-containers/Footer";
import Error404Message from "../new-components/Error404Message";

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