import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Aboutpage = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>Some information about us</p>
      <ul>
        <li><Link to='contacts'>Contacts</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export { Aboutpage }