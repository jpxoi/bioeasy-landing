import Header from "../containers/Header";
import Footer from "../containers/Footer";
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