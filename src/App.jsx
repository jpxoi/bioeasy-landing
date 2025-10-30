import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "./new-pages/Landing";
import Error404 from "./new-pages/Error404";
import Privacy from "./new-pages/Privacy";
import Inscripcion from "./new-pages/Inscripcion";
import Success from "./new-pages/Success";
import Check from "./new-pages/Check";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/inscribete" element={<Inscripcion />} />
        <Route path="/success" element={<Success />} />
        <Route path="/check" element={<Check />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
