import Header from "../Containers/Header";
import Heading from "../Containers/Heading";
import About from "../Containers/About";
import Courses from "../Containers/Courses";
import Team from "../Containers/Team";
import Contact from "../Containers/Contact";
import Footer from "../Containers/Footer";

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