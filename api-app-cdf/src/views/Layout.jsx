import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header>
        <Link to="/">Home</Link>
        <div className="buscar">
            <input type="text"/>
            <input type="button" value="🔍"/>
        </div>
        <Link to="/Personaje-al-azar" value="Personaje al azar">Personaje al azar</Link>
    </header>
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default Layout