import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Createpost = () => {
  const { singOut } = useAuth()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Create post</h1>
      <button onClick={() => singOut(() => navigate('/', { replace: true }))}>SingOut</button>
    </div>
  )
}

export { Createpost }