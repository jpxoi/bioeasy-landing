import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './Pages/Landing';
import Error404 from './Pages/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
  )
}

export default App
