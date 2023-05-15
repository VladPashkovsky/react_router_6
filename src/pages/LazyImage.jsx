import React from 'react'
import Images from '../components/Images'

const pictures = [
  {
    id: 1,
    url: 'https://funnymodo.com/wp-content/uploads/2016/09/1474940715_maxresdefault.jpg'
  },
  {
    id: 2,
    url: 'https://i.ytimg.com/vi/ba5huxCqYM4/maxresdefault.jpg'
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/originals/38/6e/e6/386ee63444335ed6115c50ac290eaf4b.jpg'
  },
  {
    id: 4,
    url: 'https://cdn.fishki.net/upload/post/201601/05/1801940/2609a3b8a75c22ecc16a6435c37fd33c.jpg'
  },
  {
    id: 5,
    url: 'https://memestatic.fjcdn.com/pictures/_852ff2_6556678.jpg'
  },
  {
    id: 6,
    url: 'https://funnymodo.com/wp-content/uploads/2016/09/1474940715_maxresdefault.jpg'
  },
  {
    id: 7,
    url: 'https://i.ytimg.com/vi/ba5huxCqYM4/maxresdefault.jpg'
  },
  {
    id: 8,
    url: 'https://i.pinimg.com/originals/38/6e/e6/386ee63444335ed6115c50ac290eaf4b.jpg'
  },
  {
    id: 9,
    url: 'https://cdn.fishki.net/upload/post/201601/05/1801940/2609a3b8a75c22ecc16a6435c37fd33c.jpg'
  },
  {
    id: 10,
    url: 'https://memestatic.fjcdn.com/pictures/_852ff2_6556678.jpg'
  }
]

const LazyImage = () => {
  return (
    <div style={{ display: 'table-column'}}>
      {pictures.map((pic) => (
        <Images id={pic.id} key={pic.id} width='800' height='800' src={pic.url}/>
        ))}
    </div>
  )
}

export default LazyImage