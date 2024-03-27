import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './Pages/Landing';
import Error404 from './Pages/Error404';
import Privacy from './Pages/Privacy';
import Inscripcion from './Pages/Inscripcion';
import Success from './Pages/Success';
import Check from './Pages/Check';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/inscribete" element={<Inscripcion/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/check" element={<Check/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
  )
}

export default App
