import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>About</Link>
      </header>
      <Outlet />
      <footer>2022</footer>
    </>
  )
}

export { Layout }