import React from 'react'
import { Link } from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <div>
      <h1>This page doesn't exist</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}

export { Notfoundpage }