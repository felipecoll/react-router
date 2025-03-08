import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'
import Menu from './pages/Menu.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogPost from './pages/BlogPost.jsx'



function App() {
  
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blog/" element={<BlogPage/>} />
          <Route path="/blog/:id" element={<BlogPost/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
