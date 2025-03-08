import { HashRouter, Routes, Route } from 'react-router-dom'
import {Home} from './Home'
import './App.css'

function App() {
  
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
