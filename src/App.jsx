import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'
import Menu from './pages/Menu.jsx'

function App() {
  
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<h1><Home/></h1>} />
          <Route path="/about" element={<h1><About/></h1>} />
          <Route path="/services" element={<h1><Services/></h1>} />
          <Route path="/contact" element={<h1><Contact/></h1>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
