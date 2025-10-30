import Header from "../containers/Header";
import Heading from "../containers/Heading";
import About from "../containers/About";
import Courses from "../containers/Courses";
import Team from "../containers/Team";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";

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