import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './layout.css'

const Layout = () => {
  return (
    <>
    <header>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">Home</Link>
        <div className="buscar">
            <input type="text"/>
            <input type="button" value="🔍"/>
        </div>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/Personaje-al-azar" value="Personaje al azar">Personaje al azar</Link>
    </header>
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default Layout