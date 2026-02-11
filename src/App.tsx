import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
