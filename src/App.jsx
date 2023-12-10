import './App.css'
import Footer from './Containers/Footer'
import Header from './Containers/Header'
import Landing from './Pages/Landing'

function App() {
  return (
    <>
      <Header/>
      <main className="App">
        <Landing/>
      </main>
      <Footer/>
    </>
  )
}

export default App
