import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'

const setActive = ({ isActive }) => isActive ? 'active-link' : ''

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to='/' className={setActive}>Home</NavLink>
        <CustomLink to='/posts'>Blog</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/image'>LazyImage</CustomLink>
      </header>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Outlet />
      </div>

      <footer>2022</footer>
    </>
  )
}

export { Layout }