import Header from "../new-containers/Header";
import Heading from "../new-containers/Heading";
import About from "../new-containers/About";
import Courses from "../new-containers/Courses";
import Team from "../new-containers/Team";
import Contact from "../new-containers/Contact";
import Footer from "../new-containers/Footer";

function Start() {
  return (
    <>
      <Header/>
      <main className="main Landing">
        <Heading/>
        <About/>
        <Courses/>
        <Team/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
  
export default Start;