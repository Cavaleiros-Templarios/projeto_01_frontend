import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Categorias from './pages/categorias/Categorias'
import Ofertas from './pages/ofertas/Ofertas'



function App() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/ofertas" element={<Ofertas />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </>
    )
}

export default App
