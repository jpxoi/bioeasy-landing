import Header from "../containers/Header";
import Footer from "../containers/Footer";
import PrivacyText from "../containers/PrivacyText";

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