import Header from "../Containers/Header";
import Footer from "../Containers/Footer";
import PrivacyText from "../Containers/PrivacyText";

function Privacy() {
  return (
    <>
      <Header/>
      <main className="main Landing">
        <PrivacyText />
      </main>
      <Footer/>
    </>
  );
}
  
export default Privacy;