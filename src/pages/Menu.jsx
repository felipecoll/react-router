import React from 'react'
import { NavLink } from 'react-router-dom'

const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    { path: '/blog', name: 'BlogPage' },
    { path: '/contact', name: 'Contact' },
    { path: '/profile', name: 'Profile' },
    { path: '/login', name: 'Login' },
    { path: '/logout', name: 'Logout' }
]

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink 
              style={({ isActive }) => ({
                color: isActive ? 'blue' : 'white'
              })} 
              to={route.path} 
              end
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu