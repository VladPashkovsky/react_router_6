import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Singlepage = () => {
  const { id } = useParams()
  const [ post, setPost ] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(date => setPost(date))
  }, [id])

  return (
    <div>
      {post && (
        <>
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  )
}

export { Singlepage }