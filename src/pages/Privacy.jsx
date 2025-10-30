import Header from "../new-containers/Header";
import Footer from "../new-containers/Footer";
import PrivacyText from "../new-containers/PrivacyText";

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