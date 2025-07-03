import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Categorias from './pages/categorias/Categorias'
import Ofertas from './pages/ofertas/Ofertas'
import Produtos from './components/produtos/produtos'



function App() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/sobre" element={<Sobre />} />
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
