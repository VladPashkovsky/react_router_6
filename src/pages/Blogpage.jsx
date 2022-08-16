import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Blogpage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(date => setPosts(date))
  }, [])

  return (
    <div>
      <h1>Blog must be here</h1>
      {
        posts.map(post => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export { Blogpage }