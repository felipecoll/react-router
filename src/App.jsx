import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthProvider } from './pages/auth.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'
import Menu from './pages/Menu.jsx'
import BlogPage from './pages/BlogPage.jsx'
import Profile from './pages/Profile.jsx'
import BlogPost from './pages/BlogPost.jsx'
import LoginPage from './pages/LoginPage.jsx'
import LogoutPage from './pages/LogoutPage.jsx'



function App() {
  
  return (
    <>
      <HashRouter>
        <AuthProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":id" element={<BlogPost />} />
          </Route>

          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/logout" element={<LogoutPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
