import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BlogFilter } from '../components/BlogFilter'

const Blogpage = () => {
  const [posts, setPosts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const postQuery = searchParams.get('post') || ''
  const latest = searchParams.has('latest')

  const startForm = latest ? 80 : 1

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(date => setPosts(date))
  }, [])

  return (
    <div>
      <h1>Blog must be here</h1>
      <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
      <Link to='/posts/new'>Add new post</Link>
      {
        posts
          .filter(post => post.title.includes(postQuery) && post.id >= startForm)
          .map(post => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <li>{post.title}</li>
            </Link>
          ))
      }
    </div>
  )
}

export default Blogpage