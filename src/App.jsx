import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Error404 from "./pages/Error404";
import Privacy from "./pages/Privacy";
import Inscripcion from "./pages/Inscripcion";
import Success from "./pages/Success";
import Check from "./pages/Check";

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
